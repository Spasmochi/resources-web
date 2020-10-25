import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const Container: FC<Props> = ({ children }: Props) => (
  <div className="max-w-6xl px-4 py-4 mx-auto sm:px-6 lg:px-8">{children}</div>
)
