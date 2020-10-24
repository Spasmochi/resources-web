import Head from "next/head"
import { GetStaticProps } from "next"
import { useQuery } from "react-query"
import queryApi from "../hooks/queryAPI"
import { Card } from "../components/Card"
import { Grid } from "../layouts/Grid"

const url = "https://sampleapis.com/codingresources/api/codingResources"

type homeProps = {
  resources: object
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
        <Grid>
          {data.map((resource: object) => (
            <Card
              key={resource.id}
              description={resource.description}
              url={resource.url}
            />
          ))}
        </Grid>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const resources = await queryApi({ url })

  return {
    props: { resources },
  }
}
