const API_BASE = process.env.NEXT_PUBLIC_AS400_API_URL

// RESERVATIONS
export const GET_PAST_RESERVATIONS = API_BASE + '/past-reservations';
export const GET_RECENT_RESERVATIONS = API_BASE + '/recent-reservations';
export const GET_RESERVATION_BY_ID = (id) => API_BASE + `/reservations/${id}`;
export const GET_CLIENT_BY_EMAIL = (email) => API_BASE + `/reservations/client/${encodeURIComponent(email)}`;
export const UPDATE_RESERVATION_BY_ID = (id) => API_BASE + `/reservations/${id}`;
export const CREATE_RESERVATION = API_BASE + '/reservations';
export const DELETE_RESERVATION_BY_ID = (id) => API_BASE + `/reservations/${id}`;

// CHAMBRES
export const GET_ROOMS = API_BASE + '/rooms';
export const GET_ROOM_BY_ID = (id) => API_BASE + `/rooms/${id}`;
export const GET_ROOM_TYPES = API_BASE + '/room-types';
export const GET_AVAILABLE_ROOMS_BY_DATES = (arrival, departure, sleepersAmount) => 
    API_BASE + `/rooms/available-rooms/${arrival}/${departure}/${sleepersAmount}`;
export const UPDATE_ROOM_BY_ID = (id) => API_BASE + `/rooms/${id}`;
export const CREATE_ROOM = API_BASE + '/rooms';
export const DELETE_ROOM_BY_ID = (id) => API_BASE + `/rooms/${id}`;

// SERVICES
export const GET_SERVICES = API_BASE + '/services';
export const GET_SERVICE_TYPES = API_BASE + '/service-types';
export const GET_SERVICE_BY_ID = (id) => API_BASE + `/services/${id}`;
export const UPDATE_SERVICE_BY_ID = (id) => API_BASE + `/services/${id}`;
export const CREATE_SERVICE = API_BASE + '/services';
export const DELETE_SERVICE_BY_ID = (id) => API_BASE + `/services/${id}`;