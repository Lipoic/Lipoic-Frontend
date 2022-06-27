import { createPinia, setActivePinia } from 'pinia';
import { describe, test, expect, beforeAll, beforeEach } from 'vitest';
import { useUserStore } from '@/stores/models/user';
import { ConnectType, UserMode, UserInfo } from '@/api/user/type';

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
    const info: UserInfo = {
      username: 'test',
      email: 'test@gmail.com',
      modes: [UserMode.Student],
      connects: [
        {
          account_type: ConnectType.Google,
          name: 'test',
          email: 'test@gmail.com',
        },
      ],
    };

    localStorage.setItem('user_info', JSON.stringify(info));
    localStorage.setItem('token', 'token');

    const store = useUserStore();
    store.init();

    expect(store.info).toEqual(info);
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
      username: 'test',
      email: 'test@test.com',
      modes: [],
      connects: [],
    };

    expect(store.isLoggedIn()).toBeTruthy();
  });

  test('token is null', () => {
    const store = useUserStore();
    store.token = null;
    store.info = {
      username: 'test',
      email: 'test@test.com',
      modes: [],
      connects: [],
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
    username: 'test',
    email: 'test@test.com',
    modes: [],
    connects: [],
  };

  store.logout();

  expect(store.token).toBeNull();
  expect(store.info).toBeNull();
  expect(localStorage.getItem('token')).toBeNull();
  expect(localStorage.getItem('user_info')).toBeNull();
  expect(store.isLoggedIn()).toBeFalsy();

  expect(location.pathname).toEqual('/');
});
