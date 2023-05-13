

export const USER_ENDPOINTS = {
  REGISTER: () => '/auth/register',
  FORGET_PASSWORD: () => '/user/forgot-password',
  LOGIN: () => '/auth/login',
  LOGOUT: () => '/auth/logout',
  RESET_LOGIN: () => '/auth/reset',
  RECOVERY_MAIL: () => '/user/recovery-mail',
  CREATE_ADMIN: () => '/auth/create',
  CHECK: () => '/auth/check',
  VERIFY_RESET: () => '/user/verify-reset',
  RESET_PASSWORD: () => '/user/reset-password',
}


export const USER_TYPE = {
  ADMIN: () => 'admin',
  USER:() => 'user'
}

export const USER_PLAN = {
  ADD_PLAN: () => '/plan',
  UPDATE_PLAN: () => '/plan',
  GET_PLAN: () => '/plan',
  GET_PLAN_BY_ID: () => '/plan/planid',
  DELETE_PLAN: () => '/plan',
  GET_USER_PLAN: () => '/plan/user-plan',
  PLAN_UPGRADE: () => '/plan/upgrade',
}

export const PROFILE = {
  ADMIN_PROFILE: () => '/user/profiles',
  USER_PROFILE: () => '/user/profile',
  CREATE_USER_PROFILE: () => '/user/profile',
  UPDATE_USER_PROFILE: () => '/user/profile',
  PREVIEW_USER: () => '/preview/profile',
}

export const LINK = {
  ADD_LINK: () => '/user/resources',
  GET_LINK: () => '/user/resources',
  DELETE_LINK: () => '/user/resources',
  PREVIEW_LINK: () => '/preview/resources',
}

export const BUTTONS = {
  ADD_BUTTON: () => '/user/button',
  GET_BUTTON: () => '/user/button',
  DELETE_BUTTON: () => '/user/button',
  UPDATE_BUTTON: () => '/user/button',
  PREVIEW_BUTTON: () => '/preview/button',
}

export const APPREANCE = {
  ADD_APPREANCE: () => '/user/appearance',
  GET_APPREANCE: () => '/user/appearance',
  PREVIEW_APPREANCE: () => '/preview/appearance',
}

export const VERIFICATION = {
  VERIFY: () => '/user/verification-link',
  GET_BUTTON: () => '/user/button',
  DELETE_BUTTON: () => '/user/button',
  PREVIEW_VERIFY: () => '/preview/verify',
}

export const USER = {
  UPGRADE_PLAN: () => '/plan/upgrade',
  UPDATE_USER_INFO: () => '/user/update',
  VERIFY_LINK: () => '/user/verification-link',
  GET_VERIFY: () => '/user/verify',
  DELETE_ACC: () => '/user/account',
}

export const GET_USERS = {
  GET_USER: () => '/auth/users',
  DELETE_ACC: () => '/auth/user',
}


export const WALLET = {
  GET_WALLET: () => '/wallet/balance',
  GET_WALLET_HISTORY: () => '/wallet/history',
  FUND_WALLET: () => '/wallet',
}

