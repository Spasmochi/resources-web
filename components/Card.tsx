import Link from "next/link"
import { FC } from "react"

interface Props {
  description: string
  url: string
}

export const Card: FC<Props> = ({ description, url }: Props) => {
  return (
    <Link href={url}>
      <a className="col-span-1 rounded-lg">{description}</a>
    </Link>
  )
}
