import React from "react"
import {
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

const SideFilters = () => {
  return (
    <FiltersWrapper>
      <TopCard>
        <TopText model="cardTitle">Frontend Mentor</TopText>
        <TopText model="cardDescription">Feedback board</TopText>
      </TopCard>

      <Filters>
        {/* make buttons dinamyc  */}
        <button>All</button>
        <button>UI</button>
        <button>Enhancement</button>
        <button>Feature</button>
        <button>Bug</button>
      </Filters>

      <RoadmapWrapper>
        <RoadmapTitle>
          <span>Roadmap</span>
          <a href="#">View</a>
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
