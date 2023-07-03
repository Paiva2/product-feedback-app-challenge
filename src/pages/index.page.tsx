import Head from "next/head"
import SideFilters from "@/components/home/SideFilters"
import { Fragment, useContext, useEffect } from "react"
import { HomeContainer, MiddleSection, SuggestionsWrapper } from "./style"
import SuggestionsBar from "@/components/home/SuggestionsBar"
import { GlobalContext } from "@/context/globalContext"
import { IContext } from "../../types"
import Suggestion from "@/components/home/Suggestion"
import SuggestionNotFound from "@/components/SuggestionNotFound"
import LoadingComponent from "@/components/LoadingComponent"

export default function Home() {
  const { dataSortedByCategory, isLoading, refetchData } = useContext(
    GlobalContext
  ) as IContext

  useEffect(() => {
    refetchData()
  }, [])

  if (isLoading) return <LoadingComponent />

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

          {!dataSortedByCategory?.length && !isLoading && <SuggestionNotFound />}
          <SuggestionsWrapper>
            {dataSortedByCategory?.map((suggestion) => (
              <Suggestion
                refetch={refetchData}
                key={suggestion.id}
                data={suggestion}
              />
            ))}
          </SuggestionsWrapper>
        </MiddleSection>
      </HomeContainer>
    </Fragment>
  )
}
