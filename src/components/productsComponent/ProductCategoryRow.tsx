export default function ProductCategoryRow({ category }: { category: string }): JSX.Element {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
}
