import axios from "axios"
import { createContext, useState } from "react"
import { useQuery } from "react-query"
import { IContext } from "../../types"

interface Props {
  children: React.ReactNode
}

export const GlobalContext = createContext<IContext | null>(null)

const GlobalStorage = ({ children }: Props) => {
  const {
    data,
    status,
    error,
    isLoading,
    refetch: refetchData,
  } = useQuery("suggestions", getSuggestions)

  async function getSuggestions() {
    const { data } = await axios.get("/api/posts")

    return data
  }

  return (
    <GlobalContext.Provider value={{ data, refetchData, isLoading }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
