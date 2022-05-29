import { AppType } from '.';

export default (app: AppType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.config.errorHandler = (err: any) => {
    const { message, stack } = err;
    console.error(message);
    console.error(stack);
    // TODO add post to server error
  };
};
