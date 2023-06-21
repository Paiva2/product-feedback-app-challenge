import Head from "next/head"
import { Jost } from "next/font/google"
import { globalStyles } from "@/styles/stitches.config"
import SuggestionsCounter from "@/components/home/SuggestionsCounter"
import Suggestions from "@/components/home/Suggestions"
import SideFilters from "@/components/home/SideFilters"
import { Fragment } from "react"
import { HomeContainer } from "./style"

const jost = Jost({
  weight: ["400", "700"],
  subsets: ["latin"],
})

globalStyles()

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home - Product Page</title>
        <meta name="description" content="Product Page App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeContainer className={jost.className}>
        <SideFilters />
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <SuggestionsCounter />
          <Suggestions />

          <Suggestions />

          <Suggestions />
        </div>
      </HomeContainer>
    </Fragment>
  )
}
