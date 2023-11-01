import { getImageUrl } from './Utils'

export default function Avatar({
  person,
  size,
  imageSize = 's',
}: {
  person: { imageId: string; name: string }
  size: number
  imageSize?: 's' | 'm'
}): JSX.Element {
  return <img className="Avatar" src={getImageUrl(person, imageSize)} alt="avatar" width={size} height={size} />
}
