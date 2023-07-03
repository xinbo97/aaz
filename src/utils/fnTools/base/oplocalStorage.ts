type KeyType = string;

enum StorageConstants {
  USER_INFO_KEY = 'userInfo', // 用户信息
  PERMISSIONS = 'permissions', // 项目权限信息 -- 暂定token 和 roles
}

export const getJson = (key: KeyType) => {
  return JSON.parse(window.localStorage.getItem(key)!);
};

export const setJson = (key: KeyType, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeJson = (key: KeyType) => {
  return window.localStorage.removeItem(key);
};

// 持久化用户信息
export const setStorageUserInfo = (userInfo = {}) => {
  setJson(StorageConstants.USER_INFO_KEY, userInfo);
};

// 获取用户信息
export const getStorageUserInfo = () => {
  return getJson(StorageConstants.USER_INFO_KEY);
};

// 持久化权限信息
export const setStoragePermissions = (permissions = {}) => {
  setJson(StorageConstants.PERMISSIONS, permissions);
};

// 获取权限信息
export const getStoragePermissions = () => {
  return getJson(StorageConstants.PERMISSIONS);
};
