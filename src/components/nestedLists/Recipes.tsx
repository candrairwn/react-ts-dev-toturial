import { Recipe } from './ListItemNested'

export default function Recipes({ id, name, ingredients }: Recipe): JSX.Element {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={id}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}
