import Head from "next/head"
import Suggestions from "@/components/home/Suggestions"
import SideFilters from "@/components/home/SideFilters"
import { Fragment, useEffect, useState } from "react"
import { HomeContainer } from "./style"
import SuggestionsBar from "@/components/home/SuggestionsBar"
import axios from "axios"

export default function Home() {
  const [suggestionsData, setSuggestionsData] = useState([])

  useEffect(() => {
    ;(async () => {
      const postsResponse = await axios.get("/api/posts")

      setSuggestionsData(postsResponse.data)
    })()
  }, [])

  console.log(suggestionsData?.map((suggestion) => console.log(suggestion)))

  return (
    <Fragment>
      <Head>
        <title>Home - Product Page</title>
        <meta name="description" content="Product Page App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeContainer>
        <SideFilters />
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: ".9375rem",
            maxWidth: "1200px",
            alignSelf: "flex-start",
          }}
        >
          <SuggestionsBar />

          {suggestionsData?.map((suggestion) => (
            <Suggestions key={suggestion.id} data={suggestion} />
          ))}
        </div>
      </HomeContainer>
    </Fragment>
  )
}
