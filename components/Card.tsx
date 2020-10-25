import Link from "next/link"
import { FC } from "react"
import { SimpleBadge } from "./SimpleBadge"

interface Props {
  description: string
  url: string
  topics?: Array<string>
}

export const Card: FC<Props> = ({ description, url, topics }: Props) => {
  return (
    <div className="flex flex-col">
      <Link href={url}>
        <a className="col-span-1 rounded-lg">{description}</a>
      </Link>
      <div>
        {topics
          ? topics.map(topic => (
              <SimpleBadge
                key={topic}
                label={topic}
                size={"lg"}
                color={"indigo"}
              />
            ))
          : ""}
      </div>
    </div>
  )
}
