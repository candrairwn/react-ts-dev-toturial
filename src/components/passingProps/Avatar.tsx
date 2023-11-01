import { getImageUrl } from './Utils'

export default function Avatar({ person, size }: { person: { imageId: string; name: string }; size: string | number }): JSX.Element {
  return <img className="Avatar" src={getImageUrl(person)} alt="avatar" width={size} height={size} />
}
