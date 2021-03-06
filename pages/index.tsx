import Head from "next/head"
import { GetStaticProps } from "next"
import { useQuery } from "react-query"
import queryApi from "../hooks/queryAPI"
import { Card } from "../components/Card"
import { Grid } from "../layouts/Grid"
import { Container } from "../components/Container"
import { FC } from "react"

const url = "https://sampleapis.com/codingresources/api/codingResources"

type apiResponse = {
  id: string
  description: string
  url: string
  topics: Array<string>
}

type homeProps = {
  resources: object
}

const Home: FC<homeProps> = ({ resources }: homeProps) => {
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
        <Container>
          <Grid>
            {data.map((resource: apiResponse) => (
              <Card
                key={resource.id}
                description={resource.description}
                url={resource.url}
                topics={resource.topics}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const resources = await queryApi({ url })

  return {
    props: { resources },
  }
}
