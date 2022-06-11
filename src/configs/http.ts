export const HttpConfig = {
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  relink: true,
  retry: 2,
  retryDelay: 5e3,
  /** notify on success */
  notify: false,
  /** notify on error */
  notifyError: false,
  baseUrl: 'https://api.lipoic.org',
  /** allow add token url
   * @type {(string|RegExp)[]}
   */
  allowTokenUrl: [/^\//],
  /** message duration of errors or warnings */
  messageDuration: 4e3,
};

export default HttpConfig;
