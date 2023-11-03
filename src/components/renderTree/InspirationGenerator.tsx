import { useState } from 'react'
import FancyText from './FancyText'
import { quotes } from './quotes'

export default function InspirationGenerator({ children }: { children: JSX.Element }): JSX.Element {
  const [indexQuote, setIndexQuote] = useState<number>(0)
  const quotesVar: string = quotes[indexQuote] || 'No quotes'
  const next = () => setIndexQuote((indexQuote + 1) % quotes.length)

  return (
    <>
      <p>Inspirational quotes: </p>
      <FancyText FancyText={quotesVar} />
      <button onClick={next}>Inspire u</button>
      {children}
    </>
  )
}
