export interface DataSchema {
  id: number
  title: string
  category: string
  description: string
  upVotes: number
  updatedAt: string
  createddAt: string
  status: string
  _count: { comment: number }
  comment: {
    id: string
    name: string
    username: string
    iconImage: string
    description: string
    postId: string
    replies: {
      id: string
      commentId: string
      postsId: string
      description: string
      iconImage: string
      name: string
      username: string
    }[]
  }[]
}

export interface IContext {
  data: DataSchema[] | undefined
  isLoading: boolean
  formDefaultValue: IForm
  dataSortedBy: DataSchema[] | undefined
  setDataSortedBy: Dispatch<SetStateAction<DataSchema[]>>
  selectedFilter: string
  setSelectedFilter: Dispatch<SetStateAction<string>>
  handleSortByFilter: (filter: string) => void
  refetchData: () => void
}

interface SuggestionData {
  data: DataSchema
}

export interface IForm {
  feedbackTitle: {
    text: string
    error: boolean
  }
  feedbackDetail: {
    text: string
    error: boolean
  }
  feedbackStatus: {
    text: string
    error: boolean
  }
  feedbackCategory: {
    text: string
    error: boolean
  }
}

export interface PostSectionData extends DataSchema {
  _count: { comment: number }
  comment: [
    {
      id: string
      iconImage: string
      name: string
      username: string
      description: string
      postsId: number
      createdAt: string
      replies: {
        id: string
        commentId: string
        postsId: string
        description: string
        iconImage: string
        name: string
        username: string
      }[]
    }
  ]
}
