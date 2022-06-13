import { afterAll, afterEach, beforeAll, test, expect } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { globalConfig } from '@/config';
import { getGoogleOauthUrl, getFacebookOauthUrl } from '@/api/authentication';

const { baseURL } = globalConfig.http;

const googleOauthUrl =
  'https://accounts.google.com/o/oauth2/auth?client_id=abcd&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&redirect_uri=https%3A%2F%2Fwww.example.com%2Flogin%2Fgoogle%2Fcallback';
const facebookOauthUrl =
  'https://www.facebook.com/dialog/oauth?client_id=abc&response_type=code&scope=public_profile%2Cemail&redirect_uri=https%3A%2F%2Fwww.example.com%2Flogin%2Ffacebook%2Fcallback';

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

export const apiHandlers = [
  rest.get(`${baseURL}/authentication/google/url`, (_req, res, ctx) => {
    const response = {
      code: 200,
      message: 'ok',
      data: {
        url: googleOauthUrl,
      },
    };

    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get(`${baseURL}/authentication/facebook/url`, (_req, res, ctx) => {
    const response = {
      code: 200,
      message: 'ok',
      data: {
        url: facebookOauthUrl,
      },
    };

    return res(ctx.status(200), ctx.json(response));
  }),
];

const server = setupServer(...apiHandlers);

// Start server before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
