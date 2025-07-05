export function calculateResaPriceWithoutServices(roomPrice, nightsAmount) {
    return roomPrice * nightsAmount;
}

export function calculateAcompte(roomPrice, nightsAmount) {
    return (roomPrice * nightsAmount) * 0.3;
}