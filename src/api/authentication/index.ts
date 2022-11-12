import { UserLocale } from '@/api/user/type';
import httpClient from '@/http';
import { AuthURL, AccessToken } from './type';
import { Code } from '@/api/code';

/**
 * Get google oauth url
 * @see https://api-docs.lipoic.org/#/Authentication/get_authentication_google_url
 * @param redirectUri the uri to redirect to after login
 */
export async function getGoogleOauthUrl(redirectUri: string): Promise<AuthURL> {
  const body = await httpClient.get<AuthURL>('/authentication/google/url', {
    redirectUri,
  });

  if (body.code === Code.SUCCESS && body.data) {
    return body.data;
  }

  return Promise.reject(body);
}

/**
 * Get facebook oauth url
 * @see https://api-docs.lipoic.org/#/Authentication/get_authentication_facebook_url
 * @param redirectUri the uri to redirect to after login
 */
export async function getFacebookOauthUrl(
  redirectUri: string
): Promise<AuthURL> {
  const body = await httpClient.get<AuthURL>('/authentication/facebook/url', {
    redirectUri,
  });

  if (body.code === Code.SUCCESS && body.data) {
    return body.data;
  }

  return Promise.reject(body);
}

/**
 * Get access token by google oauth code
 * @param code a oauth code from google
 * @param redirectUri the uri to redirect to after login
 * @param locale the locale of the user
 * @see https://api-docs.lipoic.org/#/Authentication/get_authentication_google_callback
 */
export async function getTokenByGoogleOauthCode(
  code: string,
  redirectUri: string,
  locale: UserLocale
): Promise<AccessToken> {
  const params = {
    code,
    redirectUri,
    locale,
  };

  const body = await httpClient.get<AccessToken>(
    '/authentication/google/callback',
    params
  );

  if (body.code === Code.SUCCESS && body.data) {
    return body.data;
  }

  return Promise.reject(body);
}

/**
 * Get access token by facebook oauth code
 * @param code a oauth code from facebook
 * @param redirectUri the uri to redirect to after login
 * @param locale the locale of the user
 * @see https://api-docs.lipoic.org/#/Authentication/get_authentication_facebook_callback
 */
export async function getTokenByFacebookOauthCode(
  code: string,
  redirectUri: string,
  locale: UserLocale
): Promise<AccessToken> {
  const params = {
    code,
    redirectUri,
    locale,
  };

  const body = await httpClient.get<AccessToken>(
    '/authentication/facebook/callback',
    params
  );

  if (body.code === Code.SUCCESS && body.data) {
    return body.data;
  }

  return Promise.reject(body);
}
