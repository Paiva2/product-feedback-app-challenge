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

const Suggestions = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <FeedbackResumeContainer>
          <span>
            <UpVoteButton>
              <CaretUp color="#4661e6" size={15} weight="bold" />
              112
            </UpVoteButton>
          </span>

          <FeedbackResume>
            <Text model="resumeTitle">Add tags for solutions</Text>
            <Text model="resumeDescription">
              Easier to search for solutions based on a specific stack.
            </Text>

            <div>
              <CategoryPin>Enhancement</CategoryPin>
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
