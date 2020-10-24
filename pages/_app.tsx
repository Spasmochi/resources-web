import type { AppProps /*, AppContext */ } from "next/app"
import "../styles/tailwind.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
