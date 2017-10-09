import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';

const getCookies = () => new Cookies();

export async function getAccountPayload() {
  return new Promise((resolve, reject) => {
    try {
      const accessToken = getCookies().get('access_token');
      const token = jwt(accessToken);
      resolve(token);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getUserId() {
  const accountPayload = await getAccountPayload();
  return accountPayload.id;
}

export function logoutUser() {
  return new Promise((resolve, reject) => {
    try {
      const cookies = getCookies();
      const allCookies = cookies.getAll();

      Object.keys(allCookies).map(cookies.remove);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

export default {
  getAccountPayload,
  getUserId,
  logoutUser,
};
