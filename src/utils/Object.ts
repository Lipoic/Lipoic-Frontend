// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type keyType = keyof any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deepCopy = <T extends Record<keyType, any> | any[]>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

const isDict = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any
) => Object.prototype.toString.call(obj) === '[object Object]';

/** deep assign
 * Recursively assigns own enumerable properties of source objects to the target object and returns the target object. Additional source objects will overwrite previous ones.
 * @param args - The objects to assign.
 */
export const deepAssign = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: Array<Array<any> | { [k: string | number | symbol]: any }>
) => {
  if (args.length < 2) return args[0];

  let result = args[0];
  args.shift();
  args.forEach((item) => {
    if (isDict(item)) {
      if (!isDict(result)) result = {};
      for (const key in item) {
        if (
          result[key] &&
          (isDict(result[key]) || item[key] instanceof Array)
        ) {
          result[key] = deepAssign(result[key], item[key]);
        } else result[key] = item[key];
      }
    } else if (item instanceof Array) {
      if (!(result instanceof Array)) result = [];
      item.forEach((arrItem, arrIndex) => {
        if (isDict(arrItem)) {
          result[arrIndex] = deepAssign(result[arrIndex]);
        } else result[arrIndex] = arrItem;
      });
    }
  });
  return result;
};

/** dict omit
 * Returns a new object with properties from the original object omitted.
 * for typescript Omit type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DictOmit = <T extends Record<keyType, any>, K extends keyType>(
  obj: T,
  ...keys: K[]
): Omit<T, K> => {
  const newObj = deepCopy(obj);

  // eslint-disable-next-line no-param-reassign
  for (const key of keys) delete newObj[key];

  return newObj;
};
