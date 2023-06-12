/**
 * The public user info.
 */
export interface PublicUser {
  id: string;
  username: string;
  verifiedEmail: boolean;
  modes: UserMode[];
  locale: UserLocale;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * The authenticated user information.
 */
export interface AuthUser extends PublicUser {
  email: string;
  connects: ConnectAccount[];
}

/**
 * The connect account type.
 */
export enum ConnectType {
  Google,
  Facebook,
  // TaiwanCloudEducation,
}

/**
 * The user mode.
 */
export enum UserMode {
  Student,
  Teacher,
  Parents,
}

/**
 * The connect account of the user for save the third party OAuth info (e.g. google, facebook, etc.).
 */
export interface ConnectAccount {
  accountType: ConnectType;
  name: string;
  email: string;
}

/**
 * Acceptable user locales.
 *
 * List of acceptable locales:
 * - en-US (English - United States)
 * - zh-CN (Simplified Chinese - China)
 * - zh-TW (Traditional Chinese - Taiwan)
 *
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export const USER_LOCALES = ['en-US', 'zh-CN', 'zh-TW'] as const;

/**
 * The user locale code.
 *
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 * @see USER_LOCALES
 */
export type UserLocale = (typeof USER_LOCALES)[number];

/**
 * Check if the user locale is valid.
 * @param locale The user locale.
 * @returns True if the user locale is valid, otherwise false.
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isUserLocale = (locale: any): locale is UserLocale =>
  USER_LOCALES.includes(locale);
