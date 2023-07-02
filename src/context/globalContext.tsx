import axios from "axios"
import { createContext, useState } from "react"
import { useQuery } from "react-query"
import { DataSchema, IContext } from "../../types"

interface Props {
  children: React.ReactNode
}

export const GlobalContext = createContext<IContext>({} as any)

const GlobalStorage = ({ children }: Props) => {
  const [dataCategoryFiltered, setDataCategoryFiltered] = useState("All")
  const [selectedFilter, setSelectedFilter] = useState("Most Upvotes")

  const isLoading = true

  const {
    data: suggestionsData,
    /* isLoading, */
    refetch: refetchData,
  } = useQuery<DataSchema[]>("suggestions", getSuggestions, {
    refetchOnWindowFocus: false,
  })

  const [dataSortedByCategory, setDataSortedByCategory] = useState<
    DataSchema[] | undefined
  >(suggestionsData && suggestionsData)

  async function getSuggestions() {
    const { data } = await axios.get<DataSchema[]>("/api/posts")

    setDataSortedByCategory(data.sort((a, b) => b.upVotes - a.upVotes))

    return data.sort((a, b) => b.upVotes - a.upVotes)
  }

  const handleSortByFilter = (filter: string) => {
    switch (filter) {
      case "Most Upvotes":
        setDataSortedByCategory(
          dataSortedByCategory?.sort((a, b) => b.upVotes - a.upVotes)
        )
        break
      case "Least Upvotes":
        setDataSortedByCategory(
          dataSortedByCategory?.sort((a, b) => a.upVotes - b.upVotes)
        )
        break
      case "Most Comments":
        setDataSortedByCategory(
          dataSortedByCategory?.sort((a, b) => b.comment.length - a.comment.length)
        )
        break
      case "Least Comments":
        setDataSortedByCategory(
          dataSortedByCategory?.sort((a, b) => a.comment.length - b.comment.length)
        )
        break
      default:
        null
    }
  }

  const filterGenerator = (
    filter: string,
    state: DataSchema[] | undefined,
    stateKey?: string
  ) => {
    const formattedFilter = state?.filter(
      (itemToFilter) =>
        itemToFilter[stateKey as keyof typeof itemToFilter] === filter
    )

    return formattedFilter
  }

  const handleSortCategoryFilter = (category: string) => {
    switch (category) {
      case "All":
        setDataSortedByCategory(suggestionsData)
        break
      case "UI":
        setDataSortedByCategory(filterGenerator("UI", suggestionsData, "category"))
        break
      case "Enhancement":
        setDataSortedByCategory(
          filterGenerator("Enhancement", suggestionsData, "category")
        )
        break
      case "Feature":
        setDataSortedByCategory(
          filterGenerator("Feature", suggestionsData, "category")
        )
        break
      case "Bug":
        setDataSortedByCategory(filterGenerator("Bug", suggestionsData, "category"))
        break
      default:
        setDataSortedByCategory(suggestionsData)
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
        suggestionsData,
        isLoading,
        formDefaultValue,
        dataSortedByCategory,
        selectedFilter,
        dataCategoryFiltered,
        handleSortCategoryFilter,
        filterGenerator,
        setDataCategoryFiltered,
        handleSortByFilter,
        setSelectedFilter,
        refetchData,
        setDataSortedByCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStorage
