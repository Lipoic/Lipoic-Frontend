import httpClient from '@/http';
import { AuthUser, PublicUser, UserLocale } from '@/api/user/type';
import { Code } from '@/api/code';
import { AccessToken } from '@/api/authentication/type';

/**
 * Get the info of the current user (authorization required).
 * @see https://api-docs.lipoic.org/#/User/get_user_info
 */
export async function getCurrentUserInfo(): Promise<AuthUser> {
  const body = await httpClient.get<AuthUser>('/user/info', undefined, {
    authentication: true,
  });

  if (body.code === Code.SUCCESS && body.data) {
    return body.data;
  }

  return Promise.reject(body);
}

/**
 * Get the user info by user id.
 * @see https://api-docs.lipoic.org/#/User/get_user_info__userId_
 */
export async function getUserInfoById(userId: string): Promise<PublicUser> {
  const body = await httpClient.get<PublicUser>(`/user/info/${userId}`);

  if (body.code === Code.SUCCESS && body.data) {
    return body.data;
  }

  return Promise.reject(body);
}

/**
 * Sign up a new user via email and password.
 * @see https://api-docs.lipoic.org/#/User/post_user_signup
 */
export async function signUp(
  username: string,
  email: string,
  password: string,
  locale: UserLocale
): Promise<void> {
  const data = {
    username,
    email,
    password,
    locale,
  };

  const body = await httpClient.post('/user/signup', data);

  if (body.code === Code.SUCCESS) {
    return Promise.resolve();
  }

  if (body.code === Code.Sign_Up_Email_Already_Used) {
    return Promise.reject(new Error('Email already used'));
  }

  return Promise.reject(body);
}

/**
 * Login via email and password
 * @see https://api-docs.lipoic.org/#/User/post_user_login
 */
export async function login(
  email: string,
  password: string
): Promise<AccessToken> {
  const body = await httpClient.post<AccessToken>('/user/login', {
    email,
    password,
  });

  if (body.code === Code.SUCCESS && body.data) {
    return body.data;
  }

  return Promise.reject(body);
}

/**
 * Verify the email account by the code
 * @param code A code from the email sent by the backend
 * @see https://api-docs.lipoic.org/#/User/get_user_verify
 */
export async function verifyEmail(code: string): Promise<AccessToken> {
  const body = await httpClient.get<AccessToken>('/user/verify', { code });

  if (body.code === Code.SUCCESS && body.data) {
    return body.data;
  }

  if (body.code === Code.Verify_Email_Error) {
    return Promise.reject(new Error('The code is invalid or expired'));
  }

  return Promise.reject(body);
}
