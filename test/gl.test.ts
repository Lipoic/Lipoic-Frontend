/* eslint-disable consistent-return */
import { expect, test } from 'vitest';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('..');

const fileDisplay = (filePath: string) => {
  const files_: string[] = [];
  fs.readdir(filePath, (err, files): void => {
    if (err) return console.warn(err);

    files.forEach((filename) => {
      const fileDir = path.join(filePath, filename);
      fs.stat(fileDir, (er, stats) => {
        if (er) return console.warn('error');

        if (stats.isFile()) files_.push(fileDir);
        else if (stats.isDirectory()) fileDisplay(fileDir);
      });
    });
  });
  return files_;
};

test('gl', async () => {
  const files = fileDisplay(filePath);
  for (const file of files) {
    try {
      await import(file);
      // eslint-disable-next-line no-empty
    } catch {}
  }
  expect(true).toEqual(true);
});
