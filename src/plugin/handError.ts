import { AppType } from '.';

export default (app: AppType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-param-reassign
  app.config.errorHandler = (err: any) => {
    const { message, stack } = err;
    console.error(message);
    console.error(stack);
    // TODO send errors to server
  };
};
