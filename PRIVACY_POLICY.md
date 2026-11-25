# Privacy Policy for Vertis

Last Updated: 11 Sep 2026

## Introduction

Vertis ("we," "our," or "the App") is a customized build maintained by Yasuda, based on the open-source Open MobileUI client originally developed by Ronas IT. The App connects to user-provided, self-hosted Open WebUI instances. This policy describes how information is handled in this customized build.

## Important Notice (No Developer Backend)

Vertis connects directly to the Open WebUI server URL that you configure in the App. It does not provide its own chat or inference backend. Optional feedback submission is disabled unless a Vertis-owned Supabase project is configured in the build; if enabled, feedback details and any attachments you choose to send are transmitted to that project.

## Information We Store Locally on Your Device

The App stores the following information locally to function:

- Server URL: the Open WebUI instance URL you enter.
- Authentication tokens: stored locally in encrypted storage to keep you signed in and to authenticate requests to your Open WebUI server.

We do not upload this information to our servers.

## Device Permissions

The App may request the following optional permissions, only when you choose to use the related features:

- Camera: to take photos for uploading.
- Photo library: to select and upload images from your device.

You can deny these permissions and still use the App’s core functionality.

## Crash and Error Reporting (Sentry)

Sentry reporting is disabled by default. If a build is configured with a Sentry DSN, Sentry may receive crash and application-error reports so the Vertis maintainer can diagnose problems.

In builds with Sentry enabled, an error report may include a crash message and stack trace, plus diagnostic details about failed requests to your Open WebUI server. The server domain/host is stripped. Request and response bodies are truncated and fields that may contain conversation text are redacted before sending.

Sentry reports may include the version number returned by your Open WebUI server. Vertis does not intentionally send chat content, prompts, responses, or the server’s address/domain to Sentry.

## Google Sign-In (Optional)

If your Open WebUI instance is configured to support Google Sign-In, the App may initiate a Google sign-in flow. We do not receive or store your Google password. Google may process authentication-related data under Google’s policies.

## What We Do NOT Collect

We do not collect, store, or have access to (on our servers):

- Your conversations, chat messages, attachments, or AI prompts/responses
- Usage analytics or telemetry
- Location data
- Contacts or address book data
- Advertising identifiers

## Data Transmission

The App sends requests (including chat content) to the Open WebUI server you configure.

- If you use an HTTPS/WSS server URL, data is encrypted in transit.
- If you use an HTTP/WS server URL, data may not be encrypted in transit. We recommend using HTTPS/WSS.

## Data Retention

- Authentication tokens and server URL: stored locally until you log out, remove the server configuration, or uninstall the App.
- Conversation data: stored and managed by your Open WebUI server according to that server’s configuration and policies. We do not control or access server-side retention.

## Your Rights and Choices

- Delete local data: log out, remove the configured server, or uninstall the App.
- Control permissions: manage camera and photo library permissions in your device settings.
- Change server: you can change the Open WebUI server URL at any time.
- Review source code: you can review how the App handles data by inspecting the source code.

## Open Source

Vertis is a modified distribution of Open MobileUI, released under the GNU General Public License v3 (GPLv3). The original source is available at https://github.com/RonasIT/open-webui-react-native.

## Third-Party Platforms (App Stores)

Apple and Google may collect certain data independently when you download or use the App through their platforms, under their own terms and privacy policies.

## Children’s Privacy

The App is not intended for children under the age of 13. We do not knowingly collect personal information from children.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will update the “Last Updated” date above. Continued use of the App after changes means you accept the updated Policy.

## Contact Information

If you have questions about this Vertis customization or its privacy practices, contact Yasuda:

- Email: [juaniecuenca07@gmail.com](mailto:juaniecuenca07@gmail.com)

For questions about the original Open MobileUI project, see its [upstream repository](https://github.com/RonasIT/open-webui-react-native).

## Your Open WebUI Server

Your Open WebUI instance is operated by you or your organization and may have its own privacy policy and data handling practices. Please review your server’s policies to understand how your data is handled on the server side.

## Relationship to Open WebUI

Vertis is an independent client application and is not affiliated with Open WebUI Inc.
Open WebUI is a product of Timothy Jaeryang Baek (Open WebUI Inc.).

## Compliance

We aim to comply with applicable privacy laws, including GDPR and CCPA, where they apply.
