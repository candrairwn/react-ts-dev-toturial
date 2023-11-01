import Avatar from './Avatar'
import { Persons } from './Utils'

export default function Profile(): JSX.Element {
  const AvatarRows: JSX.Element[] = []

  Persons.forEach((person): void | JSX.Element => {
    AvatarRows.push(<Avatar person={person} size={100} key={`${person.name}-${person.imageId}`} />)
  })

  return <div>{AvatarRows}</div>
}
