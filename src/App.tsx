import { PRODUCTS } from './data/products/products'
import FilterableProducts from '@pages/FilterableProducts'

function App() {
  return <FilterableProducts products={PRODUCTS} />
}

export default App
