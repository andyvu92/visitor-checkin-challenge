'use client'
import { VisitorTypeSelect } from '@/components/molecules/form-item/visitor-type-select'
import {
  formInputName,
  sessionStorageName,
} from '@/components/global/constants'
import { Select } from '@/components/molecules/form-item/select'
import { Form } from '@/components/molecules/form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FormDataPostResponse } from '../global/interface/form-api-data'
import { visitReasonOptions, visitorTypeOptions } from '@/global/data/form'

export const NewVisitForm = () => {
  const router = useRouter()

  const handleFormSubmit = async (formData: FormData) => {
    const { data } = await axios.post<FormDataPostResponse>(
      '/api/visit-init',
      formData,
    )

    if (data?.success) {
      if (!!data?.token) {
        sessionStorage.setItem(sessionStorageName.token, data.token)
      }
      router.push('/step-2')
    }
  }

  return (
    <Form submitLabel="Next" onSubmitCallback={handleFormSubmit}>
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
