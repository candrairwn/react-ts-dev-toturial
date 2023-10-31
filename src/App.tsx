import FilterableProducts from "@pages/FilterableProducts"
import { PRODUCTS } from "./data/products/products"

function App() {
  return (
    <FilterableProducts products={PRODUCTS} />
  )
}

export default App
