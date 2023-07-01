import React from "react"
import NotFound from "../icons/NotFound"
import { NotFoundContainer, Text, TextsWrapper, Wrapper } from "./styles"

const SuggestionNotFound = () => {
  return (
    <NotFoundContainer>
      <Wrapper>
        <NotFound />

        <TextsWrapper>
          <Text model="title">There is no feedback yet.</Text>
          <Text model="normal">
            Got a suggestion? Found a bug that needs to be squashed? We love hearing
            about new ideas to improve our app.
          </Text>
        </TextsWrapper>
      </Wrapper>
    </NotFoundContainer>
  )
}

export default SuggestionNotFound
