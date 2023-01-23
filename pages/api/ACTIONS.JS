export const USER = {
  UPGRADE_PLAN: () => '/plan/upgrade',
}

export const USER_ENDPOINTS = {
  REGISTER: () => '/auth/register',
  FORGET_PASSWORD: () => '/user/forgot-password',
  LOGIN: () => '/auth/login',
  LOGOUT: () => '/auth/logout',
  RESET_LOGIN: () => '/auth/reset',
  RECOVERY_MAIL: () => '/user/recovery-mail',
  CREATE_ADMIN: () => '/auth/create',
}


export const USER_TYPE = {
  ADMIN: () => 'admin',
  USER:() => 'user'
}

export const USER_PLAN = {
  ADD_PLAN: () => '/plan',
  UPDATE_PLAN: () => '/plan',
  GET_PLAN: () => '/plan',
  DELETE_PLAN: () => '/plan',
  GET_USER_PLAN: () => '/plan/user-plan',
}

export const PROFILE = {
  ADMIN_PROFILE: () => '/user/profiles',
  USER_PROFILE: () => '/user/profile',
  CREATE_USER_PROFILE: () => '/user/profile',
}

export const LINK = {
  ADD_LINK: () => '/user/resources',
  GET_LINK: () => '/user/resources',
  DELETE_LINK: () => '/user/resources',
}

export const BUTTONS = {
  ADD_BUTTON: () => '/user/button',
  GET_BUTTON: () => '/user/button',
  DELETE_BUTTON: () => '/user/button',
}

export const VERIFICATION = {
  VERIFY: () => '/user/verification-link',
  GET_BUTTON: () => '/user/button',
  DELETE_BUTTON: () => '/user/button',
}