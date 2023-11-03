export default function FancyText({ title, FancyText }: { title?: boolean; FancyText?: string }) {
  return <>{title ? <h3>{FancyText}</h3> : <h1>{FancyText}</h1>}</>
}
