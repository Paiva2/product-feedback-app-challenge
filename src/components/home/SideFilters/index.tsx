import React, { useContext, useEffect, useState } from "react"
import {
  FilterButton,
  Filters,
  FiltersWrapper,
  Names,
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

const SideFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const filters = ["All", "UI", "Enhancement", "Feature", "Bug"]

  let counter = {
    planned: 0,
    inProgress: 0,
    live: 0,
  }

  const { dataSortedBy, isLoading } = useContext(GlobalContext) as IContext

  dataSortedBy?.forEach((suggestion) => {
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
    <FiltersWrapper>
      <TopCard>
        <TopText model="cardTitle">Frontend Mentor</TopText>
        <TopText model="cardDescription">Feedback board</TopText>
      </TopCard>

      <Filters>
        {filters.map((filter) => {
          return (
            <FilterButton
              onClick={() => setSelectedFilter(filter)}
              css={{
                "--active-filter-bg":
                  selectedFilter === filter ? "#4661e6" : "#f2f4ff",
                "--active-filter-color":
                  selectedFilter === filter ? "#fff" : "#4661e6",
              }}
              key={filter}
            >
              {filter}
            </FilterButton>
          )
        })}
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
    </FiltersWrapper>
  )
}

export default SideFilters
