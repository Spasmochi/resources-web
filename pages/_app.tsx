import type { AppProps /*, AppContext */ } from "next/app"
import { ReactQueryDevtools } from "react-query-devtools"

import "../styles/tailwind.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </>
  )
}

export default MyApp
