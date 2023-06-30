import React, { useContext, useState } from "react"
import {
  Card,
  CardFooter,
  CardResume,
  CardSectionTitleWrapper,
  CardsContainer,
  CategoryPin,
  GoBackWrapper,
  NewfeedbackButtonWrapper,
  RoadmapContainer,
  RoadmapWrapper,
  Text,
  Topbar,
} from "./styles"
import { CaretLeft, CaretUp } from "phosphor-react"
import Link from "next/link"
import CommentsIcon from "@/components/icons/CommentsIcon"
import { useRouter } from "next/router"
import { GlobalContext } from "@/context/globalContext"

const RoadmapView = () => {
  const route = useRouter()
  const { data } = useContext(GlobalContext)

  const plannedSuggestions = data?.filter(
    (suggestion) => suggestion.status === "Planned"
  )

  const inProgressSuggestions = data?.filter(
    (suggestion) => suggestion.status === "In-Progress"
  )

  const liveSuggestions = data?.filter((suggestion) => suggestion.status === "Live")

  const columns = [
    {
      id: 1,
      columnTitle: "Planned",
      description: "Ideas prioritized for research",
      status: plannedSuggestions,
      color: "#f49f85",
    },
    {
      id: 2,
      columnTitle: "In-Progress",
      description: "Currently being developed",
      status: inProgressSuggestions,
      color: "#ad1fea",
    },
    {
      id: 3,
      columnTitle: "Live ",
      description: "Released features",
      status: liveSuggestions,
      color: "#62bcfa",
    },
  ]

  return (
    <RoadmapContainer>
      <RoadmapWrapper>
        <Topbar>
          <GoBackWrapper>
            <span>
              <CaretLeft size={15} weight="bold" />
              <Link href="/">Go back</Link>
            </span>
            <p>Roadmap</p>
          </GoBackWrapper>

          <NewfeedbackButtonWrapper>
            <button onClick={() => route.push("/new-feedback")}>
              + Add Feedback
            </button>
          </NewfeedbackButtonWrapper>
        </Topbar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          {columns?.map((column) => {
            return (
              <CardsContainer key={column.id}>
                <CardSectionTitleWrapper>
                  <Text model="titleSection">{column.columnTitle} (2)</Text>
                  <Text model="sectionDescription">{column.description}</Text>
                </CardSectionTitleWrapper>

                {column?.status?.map((suggestion) => {
                  return (
                    <Card
                      css={{ "--status-color": column.color }}
                      key={suggestion.id}
                    >
                      <CategoryPin css={{ "--status-color": column.color }}>
                        {suggestion?.status}
                      </CategoryPin>

                      <CardResume>
                        <Text model="titleSection">{suggestion?.title}</Text>
                        <Text model="sectionDescription">
                          {suggestion?.description}
                        </Text>

                        <div className="feature-pin">
                          <span>{suggestion?.category}</span>
                        </div>
                      </CardResume>

                      <CardFooter>
                        <button>
                          <CaretUp color="#4661e6" size={15} weight="bold" />{" "}
                          {suggestion.upVotes}
                        </button>

                        <span>
                          <CommentsIcon /> {suggestion._count.comment}
                        </span>
                      </CardFooter>
                    </Card>
                  )
                })}
              </CardsContainer>
            )
          })}
        </div>
      </RoadmapWrapper>
    </RoadmapContainer>
  )
}

export default RoadmapView
