import Avatar from './Avatar'
import Card from './Card'
import { Person } from './Utils'

export default function Profile({ Persons }: { Persons: Person[] }): JSX.Element {
  const AvatarRows: JSX.Element[] = []

  Persons.forEach((person): void | JSX.Element => {
    AvatarRows.push(
      <Card key={`${person.name}-${person.imageId}`}>
        <Avatar person={person} size={100} key={`${person.name}-${person.imageId}`} />
      </Card>
    )
  })

  return <div>{AvatarRows}</div>
}
