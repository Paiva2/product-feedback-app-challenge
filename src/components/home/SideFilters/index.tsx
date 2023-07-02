import React, { useContext, useState } from "react"
import {
  AllFiltersWrapper,
  FilterButton,
  FilterButtonsWrapper,
  FilterContainer,
  FilterWrapper,
  Filters,
  GradientCardWrapper,
  MenuHamburguerIconWrapper,
  Names,
  Overlay,
  RoadmapNamesWrapper,
  RoadmapNumberCount,
  RoadmapTitle,
  RoadmapWrapper,
  Roadmaps,
  TopCard,
  TopText,
} from "./styles"
import Link from "next/link"
import { GlobalContext } from "@/context/globalContext"
import { IContext } from "../../../../types"
import ClosedMenuHamburguer from "@/components/icons/ClosedMenuHamburguer"
import XIcon from "@/components/icons/XIcon"

const SideFilters = () => {
  const filters = ["All", "UI", "Enhancement", "Feature", "Bug"]
  const [openMenuHamburguer, setOpenMenuHamburguer] = useState(false)

  let counter = {
    planned: 0,
    inProgress: 0,
    live: 0,
  }

  const {
    suggestionsData,
    isLoading,
    dataCategoryFiltered,
    setDataCategoryFiltered,
    handleSortCategoryFilter,
  } = useContext(GlobalContext) as IContext

  suggestionsData?.forEach((suggestion) => {
    if (suggestion.status === "Planned") {
      counter.planned += 1
    } else if (suggestion.status === "In-Progress") {
      counter.inProgress += 1
    } else if (suggestion.status === "Live") {
      counter.live += 1
    }
  })

  if (isLoading) return <></>

  return (
    <FilterContainer>
      <FilterWrapper>
        <TopCard>
          <GradientCardWrapper>
            <TopText model="cardTitle">Frontend Mentor</TopText>
            <TopText model="cardDescription">Feedback board</TopText>
          </GradientCardWrapper>

          <MenuHamburguerIconWrapper
            onClick={() => setOpenMenuHamburguer(!openMenuHamburguer)}
          >
            {openMenuHamburguer ? <XIcon /> : <ClosedMenuHamburguer />}
          </MenuHamburguerIconWrapper>
        </TopCard>
        <Overlay className={openMenuHamburguer ? "active" : "inactive"}>
          <AllFiltersWrapper className={openMenuHamburguer ? "active" : "inactive"}>
            <Filters>
              <FilterButtonsWrapper>
                {filters.map((filter) => {
                  return (
                    <FilterButton
                      onClick={() => {
                        setDataCategoryFiltered(filter),
                          handleSortCategoryFilter(filter)
                      }}
                      css={{
                        "--active-filter-bg":
                          dataCategoryFiltered === filter ? "#4661e6" : "#f2f4ff",
                        "--active-filter-color":
                          dataCategoryFiltered === filter ? "#fff" : "#4661e6",
                      }}
                      key={filter}
                    >
                      {filter}
                    </FilterButton>
                  )
                })}
              </FilterButtonsWrapper>
            </Filters>
            <RoadmapWrapper>
              <RoadmapTitle>
                <span>Roadmap</span>
                <Link href="/roadmap-view">View</Link>
              </RoadmapTitle>
              <Roadmaps>
                <RoadmapNamesWrapper>
                  <Names css={{ "--color-pin": "#f49f85" }}>Planned</Names>
                  <RoadmapNumberCount>{counter.planned}</RoadmapNumberCount>
                </RoadmapNamesWrapper>
                <RoadmapNamesWrapper>
                  <Names css={{ "--color-pin": "#ad1fea" }}>In-Progress</Names>
                  <RoadmapNumberCount>{counter.inProgress}</RoadmapNumberCount>
                </RoadmapNamesWrapper>
                <RoadmapNamesWrapper>
                  <Names css={{ "--color-pin": "#62bcfa" }}>Live</Names>
                  <RoadmapNumberCount>{counter.live}</RoadmapNumberCount>
                </RoadmapNamesWrapper>
              </Roadmaps>
            </RoadmapWrapper>
          </AllFiltersWrapper>
        </Overlay>
      </FilterWrapper>
    </FilterContainer>
  )
}

export default SideFilters
