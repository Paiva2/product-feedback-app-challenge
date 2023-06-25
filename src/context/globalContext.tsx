import axios from "axios"
import { createContext, useState, useEffect, ReactNode } from "react"
import { useQuery } from "react-query"

export const GlobalContext = createContext(null)

const GlobalStorage = ({ children }: any) => {
  const [suggestionsData, setSuggestionsData] = useState([])

  const { data, error, isError, isLoading } = useQuery("suggestions", getSuggestions)

  async function getSuggestions() {
    const postsResponse = await axios.get("/api/posts")

    setSuggestionsData(postsResponse.data)
  }

  return (
    <GlobalContext.Provider value={{ suggestionsData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
