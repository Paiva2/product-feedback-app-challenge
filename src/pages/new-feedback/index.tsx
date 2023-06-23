import PlusIcon from "@/components/icons/PlusIcon"
import React, { useState } from "react"
import { CaretDown, CaretLeft } from "phosphor-react"
import Link from "next/link"
import {
  CategoryButton,
  CategoryDropDownMenu,
  CategoryLabel,
  GoBackWrapper,
  NewFeedBackButtonWrapper,
  NewFeedBackForm,
  NewFeedbackCard,
  NewFeedbackContainer,
  NewFeedbackWrapper,
  Text,
} from "./styles"
import CheckedIcon from "@/components/icons/CheckedIcon"

const NewFeedback = () => {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [selectCategory, setSelectCategory] = useState("Feature")

  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]

  return (
    <NewFeedbackContainer>
      <NewFeedbackWrapper>
        <GoBackWrapper>
          <Link href="/">
            <CaretLeft size={15} color="#4661E6" weight="bold" /> Go Back
          </Link>
        </GoBackWrapper>

        <NewFeedbackCard>
          <PlusIcon />

          <Text model="title">Create New Feedback</Text>

          <NewFeedBackForm>
            <label>
              <Text model="labelTitle">Feedback Title</Text>
              <Text model="description">Add a short, descriptive headline</Text>
              <input type="text" />
            </label>

            <CategoryLabel
              css={{
                "--control-modal": categoryModalOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            >
              <Text model="labelTitle">Category</Text>
              <Text model="description">Choose a category for your feedback</Text>
              <CategoryButton
                onClick={() => setCategoryModalOpen(!categoryModalOpen)}
                type="button"
              >
                {selectCategory} <CaretDown size={15} weight="bold" />
              </CategoryButton>

              <CategoryDropDownMenu
                css={{
                  "--control-modal": categoryModalOpen ? "1" : "0",
                  "--control-visibility": categoryModalOpen ? "visible" : "hidden",
                }}
              >
                {categories.map((category) => {
                  return (
                    <li key={category} onClick={() => setSelectCategory(category)}>
                      {category}

                      {category === selectCategory && <CheckedIcon />}
                    </li>
                  )
                })}
              </CategoryDropDownMenu>
            </CategoryLabel>

            <label>
              <Text model="labelTitle">Feedback Detail</Text>
              <Text model="description">
                Include any specific comments on what should be improved, added, etc.
              </Text>
              <textarea />
            </label>

            <NewFeedBackButtonWrapper>
              <button type="submit">Add Feedback</button>
            </NewFeedBackButtonWrapper>
          </NewFeedBackForm>
        </NewFeedbackCard>
      </NewFeedbackWrapper>
    </NewFeedbackContainer>
  )
}

export default NewFeedback
