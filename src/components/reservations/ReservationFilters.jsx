const ReservationFilters = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredReservations = reservations.filter(resa =>
        resa.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <input
            type="text"
            placeholder="Rechercher par nom"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 py-2 rounded"
        />
    )
}

export default ReservationFilters