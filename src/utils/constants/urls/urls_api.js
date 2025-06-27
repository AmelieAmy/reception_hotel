const API_BASE = 'http://178.255.128.61:10013/CONDORMAN';

// RESERVATIONS

// CHAMBRES
export const GET_ROOMS = API_BASE + '/rooms';
export const GET_ROOM_BY_ID = (id) => API_BASE + `/rooms/${id}`;
export const GET_ROOM_TYPES = API_BASE + '/room-types';

// SERVICES
export const GET_SERVICES = API_BASE + '/services';
export const GET_SERVICE_TYPES = API_BASE + '/service-types';
export const GET_SERVICES_BY_ID = (id) => API_BASE + `/services/${id}`;