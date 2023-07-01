import Head from "next/head"
import SideFilters from "@/components/home/SideFilters"
import { Fragment, useContext } from "react"
import { HomeContainer, MiddleSection } from "./style"
import SuggestionsBar from "@/components/home/SuggestionsBar"
import { GlobalContext } from "@/context/globalContext"
import { IContext } from "../../types"
import Suggestion from "@/components/home/Suggestion"
import SuggestionNotFound from "@/components/SuggestionNotFound"

export default function Home() {
  const { dataSortedBy, isLoading } = useContext(GlobalContext) as IContext

  return (
    <Fragment>
      <Head>
        <title>Home - Product Page</title>
        <meta name="description" content="Product Page App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeContainer>
        <SideFilters />
        <MiddleSection>
          <SuggestionsBar />

          {!dataSortedBy?.length && !isLoading && <SuggestionNotFound />}

          {isLoading && <h1>Loading...</h1>}

          {dataSortedBy?.map((suggestion) => (
            <Suggestion key={suggestion.id} data={suggestion} />
          ))}
        </MiddleSection>
      </HomeContainer>
    </Fragment>
  )
}
