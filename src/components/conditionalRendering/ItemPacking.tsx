import { ItemsPacking } from './items'

export default function ItemPacking({ item }: { item: ItemsPacking }): JSX.Element {
  const itemContent = item.isPacked ? `${item.name}✔` : `${item.name}❌`
  return <li>{itemContent}</li>
}
