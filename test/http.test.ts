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

const patchResponse = {
  code: 200,
  message: 'ok',
  data: 'success updated data',
};

const deleteResponse = {
  code: 200,
  message: 'ok',
  data: 'success deleted data',
};

const notfoundResponse = {
  code: 404,
  message: 'Resource not found.',
};

test('get method', async () => {
  const client = new HttpClient({ baseURL });
  const response = await client.get('/item');

  expect(response).toEqual(getResponse);
});

test('post method', async () => {
  const client = new HttpClient({ baseURL });
  const response = await client.post('/item');

  expect(response).toEqual(postResponse);
});

test('patch method', async () => {
  const client = new HttpClient({ baseURL });
  const response = await client.patch('/item');

  expect(response).toEqual(patchResponse);
});

test('delete method', async () => {
  const client = new HttpClient({ baseURL });
  const response = await client.delete('/item');

  expect(response).toEqual(deleteResponse);
});

test('notfound path', async () => {
  const client = new HttpClient({ baseURL });

  await expect(client.get('/test')).rejects.toThrowError(
    /^Resource not found.$/
  );
});

export const restHandlers = [
  rest.get(`${baseURL}/item`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getResponse));
  }),
  rest.post(`${baseURL}/item`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postResponse));
  }),
  rest.patch(`${baseURL}/item`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(patchResponse));
  }),
  rest.delete(`${baseURL}/item`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(deleteResponse));
  }),
  rest.all(`${baseURL}/test`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json(notfoundResponse));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
