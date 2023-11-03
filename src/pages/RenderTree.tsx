import Copyright from 'components/renderTree/Copyright'
import FancyText from 'components/renderTree/FancyText'
import InspirationGenerator from 'components/renderTree/InspirationGenerator'

export default function RenderTree(): JSX.Element {
  return (
    <>
      <FancyText title FancyText="My Inspiration App" />
      <InspirationGenerator>
        <Copyright year={2023} />
      </InspirationGenerator>
    </>
  )
}
