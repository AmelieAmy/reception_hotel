// HOME
export const HOME = '/';

// RESERVATIONS
export const RESERVATIONS = '/reservations';
export const RESERVATION_CREATION = '/reservation-creation';
export const RESERVATION_MODIFICATION = (id) => `/reservations/${id}/edit`;

// CHAMBRES
export const ROOMS = '/rooms';
export const ROOM_CREATION = '/room-creation';
export const ROOM_MODIFICATION = (id) => `/rooms/${id}/edit`;
export const ROOM_TYPE_CREATION = '/room-type-creation';

// SERVICES
export const SERVICES = '/services';
export const SERVICE_CREATION = '/service-creation';
export const SERVICE_MODIFICATION = (id) => `/services/${id}/edit`;