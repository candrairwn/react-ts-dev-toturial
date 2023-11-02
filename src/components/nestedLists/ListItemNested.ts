type Ingredients = Array<string>

export interface Recipe {
  id: number
  name: string
  ingredients: Ingredients
}

export const RecipeList: Recipe[] = [
  {
    id: 1,
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta', 'sdfdsds'],
  },
  {
    id: 2,
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'],
  },
  {
    id: 3,
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
  },
]
