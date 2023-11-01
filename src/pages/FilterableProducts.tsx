import ProductTable from '@/components/ProductTable'
import SearchBar from '@/components/SearchBar'
import { Product } from '@/data/products/productsInterface'
import { useState } from 'react'

export default function FilterableProducts({ products }: { products: Array<Product> }): JSX.Element {
  const [search, setSearch] = useState<string>('')
  const [inStock, setInStock] = useState<boolean>(false)

  return (
    <div>
      <SearchBar search={search} inStock={inStock} onSearchChange={setSearch} onInStockChange={setInStock} />
      <ProductTable products={products} search={search} inStock={inStock} />
    </div>
  )
}
