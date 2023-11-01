export default function ProductRow({ product }: { product: { stocked: boolean; name: string; price: string } }): JSX.Element {
  const name: JSX.Element = product.stocked ? <span>{product.name}</span> : <span style={{ color: 'red' }}>{product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
