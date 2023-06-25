import axios from "axios"
import { createContext, useState, useEffect, ReactNode } from "react"
import { useQuery } from "react-query"

export const GlobalContext = createContext(null)

const GlobalStorage = ({ children }: any) => {
  const {
    status,
    data,
    error,
    refetch: refetchData,
  } = useQuery("suggestions", getSuggestions)

  async function getSuggestions() {
    const { data } = await axios.get("/api/posts")

    return data
  }

  return (
    <GlobalContext.Provider value={{ data, refetchData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
