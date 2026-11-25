/* eslint-disable @nx/enforce-module-boundaries */

import { appStorageService } from '@open-webui-react-native/shared/data-access/storage';
import { normalizeServerUrl } from './normalize-server-url';

/** Optional default server for private deployments; empty means users enter their own server URL. */
export const defaultApiUrl = normalizeServerUrl(process.env.EXPO_PUBLIC_OPEN_WEBUI_URL ?? '');

export const resolveApiUrl = (url: string): string => normalizeServerUrl(url);

export const getDisplayApiUrl = (): string => {
  const stored = normalizeServerUrl(appStorageService.apiUrl.get());

  return stored || defaultApiUrl;
};

export const getApiUrl = (): string => getDisplayApiUrl();

export const getHost = (url: string): string =>
  url
    .replace(/^https?:\/\//, '')
    .split('/')[0]
    .toLowerCase();
