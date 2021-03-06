export const hostLocation = window.location.host;
const protocol = window.location.protocol;
const baseEndpoint = `${protocol}//${hostLocation}`;

export const ACCOUNT_ENDPOINT = `${baseEndpoint}/api/v1/account`;
export const REGISTRATION_ENDPOINT = `${baseEndpoint}/api/v1/registration`;
export const EVENTS_ENDPOINT = `${baseEndpoint}/api/v1/events`;
export const LOCATIONS_ENDPOINT = `${baseEndpoint}/api/v1/locations`;
