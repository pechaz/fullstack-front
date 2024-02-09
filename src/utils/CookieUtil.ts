import Cookies from "js-cookie";

export const getCookie = (
  key: string,
  parseAsJson: boolean = true
): Object | string | undefined => {
  const val: string = String(Cookies.get(key));
  if (parseAsJson) {
    try {
      const obj = JSON.parse(val);
      return obj;
    } catch (e) {
      return undefined;
    }
  } else {
    return val;
  }
};

export const setCookie = (key: string, value: Object | string): boolean => {
  try {
    if (typeof value !== "string") {
      const cookieVal = JSON.stringify(value);
      Cookies.set(key, cookieVal, { path: "/" });
    } else {
      Cookies.set(key, value, { path: "/" });
    }

    return true;
  } catch (e) {
    return false;
  }
};

export const removeCookie = (key: string) => {
  Cookies.remove(key);
};
