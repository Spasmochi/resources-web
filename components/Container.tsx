import { ReactChild, ReactChildren } from "react"

interface props {
  children: ReactChildren | ReactChild
}

export const Container = ({ children }: props) => {
  return (
    <div className="max-w-6xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
