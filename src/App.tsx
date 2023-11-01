import { PRODUCTS } from './data/products/products'
import FilterableProducts from '@pages/FilterableProducts'

function App() {
  const { numberAlias }: { numberAlias?: string } = {}

  const a = numberAlias
  console.info(a)

  return <FilterableProducts products={PRODUCTS} />
}

export default App
