import axios from 'axios';
import { DEFAULT_HEADERS } from './requestUtilities';

export function get(endpoint, params) {
  return axios.get(endpoint, { ...(params && { params }) }, DEFAULT_HEADERS);
}

export function head(endpoint) {
  return axios.head(endpoint, DEFAULT_HEADERS);
}

export function put(endpoint, data) {
  return axios.put(endpoint, data, DEFAULT_HEADERS);
}

export function post(endpoint, data) {
  return axios.post(endpoint, data, DEFAULT_HEADERS);
}

export function patch(endpoint, data) {
  return axios.patch(endpoint, data, DEFAULT_HEADERS);
}

export function deleteApi(endpoint) {
  return axios.delete(endpoint, DEFAULT_HEADERS);
}

export default {
  get,
  head,
  put,
  post,
  patch,
  delete: deleteApi,
};
