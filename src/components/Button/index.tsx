
interface ButtonInterface {
  children: string,
  onClick?: () => void,
  className?: string,
}

export default function Button({ children, onClick, className }: ButtonInterface) {
  return <div className={className}>
    <button className="" onClick={onClick}>{children}</button>
  </div>
}
