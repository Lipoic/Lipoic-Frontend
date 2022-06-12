import { afterAll, afterEach, beforeAll, test, expect } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { HttpClient } from '@/http';

const baseURL = 'http://localhost:8000';

const getResponse = {
  code: 200,
  message: 'ok',
  data: 'hello world',
};

const postResponse = {
  code: 200,
  message: 'ok',
  data: 'success created data',
};

test('get method', async () => {
  const client = new HttpClient({ baseURL });
  const response = await client.get('/get');

  expect(response).toEqual(getResponse);
});

test('post method', async () => {
  const client = new HttpClient({ baseURL });
  const response = await client.post('/post');

  expect(response).toEqual(postResponse);
});

export const restHandlers = [
  rest.get(`${baseURL}/get`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getResponse));
  }),
  rest.post(`${baseURL}/post`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postResponse));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
