export default function Card({ children }: { children: JSX.Element }): JSX.Element {
  const style = {
    padding: '1rem',
    margin: '1rem',
    border: '1px solid gray',
    borderRadius: '0.5rem',
    display: 'inline-block',
  }

  return (
    <div className="card" style={style}>
      {children}
    </div>
  )
}
