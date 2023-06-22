import { useState } from "react"
import LightIcon from "@/components/icons/LightIcon"
import { CaretDown } from "phosphor-react"
import {
  CounterContainer,
  NewFeedBackButtonWrapper,
  SortBy,
  SortByButton,
  SortByFilterModal,
  Suggestions,
  SuggestionsController,
  Wrapper,
} from "./styles"

const SuggestionsBar = () => {
  const [openSortBy, setOpenSortBy] = useState(false)

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
            <SortByButton
              className={openSortBy ? "openSort" : ""}
              onClick={() => setOpenSortBy(!openSortBy)}
            >
              Most Upvotes <CaretDown size={15} weight="bold" />
            </SortByButton>
            <SortByFilterModal
              css={{
                "--control-modal-opacity": openSortBy ? "1" : "0",
                "--control-modal-visibility": openSortBy ? "visible" : "hidden",
              }}
            >
              <ul>
                <li>
                  Most Upvotes{" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11">
                      <path
                        fill="none"
                        stroke="#AD1FEA"
                        stroke-width="2"
                        d="M1 5.233L4.522 9 12 1"
                      />
                    </svg>
                  </span>
                </li>
                <li>Least Upvotes</li>
                <li>Most Comments</li>
                <li>Least Comments</li>
              </ul>
            </SortByFilterModal>
          </SortBy>
        </SuggestionsController>

        <NewFeedBackButtonWrapper>
          <button>+ Add Feedback</button>
        </NewFeedBackButtonWrapper>
      </Wrapper>
    </CounterContainer>
  )
}

export default SuggestionsBar
