import httpClient from '@/http';
import { AuthUrl } from './type';

/** get google oauth url
 * @url https://api-docs.lipoic.org/router/apis/authentication/api/fn.google_oauth.html
 * @param redirectUrl the url to redirect to after login
 */
export const getGoogleOauthUrl = async (redirectUrl: string) => {
  const params = {
    redirect_uri: redirectUrl,
  };

  return (await httpClient.get<AuthUrl>('/authentication/google/url', params))
    .data?.url;
};

/** get facebook oauth url
 * @url https://api-docs.lipoic.org/router/apis/authentication/api/fn.facebook_oauth.html
 * @param redirectUrl the url to redirect to after login
 */
export const getFacebookOauthUrl = async (redirectUrl: string) => {
  const params = {
    redirect_uri: redirectUrl,
  };

  return (await httpClient.get<AuthUrl>('/authentication/facebook/url', params))
    .data?.url;
};
