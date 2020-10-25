import { FC } from "react"

interface Props {
  color: string
  size: "md" | "lg"
  label: string
}

/**
 * A simple badge with backgroundColor as prop
 * @param color string, color of the badge background
 * @param size md or lg, change size
 * @param label string, label text
 */
export const SimpleBadge: FC<Props> = ({ color, size, label }: Props) => {
  return (
    <span
      className={`inline-flex items-center ${
        size === "md" ? "px-2" : "px-3"
      } py-0.5 rounded-full text-xs font-medium leading-4 bg-${color}-100 text-${color}-800`}
    >
      {label}
    </span>
  )
}

SimpleBadge.defaultProps = {
  color: "gray",
  size: "md",
}
