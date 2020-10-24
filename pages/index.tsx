import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-blue-200 w-screen h-screen h-"}>
        <div className={"text-indigo-800"}>Hello</div>
      </main>
    </>
  )
}
