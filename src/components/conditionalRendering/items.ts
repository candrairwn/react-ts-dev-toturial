export interface ItemsPacking {
  name: string
  isPacked: boolean
}

export const ListItemsPacking: ItemsPacking[] = [
  {
    name: 'Shirt',
    isPacked: true,
  },
  {
    name: 'Shoes',
    isPacked: false,
  },
  {
    name: 'Jacket',
    isPacked: false,
  },
  {
    name: 'Underwear',
    isPacked: false,
  },
]
