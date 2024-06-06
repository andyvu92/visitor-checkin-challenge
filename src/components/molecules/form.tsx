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
        <button type="submit" className="primary-cta">
          {submitLabel}
        </button>
      )}
    </form>
  )
}
