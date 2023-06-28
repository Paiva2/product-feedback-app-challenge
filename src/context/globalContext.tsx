import axios from "axios"
import { createContext, useState } from "react"
import { useQuery } from "react-query"
import { IContext, IForm } from "../../types"

interface Props {
  children: React.ReactNode
}

export const GlobalContext = createContext<IContext>({} as any)

const GlobalStorage = ({ children }: Props) => {
  const formDefaultValue = {
    feedbackTitle: {
      text: "",
      error: false,
    },
    feedbackDetail: {
      text: "",
      error: false,
    },
    feedbackStatus: {
      text: "",
      error: false,
    },
    feedbackCategory: {
      text: "",
      error: false,
    },
  }

  const {
    data,
    isLoading,
    refetch: refetchData,
  } = useQuery("suggestions", getSuggestions)

  async function getSuggestions() {
    const { data } = await axios.get("/api/posts")

    return data
  }

  return (
    <GlobalContext.Provider
      value={{
        data,
        refetchData,
        isLoading,
        formDefaultValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
