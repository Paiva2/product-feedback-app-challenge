import React, { useCallback, useContext, useEffect, useState } from "react"
import {
  Card,
  CardFooter,
  CardResume,
  CardSectionTitleWrapper,
  CardsContainer,
  CategoryPin,
  ColumnsWrapper,
  GoBackWrapper,
  NewfeedbackButtonWrapper,
  RoadmapContainer,
  RoadmapWrapper,
  Text,
  Topbar,
  TopbarWrapper,
} from "./styles"
import { CaretLeft, CaretUp } from "phosphor-react"
import Link from "next/link"
import CommentsIcon from "@/components/icons/CommentsIcon"
import { useRouter } from "next/router"
import { GlobalContext } from "@/context/globalContext"
import { DataSchema } from "../../../types"

interface ColumnsSchema {
  planned: DataSchema[]
  inProgress: DataSchema[]
  live: DataSchema[]
}

const RoadmapView = () => {
  const route = useRouter()
  const { data } = useContext(GlobalContext)
  const [columnsStatus, setColumnsStatus] = useState<ColumnsSchema>({
    planned: [],
    inProgress: [],
    live: [],
  })

  const handleGetSuggestionsStatus = useCallback(() => {
    data?.forEach((suggestion) => {
      if (suggestion.status === "Planned") {
        setColumnsStatus((oldValue) => ({
          ...oldValue,
          planned: [...oldValue.planned, suggestion],
        }))
      } else if (suggestion.status === "In-Progress") {
        setColumnsStatus((oldValue) => ({
          ...oldValue,
          inProgress: [...oldValue.inProgress, suggestion],
        }))
      } else if (suggestion.status === "Live") {
        setColumnsStatus((oldValue) => ({
          ...oldValue,
          live: [...oldValue.live, suggestion],
        }))
      }
    })
  }, [data])

  useEffect(() => {
    handleGetSuggestionsStatus()
  }, [data, handleGetSuggestionsStatus])

  const columns = [
    {
      id: 1,
      columnTitle: "Planned",
      description: "Ideas prioritized for research",
      status: columnsStatus.planned,
      color: "#f49f85",
    },
    {
      id: 2,
      columnTitle: "In-Progress",
      description: "Currently being developed",
      status: columnsStatus.inProgress,
      color: "#ad1fea",
    },
    {
      id: 3,
      columnTitle: "Live ",
      description: "Released features",
      status: columnsStatus.live,
      color: "#62bcfa",
    },
  ]

  return (
    <RoadmapContainer>
      <RoadmapWrapper>
        <Topbar>
          <TopbarWrapper>
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
          </TopbarWrapper>
        </Topbar>
        <ColumnsWrapper>
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

                      <CardResume
                        onClick={() =>
                          route.push(`/suggestion-detail/${suggestion.id}`)
                        }
                      >
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
        </ColumnsWrapper>
      </RoadmapWrapper>
    </RoadmapContainer>
  )
}

export default RoadmapView
