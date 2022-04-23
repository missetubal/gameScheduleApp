/* eslint-disable no-console */
import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().withEncryption().initialize();

export const storeString = (key: string, value: string) => {
  try {
    return MMKV.setString(key, value, error => {
      if (error) {
        errors(error);
      }
    });
  } catch (e) {
    return errors(e);
  }
};

export const getString = (key: string) => {
  try {
    const result = MMKV.getString(key, error => {
      if (error) {
        errors(error);
      }
    });
    return result;
  } catch (e) {
    return errors(e);
  }
};

export const storeBool = (key: string, value: boolean) => {
  try {
    return MMKV.setBoolAsync(key, value);
  } catch (e) {
    return errors(e);
  }
};

export const getBool = (key: string): boolean => {
  const result = MMKV.getBool(key);
  return !!result;
};

export const storeObject = (key: string, value: Object) =>
  MMKV.setMap(key, value);

export const getObject = <T extends Record<any, any>>(key: string) => {
  const result = MMKV.getMap<T>(key);
  return result;
};

export const clearAll = () => {
  try {
    MMKV.clearStore();
  } catch (e) {
    errors(e);
  }
};

export const getToken = () => getString('token') !== null;

export const errors = (error: any) => console.log(error);
