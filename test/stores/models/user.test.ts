import { createPinia, setActivePinia } from 'pinia';
import { describe, test, expect, beforeAll, beforeEach } from 'vitest';
import { useUserStore } from '@/stores/models/user';
import { ConnectType, UserMode, AuthUser } from '@/api/user/type';

beforeAll(() => {
  setActivePinia(createPinia());
});

beforeEach(() => {
  const store = useUserStore();
  store.token = null;
  store.info = null;

  localStorage.removeItem('token');
  localStorage.removeItem('user_info');
});

describe('init', () => {
  test('from local storage', () => {
    const user: AuthUser = {
      id: 'user id',
      username: 'test',
      verifiedEmail: true,
      email: 'test@gmail.com',
      modes: [UserMode.Student],
      locale: 'en-US',
      connects: [
        {
          accountType: ConnectType.Google,
          name: 'test',
          email: 'test@gmail.com',
        },
      ],
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    localStorage.setItem('user_info', JSON.stringify(user));
    localStorage.setItem('token', 'token');

    const store = useUserStore();
    store.init();

    expect(store.info).toEqual(user);
  });

  test('from local storage with invalid data', () => {
    localStorage.setItem('user_info', 'invalid');
    localStorage.setItem('token', 'token');

    const store = useUserStore();
    store.init();

    expect(store.info).toBeNull();
    expect(store.token).toEqual('token');
  });

  test('empty data', () => {
    const store = useUserStore();
    store.init();

    expect(store.info).toBeNull();
    expect(store.token).toBeNull();
  });
});

describe('is logged in', () => {
  test('token and info are not null', () => {
    const store = useUserStore();
    store.token = 'token';
    store.info = {
      id: 'user id',
      username: 'test',
      verifiedEmail: true,
      email: 'test@gmail.com',
      modes: [UserMode.Student],
      locale: 'en-US',
      connects: [
        {
          accountType: ConnectType.Google,
          name: 'test',
          email: 'test@gmail.com',
        },
      ],
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    expect(store.isLoggedIn()).toBeTruthy();
  });

  test('token is null', () => {
    const store = useUserStore();
    store.token = null;
    store.info = {
      id: 'user id',
      username: 'test',
      verifiedEmail: true,
      email: 'test@gmail.com',
      modes: [UserMode.Student],
      locale: 'en-US',
      connects: [
        {
          accountType: ConnectType.Google,
          name: 'test',
          email: 'test@gmail.com',
        },
      ],
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    expect(store.isLoggedIn()).toBeFalsy();
  });

  test('info is null', () => {
    const store = useUserStore();
    store.token = 'token';
    store.info = null;

    expect(store.isLoggedIn()).toBeFalsy();
  });
});

test('set token', () => {
  const store = useUserStore();
  store.setToken('token');

  expect(store.token).toEqual('token');
  expect(localStorage.getItem('token')).toEqual('token');
});

test('logout', () => {
  const store = useUserStore();
  store.token = 'token';
  store.info = {
    id: 'user id',
    username: 'test',
    verifiedEmail: true,
    email: 'test@gmail.com',
    modes: [UserMode.Student],
    locale: 'en-US',
    connects: [
      {
        accountType: ConnectType.Google,
        name: 'test',
        email: 'test@gmail.com',
      },
    ],
    updatedAt: new Date(),
    createdAt: new Date(),
  };

  store.logout();

  expect(store.token).toBeNull();
  expect(store.info).toBeNull();
  expect(localStorage.getItem('token')).toBeNull();
  expect(localStorage.getItem('user_info')).toBeNull();
  expect(store.isLoggedIn()).toBeFalsy();

  expect(location.pathname).toEqual('/');
});
