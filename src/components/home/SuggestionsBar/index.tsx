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
  const [selectedFilter, setSelectedFilter] = useState("Most Upvotes")

  const filters = [
    "Most Upvotes",
    "Least Upvotes",
    "Most comments",
    "Least Comments",
  ]

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
              {selectedFilter} <CaretDown size={15} weight="bold" />
            </SortByButton>
            <SortByFilterModal
              css={{
                "--control-modal-opacity": openSortBy ? "1" : "0",
                "--control-modal-visibility": openSortBy ? "visible" : "hidden",
              }}
            >
              <ul>
                {filters?.map((filter) => {
                  return (
                    <li
                      onClick={() => {
                        setSelectedFilter(filter), setOpenSortBy(false)
                      }}
                      key={filter}
                    >
                      {filter}

                      {selectedFilter === filter && (
                        <span>
                          <CheckedIcon />
                        </span>
                      )}
                    </li>
                  )
                })}
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
