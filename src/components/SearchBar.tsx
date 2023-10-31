export default function SearchBar({
    search,
    inStock,
    onSearchChange,
    onInStockChange
}: {
    search: string,
    inStock: boolean,
    onSearchChange: (value: string) => void,
    onInStockChange: (value: boolean) => void
}): JSX.Element {
    
    return (
        <form>
            <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search...." />

            <label htmlFor="">
                <input
                    checked={inStock}
                    onChange={(e) => onInStockChange(e.target.checked)}
                    type="checkbox" />
                {''}
                Only show products in stock
            </label>
        </form>
    )
}