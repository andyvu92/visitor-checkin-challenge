'use client'
import {
  VisitorTypeOption,
  VisitorTypeSelect,
} from '@/components/molecules/form-item/visitor-type-select'
import { FormOptionProps } from '@/components/molecules/form-item/interface'
import { formInputName } from '@/components/global/constants'
import { Select } from '@/components/molecules/form-item/select'
import { Form } from '@/components/molecules/form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const visitorTypeOptions: VisitorTypeOption[] = [
  {
    name: 'Visitor',
    value: 'visitor',
    icon: 'person',
  },
  {
    name: 'Delivery',
    value: 'delivery',
    icon: 'truck',
  },
  {
    name: 'Function',
    value: 'function',
    icon: 'star',
  },
]

const visitReasonOptions: FormOptionProps[] = [
  {
    name: 'Reason A',
    value: 'reason-a',
  },
  {
    name: 'Reason B',
    value: 'reason-b',
  },
  {
    name: 'Reason C',
    value: 'reason-c',
  },
]

export const NewVisitForm = () => {
  const router = useRouter()

  const handleFormSubmit = async (formData: FormData) => {
    console.log(formData)

    const { data } = await axios.post<{ success?: boolean }>(
      '/api/visit-init',
      formData,
    )

    if (data?.success) {
      router.push('/step-2')
    }
  }

  return (
    <Form onSubmitCallback={handleFormSubmit}>
      <VisitorTypeSelect
        name={formInputName.visitType}
        label="Select a visitor type"
        options={visitorTypeOptions}
        required
      />
      <Select
        name={formInputName.visitReason}
        label="Select a visit reason"
        options={visitReasonOptions}
        required
      />
    </Form>
  )
}
