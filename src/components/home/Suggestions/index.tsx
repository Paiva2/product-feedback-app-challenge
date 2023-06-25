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
import { useContext } from "react"
import { GlobalContext } from "@/context/globalContext"
import { IContext, SuggestionData } from "../../../../types"

const Suggestions = ({ data }: SuggestionData) => {
  const { refetchData } = useContext(GlobalContext) as IContext

  const handleUpdateUpVote = async (suggestionId: number) => {
    const id = suggestionId

    await axios.post("/api/posts", { id })

    refetchData()
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
