import { setCookie, getCookie, removeCookie } from './storage';

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires };

export const COOKIE_ACCOUNT = 'acc';

export const setAccount = (account) => setCookie(COOKIE_ACCOUNT, account, options);
export const getAccount = () => getCookie(COOKIE_ACCOUNT);
export const removeAccount = () => removeCookie(COOKIE_ACCOUNT);
