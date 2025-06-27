const GroupedAccordion = async ({
    fetchData,
    groupBy = item => item.type,
    exclude = () => false,
    ItemComponent
}) => {
    const data = await fetchData()
    const filtered = data.filter(item => !exclude(item))

    const grouped = filtered.reduce((acc, item) => {
        const groupKey = groupBy(item)
        acc[groupKey] ||= []
        acc[groupKey].push(item)
        return acc
    }, {})

    return (
        <div className="space-y-4">
            {Object.entries(grouped).map(([group, items]) => (
                <details key={group} className="border rounded shadow">
                    <summary className="cursor-pointer px-4 py-2 text-black bg-gray-100 font-semibold">
                        {group}
                    </summary>
                    <div className="p-4 space-y-2 bg-white">
                        {items.map(item => (
                            <ItemComponent key={item.id} {...item} />
                        ))}
                    </div>
                </details>
            ))}
        </div>
    )
}

export default GroupedAccordion;
