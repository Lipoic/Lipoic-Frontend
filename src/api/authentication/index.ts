import httpClient from '@/http';
import { AuthURL, AccessToken } from './type';

/** get google oauth url
 * @url https://api-docs.lipoic.org/router/apis/authentication/api/fn.google_oauth.html
 * @param redirectUri the uri to redirect to after login
 */
export const getGoogleOauthUrl = async (redirectUri: string) => {
  const params = {
    redirect_uri: redirectUri,
  };

  return (await httpClient.get<AuthURL>('/authentication/google/url', params))
    .data?.url;
};

/** get facebook oauth url
 * @url https://api-docs.lipoic.org/router/apis/authentication/api/fn.facebook_oauth.html
 * @param redirectUri the uri to redirect to after login
 */
export const getFacebookOauthUrl = async (redirectUri: string) => {
  const params = {
    redirect_uri: redirectUri,
  };

  return (await httpClient.get<AuthURL>('/authentication/facebook/url', params))
    .data?.url;
};

/** get token by google oauth code
 * @url https://api-docs.lipoic.org/router/apis/authentication/api/fn.google_oauth_code.html
 * @param code a oauth code from google
 * @param oauthRedirectUri the uri to redirect to after login
 */
export const getTokenByGoogleOauthCode = async (
  code: string,
  oauthRedirectUri: string
) => {
  const params = {
    code,
    oauth_redirect_uri: oauthRedirectUri,
  };

  return (await httpClient.get<AccessToken>('/authentication/google', params))
    .data?.token;
};

/** get token by facebook oauth code
 * @url https://api-docs.lipoic.org/router/apis/authentication/api/fn.facebook_oauth_code.html
 * @param code a oauth code from facebook
 * @param oauthRedirectUri the uri to redirect to after login
 */
export const getTokenByFacebookOauthCode = async (
  code: string,
  oauthRedirectUri: string
) => {
  const params = {
    code,
    oauth_redirect_uri: oauthRedirectUri,
  };

  return (await httpClient.get<AccessToken>('/authentication/facebook', params))
    .data?.token;
};
