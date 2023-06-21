import LightIcon from "@/components/icons/LightIcon"
import { CaretDown } from "phosphor-react"
import {
  CounterContainer,
  NewFeedbackButton,
  SortBy,
  Suggestions,
  SuggestionsController,
  Wrapper,
} from "./styles"

const SuggestionsCounter = () => {
  return (
    <CounterContainer>
      <Wrapper>
        <SuggestionsController>
          <Suggestions>
            <LightIcon />

            <p>6 Suggestions</p>
          </Suggestions>

          <SortBy>
            Sort by:
            <button>
              Most Upvotes <CaretDown size={15} weight="bold" />
            </button>
          </SortBy>
        </SuggestionsController>

        <div>
          <NewFeedbackButton>+ Add Feedback</NewFeedbackButton>
        </div>
      </Wrapper>
    </CounterContainer>
  )
}

export default SuggestionsCounter
