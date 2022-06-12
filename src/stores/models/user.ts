export interface User {
  username: string;
  email: string;
  modes: UserMode[];
  connects: ConnectAccount[];
}

export enum UserMode {
  Student,
  Teacher,
  Parents,
}

export enum ConnectType {
  Google,
  Facebook,
  // TaiwanCloudEducation,
}

export interface ConnectAccount {
  account_type: ConnectType;
  name: string;
  email: string;
}
