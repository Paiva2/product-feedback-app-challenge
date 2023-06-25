import PlusIcon from "@/components/icons/PlusIcon"
import React, { FormEvent, useEffect, useState } from "react"
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
import axios from "axios"
import { alertMessage } from "../../lib/alertMessage"

interface IForm {
  feedbackTitle: {
    text: string
    error: boolean
  }
  feedbackDetail: {
    text: string
    error: boolean
  }
  feedbackCategory: {
    text: string
    error: boolean
  }
}

const NewFeedback = () => {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [selectCategory, setSelectCategory] = useState("Feature")
  const [formData, setFormData] = useState<IForm>({
    feedbackTitle: {
      text: "",
      error: false,
    },
    feedbackDetail: {
      text: "",
      error: false,
    },
    feedbackCategory: {
      text: "",
      error: false,
    },
  })

  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]

  const handleGetInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    input: string
  ) => {
    setFormData((oldValue) => {
      const formDataCopy = {
        ...oldValue[input as keyof typeof formData],
        text: e.target.value,
      }

      return {
        ...oldValue,
        [input]: {
          text: formDataCopy.text,
          error: formDataCopy.error,
        },
        feedbackCategory: {
          text: selectCategory,
          error: false,
        },
      }
    })
  }

  useEffect(() => {
    if (formData.feedbackTitle.text) {
      formData.feedbackTitle.error = false
    }

    if (formData.feedbackDetail.text) {
      formData.feedbackDetail.error = false
    }
  }, [formData])

  const checkFormErrorsOnSubmit = () => {
    Object.keys(formData).map((value) => {
      if (formData[value as keyof typeof formData].text === "") {
        setFormData((oldValue) => {
          const formDataCopy = {
            ...oldValue[value as keyof typeof formData],
            error: true,
          }

          return {
            ...oldValue,
            [value]: {
              text: formDataCopy.text,
              error: formDataCopy.error,
            },
          }
        })
      } else {
        formData[value as keyof typeof formData].error = false
      }
    })
  }

  const handleSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    checkFormErrorsOnSubmit()

    if (!formData.feedbackDetail.text || !formData.feedbackTitle.text) return

    try {
      const response = await axios.post("/api/new-post", formData)

      alertMessage("success", response.data.message)
    } catch (e) {
      console.warn(e)
    }
  }

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

          <NewFeedBackForm onSubmit={(e) => handleSumit(e)}>
            <label className={formData.feedbackTitle.error ? "error-msg" : ""}>
              <Text model="labelTitle">Feedback Title</Text>
              <Text model="description">Add a short, descriptive headline</Text>
              <input
                onChange={(e) => handleGetInputValue(e, "feedbackTitle")}
                type="text"
              />
              {formData.feedbackTitle.error && <p>Can&apos; t be empty!</p>}
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

            <label className={formData.feedbackDetail.error ? "error-msg" : ""}>
              <Text model="labelTitle">Feedback Detail</Text>
              <Text model="description">
                Include any specific comments on what should be improved, added, etc.
              </Text>
              <textarea onChange={(e) => handleGetInputValue(e, "feedbackDetail")} />
              {formData.feedbackDetail.error && <p>Can&apos; t be empty!</p>}
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
