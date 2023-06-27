import { IForm } from "../../types"

export const handleGetInputValue = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: string,
  setFormData: React.Dispatch<React.SetStateAction<IForm>>,
  formData: IForm,
  selectedCategory?: string,
  selectedStatus?: string
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
      feedbackStatus: {
        text: selectedStatus ?? "",
        error: false,
      },
      feedbackCategory: {
        text: selectedCategory ?? "",
        error: false,
      },
    }
  })
}
