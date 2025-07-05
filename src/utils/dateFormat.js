export function formatDateToEuropean(isoString) {
    const date = new Date(isoString);
    // Result format : "22/06/2025"
    return date.toLocaleDateString('fr-FR');
}

export function calculateNightsAmount(arrival, departure) {
    // difference in millisecondes
    const diffTime = new Date(departure) - new Date(arrival);
    // conversion in days
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function getTodaySDate() {
    return new Date().toISOString().split('T')[0];
}
