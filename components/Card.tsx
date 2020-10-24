import Link from "next/link"

interface Props {
  description: string
  url: string
}

export const Card = ({ description, url }: Props) => {
  return (
    <Link className="col-span-1 rounded-lg" href={url}>
      <a>{description}</a>
    </Link>
  )
}
