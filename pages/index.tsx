import Head from "next/head"
import { GetStaticProps } from "next"
import { useQuery } from "react-query"
import queryApi from "../hooks/queryAPI"

const url = "https://sampleapis.com/codingresources/api/codingResources"

type homeProps = {
  resources: Object
}

export default function Home({ resources }: homeProps) {
  const { data } = useQuery("resources", () => queryApi({ url }), {
    initialData: resources,
  })

  return (
    <>
      <Head>
        <title>Web Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-blue-200 w-screen h-full"}>
        <div className={"text-indigo-800"}>
          {data.map((resource: Object) => (
            <div key={resource.id}>{resource.description}</div>
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const resources = await queryApi({ url })
  console.log(resources)
  return {
    props: { resources },
  }
}
