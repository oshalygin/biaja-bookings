import Cookies from 'universal-cookie';

const getCookies = () => new Cookies();

export async function loadToken() {
  return new Promise((resolve, reject) => {
    try {
      const token = getCookies().get('access_token');
      resolve(token);
    } catch (error) {
      reject(error);
    }
  });
}

export function removeToken() {
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
  removeToken,
  loadToken,
};
