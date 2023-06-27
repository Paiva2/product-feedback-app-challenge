import { IForm } from "../../types"

export const checkFormErrorsOnSubmit = (
  formData: IForm,
  setFormData: React.Dispatch<React.SetStateAction<IForm>>
) => {
  if (!formData) return

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
