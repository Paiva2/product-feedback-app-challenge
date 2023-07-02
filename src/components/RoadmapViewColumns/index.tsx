import React, { Fragment, useContext } from "react"
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
import axios from "axios"
import { GlobalContext } from "@/context/globalContext"

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

  const { refetchData } = useContext(GlobalContext)

  const handleUpdateUpVote = async (suggestionId: number) => {
    const id = suggestionId

    await axios.post("/api/posts", { id })

    refetchData()
  }

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
                <button onClick={() => handleUpdateUpVote(suggestion.id)}>
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
