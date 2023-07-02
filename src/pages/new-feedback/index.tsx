import PlusIcon from "@/components/icons/PlusIcon"
import React, { FormEvent, useContext, useEffect, useRef, useState } from "react"
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
import { checkFormErrorsOnSubmit } from "@/utils/checkErrorsOnSubmit"
import { handleGetInputValue } from "@/utils/handleGetInputValue"
import { IForm } from "../../../types"
import { GlobalContext } from "@/context/globalContext"

const NewFeedback = () => {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [selectCategory, setSelectCategory] = useState("Feature")

  const { formDefaultValue, refetchData } = useContext(GlobalContext)

  const [formData, setFormData] = useState<IForm>(formDefaultValue)
  const formRef = useRef<HTMLFormElement | null>(null)

  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]

  useEffect(() => {
    if (formData.feedbackTitle.text) {
      formData.feedbackTitle.error = false
    }

    if (formData.feedbackDetail.text) {
      formData.feedbackDetail.error = false
    }
  }, [formData])

  const handleSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    checkFormErrorsOnSubmit(formData, setFormData)

    if (!formData.feedbackDetail.text || !formData.feedbackTitle.text) return

    try {
      const response = await axios.post("/api/new-post", formData)

      alertMessage("success", response.data.message)

      formRef.current?.reset()
      setFormData(formDefaultValue)

      refetchData()
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <NewFeedbackContainer>
      <NewFeedbackWrapper>
        <GoBackWrapper>
          <CaretLeft size={15} color="#4661E6" weight="bold" />
          <button type="button" onClick={() => window?.history.back()}>
            Go Back
          </button>
        </GoBackWrapper>

        <NewFeedbackCard>
          <PlusIcon />

          <Text model="title">Create New Feedback</Text>

          <NewFeedBackForm ref={formRef} onSubmit={(e) => handleSumit(e)}>
            <label className={formData.feedbackTitle.error ? "error-msg" : ""}>
              <Text model="labelTitle">Feedback Title</Text>
              <Text model="description">Add a short, descriptive headline</Text>
              <input
                onChange={(e) =>
                  handleGetInputValue(
                    e,
                    "feedbackTitle",
                    setFormData,
                    formData,
                    selectCategory
                  )
                }
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
                    <li
                      key={category}
                      onClick={() => {
                        setSelectCategory(category)

                        handleGetInputValue(
                          undefined,
                          "feedbackCategory",
                          setFormData,
                          formData,
                          category
                        )
                      }}
                    >
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
              <textarea
                onChange={(e) =>
                  handleGetInputValue(
                    e,
                    "feedbackDetail",
                    setFormData,
                    formData,
                    selectCategory
                  )
                }
              />
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
