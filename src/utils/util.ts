export function deserializeJson<T>(data: string): T {
  function handleDate(_key: unknown, value: unknown): unknown | Date {
    if (typeof value === 'string') {
      const date = Date.parse(value);

      if (!isNaN(date)) {
        return new Date(date);
      }
    }

    return value;
  }

  return <T>JSON.parse(data, handleDate);
}
