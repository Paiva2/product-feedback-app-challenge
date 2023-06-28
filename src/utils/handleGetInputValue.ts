import { IForm } from "../../types"

export const handleGetInputValue = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
  input: string,
  setFormData: React.Dispatch<React.SetStateAction<IForm>>,
  formData: IForm,
  dropdownValue?: string
) => {
  setFormData((oldValue) => {
    const formDataCopy = {
      ...oldValue[input as keyof typeof formData],
      text: e?.target.value ?? dropdownValue,
    }

    return {
      ...oldValue,
      [input]: {
        text: formDataCopy.text,
        error: formDataCopy.error,
      },
    }
  })
}
