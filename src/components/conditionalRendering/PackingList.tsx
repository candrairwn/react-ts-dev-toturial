import ItemPacking from './ItemPacking'
import { ListItemsPacking } from './items'

export default function PackingList(): JSX.Element {
  const packingList: JSX.Element[] = []

  ListItemsPacking.forEach((item): void | JSX.Element => {
    packingList.push(<ItemPacking item={item} />)
  })

  return <>{packingList}</>
}
