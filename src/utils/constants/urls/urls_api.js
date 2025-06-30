const API_BASE = process.env.AS400_API_URL

// RESERVATIONS
export const GET_PAST_RESERVATIONS = API_BASE + '/past-reservations';
export const GET_RECENT_RESERVATIONS = API_BASE + '/recent-reservations';
export const GET_RESERVATION_BY_ID = (id) => API_BASE + `/reservations/${id}`;

// CHAMBRES
export const GET_ROOMS = API_BASE + '/rooms';
export const GET_ROOM_BY_ID = (id) => API_BASE + `/rooms/${id}`;
export const GET_ROOM_TYPES = API_BASE + '/room-types';

// SERVICES
export const GET_SERVICES = API_BASE + '/services';
export const GET_SERVICE_TYPES = API_BASE + '/service-types';
export const GET_SERVICES_BY_ID = (id) => API_BASE + `/services/${id}`;