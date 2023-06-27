export interface DataSchema {
  id: number
  title: string
  category: string
  description: string
  upVotes: number
  updatedAt: string
  createddAt: string
  status: string
}

export interface IContext {
  data: DataSchema[]
  refetchData: () => void
  isLoading: boolean
  formDefaultValue: IForm
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
    }
  ]
}
