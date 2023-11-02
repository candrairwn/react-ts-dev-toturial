import { RecipeList } from './ListItemNested'
import Recipes from './Recipes'

export default function NestedListRecipe(): JSX.Element {
  return (
    <div>
      <h1>Recipes</h1>
      {RecipeList.map((recipe) => (
        <div key={recipe.id}>
          <Recipes {...recipe} key={recipe.id} />
        </div>
      ))}
    </div>
  )
}
