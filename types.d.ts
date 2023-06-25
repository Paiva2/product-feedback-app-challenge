export interface DataSchema {
  id: number
  title: string
  category: string
  description: string
  upVotes: number
  updatedAt: string
  createddAt: string
}

export interface IContext {
  data: DataSchema[]
  refetchData: () => void
  isLoading: boolean
}

interface SuggestionData {
  data: DataSchema
}
