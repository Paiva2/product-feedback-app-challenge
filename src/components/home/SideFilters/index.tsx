import React, { useState } from "react"
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

const SideFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const filters = ["All", "UI", "Enhancement", "Feature", "Bug"]

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
            <RoadmapNumberCount>2</RoadmapNumberCount>
          </RoadmapNamesWrapper>
          <RoadmapNamesWrapper>
            <Names css={{ "--color-pin": "#ad1fea" }}>In-Progress</Names>
            <RoadmapNumberCount>3</RoadmapNumberCount>
          </RoadmapNamesWrapper>
          <RoadmapNamesWrapper>
            <Names css={{ "--color-pin": "#62bcfa" }}>Live</Names>
            <RoadmapNumberCount>1</RoadmapNumberCount>
          </RoadmapNamesWrapper>
        </Roadmaps>
      </RoadmapWrapper>
    </FiltersWrapper>
  )
}

export default SideFilters
