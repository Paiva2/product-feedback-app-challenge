import CommentsIcon from "@/components/icons/CommentsIcon"
import { CaretUp } from "phosphor-react"
import {
  CardContainer,
  CardWrapper,
  CategoryPin,
  CommentsQuantity,
  FeedbackResume,
  FeedbackResumeContainer,
  Text,
  UpVoteButton,
} from "./styles"
import axios from "axios"

interface SuggestionData {
  data: {
    id: number
    title: string
    description: string
    upVotes: number
    category: string
  }
}

const Suggestions = ({ data }: SuggestionData) => {
  const handleUpdateUpVote = async (suggestionId: number) => {
    const id = suggestionId

    await axios.post("/api/posts", { id })
  }

  return (
    <CardContainer>
      <CardWrapper>
        <FeedbackResumeContainer>
          <span>
            <UpVoteButton onClick={() => handleUpdateUpVote(data.id)}>
              <CaretUp color="#4661e6" size={15} weight="bold" />
              {data.upVotes}
            </UpVoteButton>
          </span>

          <FeedbackResume>
            <Text model="resumeTitle">{data.title}</Text>
            <Text model="resumeDescription">{data.description}</Text>

            <div>
              <CategoryPin>{data.category}</CategoryPin>
            </div>
          </FeedbackResume>
        </FeedbackResumeContainer>

        <CommentsQuantity>
          <CommentsIcon /> 2
        </CommentsQuantity>
      </CardWrapper>
    </CardContainer>
  )
}

export default Suggestions
