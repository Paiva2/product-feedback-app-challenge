import Head from "next/head"
import SideFilters from "@/components/home/SideFilters"
import { Fragment, useContext, useEffect } from "react"
import { HomeContainer } from "./style"
import SuggestionsBar from "@/components/home/SuggestionsBar"
import { GlobalContext } from "@/context/globalContext"
import { IContext } from "../../types"
import Suggestion from "@/components/home/Suggestion"

export default function Home() {
  const { data } = useContext(GlobalContext) as IContext

  console.log(data)
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

          {data?.map((suggestion) => (
            <Suggestion key={suggestion.id} data={suggestion} />
          ))}
        </div>
      </HomeContainer>
    </Fragment>
  )
}
