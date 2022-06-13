import { afterAll, afterEach, beforeAll, test, expect, describe } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { globalConfig } from '@/config';
import {
  getGoogleOauthUrl,
  getFacebookOauthUrl,
  getTokenByGoogleOauthCode,
  getTokenByFacebookOauthCode,
} from '@/api/authentication';

const { baseURL } = globalConfig.http;

const googleOauthUrl =
  'https://accounts.google.com/o/oauth2/auth?client_id=abcd&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&redirect_uri=https%3A%2F%2Fwww.example.com%2Flogin%2Fgoogle%2Fcallback';
const facebookOauthUrl =
  'https://www.facebook.com/dialog/oauth?client_id=abc&response_type=code&scope=public_profile%2Cemail&redirect_uri=https%3A%2F%2Fwww.example.com%2Flogin%2Ffacebook%2Fcallback';

const mockToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

describe('oauth', () => {
  test('get google oauth url', async () => {
    const url = await getGoogleOauthUrl(
      'https://www.example.com/login/google/callback'
    );

    expect(url).toBe(googleOauthUrl);
  });

  test('get facebook oauth url', async () => {
    const url = await getFacebookOauthUrl(
      'https://www.example.com/login/facebook/callback'
    );

    expect(url).toBe(facebookOauthUrl);
  });

  test('get token by google oauth code', async () => {
    const token = await getTokenByGoogleOauthCode(
      'test_google_oauth_code',
      'https://www.example.com/login/facebook/callback'
    );

    expect(token).toBe(mockToken);
  });

  test('get token by facebook oauth code', async () => {
    const token = await getTokenByFacebookOauthCode(
      'test_facebook_oauth_code',
      'https://www.example.com/login/facebook/callback'
    );

    expect(token).toBe(mockToken);
  });
});

export const apiHandlers = [
  rest.get(`${baseURL}/authentication/google/url`, (req, res, ctx) => {
    if (!req.url.searchParams.get('redirect_uri')) return;

    const response = {
      code: 200,
      message: 'ok',
      data: {
        url: googleOauthUrl,
      },
    };

    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get(`${baseURL}/authentication/facebook/url`, (req, res, ctx) => {
    if (!req.url.searchParams.get('redirect_uri')) return;

    const response = {
      code: 200,
      message: 'ok',
      data: {
        url: facebookOauthUrl,
      },
    };

    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get(`${baseURL}/authentication/google`, (req, res, ctx) => {
    if (req.url.searchParams.get('code') !== 'test_google_oauth_code') return;
    if (!req.url.searchParams.get('oauth_redirect_uri')) return;

    const response = {
      code: 200,
      message: 'ok',
      data: {
        token: mockToken,
      },
    };

    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get(`${baseURL}/authentication/facebook`, (req, res, ctx) => {
    if (req.url.searchParams.get('code') !== 'test_facebook_oauth_code') return;
    if (!req.url.searchParams.get('oauth_redirect_uri')) return;

    const response = {
      code: 200,
      message: 'ok',
      data: {
        token: mockToken,
      },
    };

    return res(ctx.status(200), ctx.json(response));
  }),
];

const server = setupServer(...apiHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
