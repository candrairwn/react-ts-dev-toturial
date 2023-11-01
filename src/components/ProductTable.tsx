import { Product } from 'data/products/productsInterface'
import ProductCategoryRow from './productsComponent/ProductCategoryRow'
import ProductRow from './productsComponent/ProductRow'

export default function ProductTable({
  products,
  search,
  inStock,
}: {
  products: Array<Product>
  search: string
  inStock: boolean
}): JSX.Element {
  const rows: JSX.Element[] = []

  let lastCategory: null | string = null

  products.forEach((product): void | JSX.Element => {
    if (product.name.toLowerCase().indexOf(search.toLowerCase()) === -1) {
      return
    }

    if (inStock && !product.stocked) {
      return
    }

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }

    rows.push(<ProductRow product={product} key={product.id} />)

    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
