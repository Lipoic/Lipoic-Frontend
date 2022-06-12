import { afterAll, afterEach, beforeAll, test, expect } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { HttpClient } from '@/http';

const baseURL = 'http://localhost:8000';

const home = {
  code: 200,
  message: 'ok',
  data: 'hello world',
};

test('get method', async () => {
  const client = new HttpClient({ baseURL });
  const response = await client.get('/');

  expect(response).toEqual(home);
});

export const restHandlers = [
  rest.get(`${baseURL}/`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(home));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
