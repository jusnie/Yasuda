import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { decode } from 'base64-arraybuffer';
import Constants from 'expo-constants';
import { SupabaseBucket, SupabaseTable } from './enums';
import { SubmitFeedbackAttachment, SubmitFeedbackRequest } from './models';

class SupabaseService {
  private client?: SupabaseClient;

  public init(): void {
    const supabaseConfig = Constants.expoConfig?.extra?.supabase;
    const url = supabaseConfig?.url;
    const publishableKey = supabaseConfig?.publishableKey;

    if (!url || !publishableKey) {
      this.client = undefined;
      return;
    }

    this.client = createClient(url, publishableKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });
  }

  public async submit(request: SubmitFeedbackRequest): Promise<void> {
    const client = this.getClient();
    const attachmentPaths = request.attachments?.length
      ? await Promise.all(request.attachments.map((attachment, index) => this.uploadAttachment(attachment, index)))
      : [];

    const { error } = await client.from(SupabaseTable.FEEDBACK).insert({
      email: request.email,
      message: request.message,
      platform: request.platform,
      app_version: request.appVersion,
      api_version: request.apiVersion,
      attachment_paths: attachmentPaths,
    });

    if (error) {
      throw error;
    }
  }

  private getClient(): SupabaseClient {
    if (!this.client) {
      throw new Error('Feedback is unavailable until a Supabase project is configured.');
    }

    return this.client;
  }

  private async uploadAttachment(attachment: SubmitFeedbackAttachment, index: number): Promise<string> {
    const fallbackFileName = attachment.mimeType?.startsWith('video/') ? 'video.mp4' : 'image.jpg';
    const path = `${Date.now()}-${index}-${attachment.fileName ?? fallbackFileName}`;

    const { error } = await this.getClient().storage
      .from(SupabaseBucket.FEEDBACK_ATTACHMENTS)
      .upload(path, decode(attachment.base64), {
        contentType: attachment.mimeType,
      });

    if (error) {
      throw error;
    }

    return path;
  }
}

export const supabaseService = new SupabaseService();
