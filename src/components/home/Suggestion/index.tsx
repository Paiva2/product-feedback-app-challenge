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
import { DataSchema } from "../../../../types"
import { useRouter } from "next/router"

interface Props {
  data: DataSchema
  refetch: () => void
}

const Suggestion = ({ data, refetch }: Props) => {
  const route = useRouter()

  const handleUpdateUpVote = async (suggestionId: number) => {
    const id = suggestionId

    await axios.post("/api/posts", { id })

    refetch()
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
            <UpVoteButton onClick={() => handleUpdateUpVote(data.id)}>
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
