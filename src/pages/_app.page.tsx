import LoadingComponent from "@/components/LoadingComponent"
import GlobalStorage from "@/context/globalContext"
import { globalStyles } from "@/styles/stitches.config"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

globalStyles()

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [pageLoading, setPageLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true)
    }

    const handleComplete = () => {
      setPageLoading(false)
    }

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)
  }, [router])

  if (pageLoading) return <LoadingComponent />

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStorage>
        <Component {...pageProps} />
      </GlobalStorage>
    </QueryClientProvider>
  )
}
