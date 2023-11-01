import { useState } from 'react'
import Clock from './Clock'

export default function PropsChangeOverTime(): JSX.Element {
  const [color, setColor] = useState<string>('red')

  return (
    <div>
      <label htmlFor="selectColor">Select Color... : </label>
      <select
        id="selectColor"
        onChange={(event): void => {
          setColor(event.target.value)
        }}
        value={color}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <Clock color={color} time={new Date()} />
    </div>
  )
}
