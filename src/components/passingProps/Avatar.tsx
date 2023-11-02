import { getImageUrl } from './Utils'

export default function Avatar({
  person,
  size,
  imageSize = 's',
}: {
  person: { imageId: string; name: string; profession: string }
  size: number
  imageSize?: 's' | 'm'
}): JSX.Element {
  return (
    <div>
      <h1>{person.name}</h1>
      <img className="Avatar" src={getImageUrl(person, imageSize)} alt="avatar" width={size} height={size} />
      <ol
        style={{
          listStyle: 'none',
          padding: '0',
        }}
      >
        <li>
          <b>Profession:</b> {person.profession}{' '}
        </li>
      </ol>
    </div>
  )
}
