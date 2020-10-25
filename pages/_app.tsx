import type { AppProps /*, AppContext */ } from "next/app"
import { ReactQueryDevtools } from "react-query-devtools"

import "../styles/tailwind.css"
import "../styles/globals.css"
import { FC } from "react"

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </>
  )
}

export default MyApp
