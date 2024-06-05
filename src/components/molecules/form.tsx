import { FormEvent } from 'react'

interface FormProps {
  children: React.ReactNode
  submitLabel: string
  onSubmitCallback: (formData: FormData) => void
}

export const Form: React.FC<FormProps> = ({
  children,
  submitLabel,
  onSubmitCallback,
}) => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (e?.currentTarget) {
      const formData = new FormData(e.currentTarget as HTMLFormElement)

      onSubmitCallback(formData)
    }
  }

  return (
    <form className="flex flex-col gap-9" onSubmit={submitHandler}>
      {children}
      {!!submitLabel && (
        <button
          type="submit"
          className="bg-secondary ml-auto rounded-md px-7 py-3 text-base font-light text-white shadow-sm hover:bg-opacity-90"
        >
          {submitLabel}
        </button>
      )}
    </form>
  )
}
