export function getImageUrl(person: { imageId: string }, size: string | number = 's') {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`
}

interface Person {
  name: string
  imageId: string
  size?: string | number
}

export const Persons: Person[] = [
  {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    size: 100,
  },
  {
    name: 'Aklilu Lemma',
    imageId: 'OKS67lh',
    size: 80,
  },
  {
    name: 'Lin Lanying',
    imageId: '1bX5QH6',
    size: 50,
  },
]
