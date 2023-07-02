import React, { Fragment } from "react"
import {
  Card,
  CardFooter,
  CardResume,
  CardSectionTitleWrapper,
  CardsContainer,
  CategoryPin,
  Text,
} from "./styles"
import { CaretUp } from "phosphor-react"
import CommentsIcon from "../icons/CommentsIcon"
import { useRouter } from "next/router"
import { DataSchema } from "../../../types"

interface RoadmapviewProps {
  column: {
    id: number
    columnTitle: string
    description: string
    status: DataSchema[] | undefined
    color: string
  }
}

const RoadmapViewColumns = ({ column }: RoadmapviewProps) => {
  const route = useRouter()

  return (
    <Fragment>
      <CardsContainer key={column?.id}>
        <CardSectionTitleWrapper>
          <Text model="titleSection">
            {column?.columnTitle} ({column?.status?.length})
          </Text>
          <Text model="sectionDescription">{column?.description}</Text>
        </CardSectionTitleWrapper>
        {column?.status?.map((suggestion) => {
          return (
            <Card
              css={{ "--status-color": `#${column?.color}` }}
              key={suggestion.id}
            >
              <CategoryPin css={{ "--status-color": `#${column?.color}` }}>
                {suggestion?.status}
              </CategoryPin>
              <CardResume
                onClick={() => route.push(`/suggestion-detail/${suggestion.id}`)}
              >
                <Text model="titleSection">{suggestion?.title}</Text>
                <Text model="sectionDescription">{suggestion?.description}</Text>

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
    </Fragment>
  )
}

export default RoadmapViewColumns
