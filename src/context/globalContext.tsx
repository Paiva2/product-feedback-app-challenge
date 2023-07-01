import axios from "axios"
import { createContext, useState } from "react"
import { useQuery } from "react-query"
import { DataSchema, IContext } from "../../types"

interface Props {
  children: React.ReactNode
}

export const GlobalContext = createContext<IContext>({} as any)

const GlobalStorage = ({ children }: Props) => {
  const [dataCategoryFiltered, setDataCategoryFiltered] = useState()

  const [selectedFilter, setSelectedFilter] = useState("Most Upvotes")

  const {
    data,
    isLoading,
    refetch: refetchData,
  } = useQuery<DataSchema[]>("suggestions", getSuggestions, {
    refetchOnWindowFocus: false,
  })

  const [dataSortedBy, setDataSortedBy] = useState<DataSchema[] | undefined>()

  async function getSuggestions() {
    const { data } = await axios.get<DataSchema[]>("/api/posts")

    setDataSortedBy(data?.sort((a, b) => b.upVotes - a.upVotes))

    return data
  }

  const handleSortByFilter = (filter: string) => {
    switch (filter) {
      case "Most Upvotes":
        setDataSortedBy(data?.sort((a, b) => b.upVotes - a.upVotes))
        break
      case "Least Upvotes":
        setDataSortedBy(data?.sort((a, b) => a.upVotes - b.upVotes))
        break
      case "Most Comments":
        setDataSortedBy(data?.sort((a, b) => b.comment.length - a.comment.length))
        break
      case "Least Comments":
        setDataSortedBy(data?.sort((a, b) => a.comment.length - b.comment.length))
        break
      default:
        null
    }
  }

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

  return (
    <GlobalContext.Provider
      value={{
        data,
        isLoading,
        formDefaultValue,
        dataSortedBy,
        selectedFilter,
        handleSortByFilter,
        setSelectedFilter,
        refetchData,
        setDataSortedBy,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
