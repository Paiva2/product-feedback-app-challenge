import React from "react"
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

const RoadmapView = () => {
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
            <button>+ Add Feedback</button>
          </NewfeedbackButtonWrapper>
        </Topbar>

        <CardsContainer>
          <CardSectionTitleWrapper>
            <Text model="titleSection">Planned (2)</Text>
            <Text model="sectionDescription">Ideas prioritized for research</Text>
          </CardSectionTitleWrapper>
          <Card>
            <CategoryPin>Planned</CategoryPin>

            <CardResume>
              <Text model="titleSection">More comprehensive reports</Text>
              <Text model="sectionDescription">
                It would be great to see a more detailed breakdown of solutions.
              </Text>

              <div className="feature-pin">
                <span>Feature</span>
              </div>
            </CardResume>

            <CardFooter>
              <button>
                <CaretUp color="#4661e6" size={15} weight="bold" /> 123
              </button>

              <span>
                <CommentsIcon /> 2
              </span>
            </CardFooter>
          </Card>

          <Card>
            <span>Planned</span>

            <CardResume>
              <Text model="titleSection">More comprehensive reports</Text>
              <Text model="sectionDescription">
                It would be great to see a more detailed breakdown of solutions.
              </Text>

              <div className="feature-pin">
                <span>Feature</span>
              </div>
            </CardResume>

            <CardFooter>
              <button>
                <CaretUp color="#4661e6" size={15} weight="bold" /> 123
              </button>

              <span>
                <CommentsIcon /> 2
              </span>
            </CardFooter>
          </Card>

          <Card>
            <span>Planned</span>

            <CardResume>
              <Text model="titleSection">More comprehensive reports</Text>
              <Text model="sectionDescription">
                It would be great to see a more detailed breakdown of solutions.
              </Text>

              <div className="feature-pin">
                <span>Feature</span>
              </div>
            </CardResume>

            <CardFooter>
              <button>
                <CaretUp color="#4661e6" size={15} weight="bold" /> 123
              </button>

              <span>
                <CommentsIcon /> 2
              </span>
            </CardFooter>
          </Card>
        </CardsContainer>
      </RoadmapWrapper>
    </RoadmapContainer>
  )
}

export default RoadmapView
