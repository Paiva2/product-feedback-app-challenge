import React, { FormEvent, useContext, useEffect, useRef, useState } from "react"
import { CaretDown, CaretLeft } from "phosphor-react"
import Link from "next/link"
import {
  DropdownButton,
  CategoryDropDownMenu,
  CategoryLabel,
  GoBackWrapper,
  EditFeedbackForm,
  EditFeedbackCard,
  EditFeedbackContainer,
  EditFeedbackWrapper,
  Text,
  StatusLabel,
  StatusDropdownMenu,
  SaveChangesButtonWrapper,
} from "./styles"
import CheckedIcon from "@/components/icons/CheckedIcon"
import axios from "axios"
import { alertMessage } from "@/lib/alertMessage"
import Image from "next/image"
import { checkFormErrorsOnSubmit } from "@/utils/checkErrorsOnSubmit"
import { handleGetInputValue } from "@/utils/handleGetInputValue"
import { IForm, PostSectionData } from "../../../../types"
import { GlobalContext } from "@/context/globalContext"
import { GetServerSideProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { useQuery } from "react-query"
import { useRouter } from "next/router"

const ManageFeedback = (props: { id: string; data: PostSectionData }) => {
  const {
    data: postData,
    isLoading,
    refetch: refetchData,
  } = useQuery<PostSectionData>("specificPostToEdit", getSuggestion)

  const router = useRouter()

  async function getSuggestion() {
    const { data } = await axios.get(`/api/posts/${props.id}`)

    return data
  }

  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean | null>(false)
  const [updateStatusModalOpen, setUpdateStatusModalOpen] = useState(false)

  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]
  const status = ["Suggestion", "Planned", "In-Progress", "Live"]

  const [selectCategory, setSelectCategory] = useState(props.data?.category)
  const [selectStatus, setSelectStatus] = useState(props.data?.status)

  const { formDefaultValue } = useContext(GlobalContext)
  const [formData, setFormData] = useState<IForm>(formDefaultValue)
  const formRef = useRef<HTMLFormElement | null>(null)

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
      const response = await axios.post(`/api/posts/${props.id}`, formData)

      alertMessage("success", response.data.message)

      router.replace(router.asPath)

      formRef.current?.reset()
      setFormData(formDefaultValue)
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <EditFeedbackContainer>
      <EditFeedbackWrapper>
        <GoBackWrapper>
          <Link href="/">
            <CaretLeft size={15} color="#4661E6" weight="bold" /> Go Back
          </Link>
        </GoBackWrapper>

        <EditFeedbackCard>
          <Image
            className="edit-icon"
            width={56}
            height={56}
            alt="edit-icon"
            src="/edit-feedback.svg"
          />

          <Text model="title">Editing &apos;{props.data?.title}&apos;</Text>

          <EditFeedbackForm ref={formRef} onSubmit={(e) => handleSumit(e)}>
            <label className={formData.feedbackTitle.error ? "error-msg" : ""}>
              <Text model="labelTitle">Feedback Title</Text>
              <Text model="description">Add a short, descriptive headline</Text>
              <input
                defaultValue={props.data?.title}
                onChange={(e) =>
                  handleGetInputValue(
                    e,
                    "feedbackTitle",
                    setFormData,
                    formData,
                    selectStatus,
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
              <DropdownButton
                onClick={() =>
                  setCategoryModalOpen(() =>
                    !updateStatusModalOpen ? !categoryModalOpen : null
                  )
                }
                type="button"
              >
                {selectCategory} <CaretDown size={15} weight="bold" />
              </DropdownButton>

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

            <StatusLabel
              css={{
                "--control-modal": updateStatusModalOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            >
              <Text model="labelTitle">Update Status</Text>
              <Text model="description">Change feature state</Text>
              <DropdownButton
                onClick={() => setUpdateStatusModalOpen(!updateStatusModalOpen)}
                type="button"
              >
                {selectStatus} <CaretDown size={15} weight="bold" />
              </DropdownButton>

              <StatusDropdownMenu
                css={{
                  "--control-modal": updateStatusModalOpen ? "1" : "0",
                  "--control-visibility": updateStatusModalOpen
                    ? "visible"
                    : "hidden",
                }}
              >
                {status.map((category) => {
                  return (
                    <li key={category} onClick={() => setSelectStatus(category)}>
                      {category}

                      {category === selectStatus && <CheckedIcon />}
                    </li>
                  )
                })}
              </StatusDropdownMenu>
            </StatusLabel>

            <label className={formData.feedbackDetail.error ? "error-msg" : ""}>
              <Text model="labelTitle">Feedback Detail</Text>
              <Text model="description">
                Include any specific comments on what should be improved, added, etc.
              </Text>
              <textarea
                defaultValue={props.data?.description}
                onChange={(e) =>
                  handleGetInputValue(
                    e,
                    "feedbackDetail",
                    setFormData,
                    formData,
                    selectStatus,
                    selectCategory
                  )
                }
              />
              {formData.feedbackDetail.error && <p>Can&apos; t be empty!</p>}
            </label>

            <SaveChangesButtonWrapper>
              <button type="submit">Save Changes</button>
            </SaveChangesButtonWrapper>
          </EditFeedbackForm>
        </EditFeedbackCard>
      </EditFeedbackWrapper>
    </EditFeedbackContainer>
  )
}

export default ManageFeedback

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as Params

  const { data } = await axios.get(`http://localhost:3000/api/posts/${id}`)

  return { props: { id, data } }
}
