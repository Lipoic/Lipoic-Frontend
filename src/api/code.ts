/**
 * The custom status code of the response.
 * @see https://github.com/Lipoic/Lipoic-Backend/blob/develop/src/router/util/code.ts
 */
export enum Code {
  SUCCESS,
  NOT_FOUND,
  GET_AUTH_URL_ERROR,
  OAUTH_CODE_CALLBACK_ERROR,
  AUTH_ERROR,
  USER_NOT_FOUND,
  UPDATE_USER_INFO_ERROR,
  Sign_Up_Email_Already_Used,
  Sign_Up_Error,
  Verify_Email_Error,
  Login_User_Error,
  Login_User_Email_Not_Verified,
  INVALID_USER_AVATAR_FILE,
  USER_AVATAR_FILE_TOO_LARGE,
  USER_AVATAR_NOT_FOUND,
  MISSING_OR_INVALID_PARAMETERS,
  EMAIL_NOT_VERIFIED,
  CLASS_NAME_TOO_LONG,
  CLASS_DESCRIPTION_TOO_LONG,
}
