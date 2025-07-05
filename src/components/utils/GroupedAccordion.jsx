import BasicCard from "./cards/BasicCard"

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
        <div className="flex flex-col items-center space-y-4">
            {Object.entries(grouped).map(([group, items]) => (
                <details key={group} className="w-3/4">
                    <summary className="text-left cursor-pointer rounded px-4 py-2 border border-white/50 bg-gold-700 font-semibold">
                        {group}
                    </summary>
                    {items.map(item => (
                        <div key={item.id} className="px-4 pt-4 flex flex-col justify-between items-center">
                            <BasicCard>
                                <ItemComponent {...item} />
                            </BasicCard>
                        </div>
                    ))}
                </details>
            ))}
        </div>
    )
}

export default GroupedAccordion;
