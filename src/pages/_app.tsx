import GlobalStorage from "@/context/globalContext"
import { globalStyles } from "@/styles/stitches.config"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"

globalStyles()

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStorage>
        <Component {...pageProps} />
      </GlobalStorage>
    </QueryClientProvider>
  )
}
