import {
  afterAll,
  afterEach,
  beforeAll,
  test,
  expect,
  beforeEach,
} from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import { createPinia, setActivePinia } from 'pinia';
import { HttpClient } from '@/http';

const baseURL = 'http://localhost:8000';

const getResponse = {
  code: 0,
  data: {
    message: 'Hello, World!',
  },
};

const postResponse = {
  code: 0,
  data: {
    message: 'success created data',
  },
};

const patchResponse = {
  code: 0,
  data: {
    message: 'success updated data',
  },
};

const deleteResponse = {
  code: 0,
  data: {
    message: 'success deleted data',
  },
};

const notfoundResponse = {
  code: 1,
};

beforeEach(() => {
  setActivePinia(createPinia());
});

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
  const response = await client.get('/test');

  console.log(response);

  expect(response).toEqual({
    code: 1,
  });
});

test('unknown path (enable reconnect)', async () => {
  const client = new HttpClient({ baseURL });

  await expect(client.get('/abc')).rejects.toThrow();
});

test('unknown path (disable reconnect)', async () => {
  const client = new HttpClient({ baseURL, reconnect: false });

  await expect(client.get('/abc')).rejects.toThrow();
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
