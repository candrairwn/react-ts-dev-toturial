export function getImageUrl(person: { imageId: string }, imageSize: 's' | 'm' = 's') {
  return `https://i.imgur.com/${person.imageId}${imageSize}.jpg`
}

export interface Person {
  name: string
  imageId: string
  profession: string
  size?: string | number
}

export const Persons: Person[] = [
  {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    profession: 'Geochemist',
    size: 100,
  },
  {
    name: 'Aklilu Lemma',
    imageId: 'OKS67lh',
    profession: 'Medical researcher',
    size: 80,
  },
  {
    name: 'Lin Lanying',
    imageId: '1bX5QH6',
    profession: 'Virologist',
    size: 50,
  },
]
