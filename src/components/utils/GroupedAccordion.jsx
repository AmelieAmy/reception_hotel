import BasicCard from "./cards/BasicCard"

const GroupedAccordion = ({
    datas,
    searchByName,
    searchByNumber,
    searchFromPrice,
    searchToPrice,
    groupBy = item => item.type,
    exclude = () => false,
    ItemComponent
}) => {
    const notExcludedDatas = datas.filter(item => !exclude(item))
    const filteredDatas = notExcludedDatas.filter(data =>
        data.name.toLowerCase().includes(searchByName?.toLowerCase()) &&
        data.number == searchByNumber &&
        data.price >= searchFromPrice  &&
        (searchToPrice !== '' ? data.price <= searchToPrice : data.price <= 999999.99)
    );
    const finalFilteredDatas = filteredDatas.length > 0 ? filteredDatas : notExcludedDatas;
    const grouped = finalFilteredDatas.reduce((acc, item) => {
            const groupKey = groupBy(item)
            acc[groupKey] ||= []
            acc[groupKey].push(item)
            return acc
        }, {})

    return (
        <div className="flex flex-col items-center space-y-4">
            {Object.entries(grouped).map(([group, items], index) => (
                <details key={group} className="w-3/4" {...(index === 0 && { open: true })}>
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
