
interface PhotoInterface {
  src?: string
  className?: string
  imgClassName?: string
}

export default function Photo({ src, className, imgClassName }: PhotoInterface) {
  return (
    <div className={className}>
      <img
        src={src}
        className={imgClassName}
      />
    </div>
  )
}
