import React, { useContext } from "react"
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

const RoadmapView = () => {
  const { suggestionsData, isLoading } = useContext(GlobalContext)

  const route = useRouter()

  const filterColumnStatus = (status: string) => {
    const filteredStatus = suggestionsData?.filter(
      (suggestion) => suggestion.status === status
    )

    return filteredStatus
  }

  const columns = [
    {
      id: 1,
      columnTitle: "Planned",
      description: "Ideas prioritized for research",
      status: filterColumnStatus("Planned"),
      color: "f49f85",
    },
    {
      id: 2,
      columnTitle: "In-Progress",
      description: "Currently being developed",
      status: filterColumnStatus("In-Progress"),
      color: "ad1fea",
    },
    {
      id: 3,
      columnTitle: "Live ",
      description: "Released features",
      status: filterColumnStatus("Live"),
      color: "62bcfa",
    },
  ]

  if (isLoading) return <></>

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
                  <Text model="titleSection">
                    {column.columnTitle} ({column?.status?.length})
                  </Text>
                  <Text model="sectionDescription">{column.description}</Text>
                </CardSectionTitleWrapper>

                {column?.status?.map((suggestion) => {
                  return (
                    <Card
                      css={{ "--status-color": `#${column.color}` }}
                      key={suggestion.id}
                    >
                      <CategoryPin css={{ "--status-color": `#${column.color}` }}>
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
