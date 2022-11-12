import { AppType } from '.';

export default (app: AppType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-param-reassign
  app.config.errorHandler = (err: any) => {
    console.error(err);

    // TODO send errors to server
  };
};
