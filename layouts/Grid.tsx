import { FC, ReactNode } from "react"

interface props {
  children: ReactNode
}


export const Grid: FC<props> = ({ children }: props) => {
  return (
    <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 ">
      {children}
    </div>
  )
}
