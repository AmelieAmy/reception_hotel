export function formatDateToEuropean(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('fr-FR'); // Résultat : "22/06/2025"
}