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
import { useRouter } from "next/router"
import CheckedIcon from "@/components/icons/CheckedIcon"

const SuggestionsBar = () => {
  const [openSortBy, setOpenSortBy] = useState(false)

  const route = useRouter()

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
                    <CheckedIcon />
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
          <button onClick={() => route.push("/new-feedback")}>+ Add Feedback</button>
        </NewFeedBackButtonWrapper>
      </Wrapper>
    </CounterContainer>
  )
}

export default SuggestionsBar
