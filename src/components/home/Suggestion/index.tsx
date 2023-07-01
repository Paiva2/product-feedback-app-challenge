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
import { useRouter } from "next/router"

const Suggestion = ({ data }: SuggestionData) => {
  const { refetchData } = useContext(GlobalContext) as IContext

  const route = useRouter()

  const handleUpdateUpVote = async (suggestionId: number) => {
    const id = suggestionId

    await axios.post("/api/posts", { id })

    refetchData()
  }

  const handleGoToFeedback = (id: number) => {
    if (!route.pathname.includes("suggestion-detail")) {
      route.push(`/suggestion-detail/${id}`)
    }
  }

  return (
    <CardContainer>
      <CardWrapper>
        <FeedbackResumeContainer>
          <span>
            <UpVoteButton
              style={data.upVoted ? { backgroundColor: "#4661e6" } : {}}
              onClick={() => handleUpdateUpVote(data.id)}
            >
              <CaretUp color="#4661e6" size={15} weight="bold" />
              {data.upVotes}
            </UpVoteButton>
          </span>

          <FeedbackResume onClick={() => handleGoToFeedback(data.id)}>
            <Text model="resumeTitle">{data.title}</Text>
            <Text model="resumeDescription">{data.description}</Text>

            <div>
              <CategoryPin>{data.category}</CategoryPin>
            </div>
          </FeedbackResume>
        </FeedbackResumeContainer>

        <CommentsQuantity>
          <CommentsIcon /> {data?.comment?.length}
        </CommentsQuantity>
      </CardWrapper>
    </CardContainer>
  )
}

export default Suggestion
