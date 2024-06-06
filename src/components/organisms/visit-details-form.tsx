'use client'
import axios from 'axios'
import {
  formInputName,
  formStepRoutePaths,
  sessionStorageName,
} from '@/components/global/constants'
import { Select } from '@/components/molecules/form-item/select'
import { Form } from '@/components/molecules/form'
import { useRouter } from 'next/navigation'
import { TextInput } from '@/molecules/form-item/text-input'
import { DateTimeInput } from '@/components/molecules/form-item/date-time-input'
import { FormDataPostResponse } from '../global/interface/form-api-data'
import { useEffect, useState } from 'react'
import {
  meetingPointLevelOptions,
  meetingPointRoomOptions,
  meetingPointStandOptions,
  visitDurationOptions,
  visitEntryOptions,
} from '@/global/data/form'
import { stringArrToFormOptions } from '../helpers/utils'

export const VisitDetailsForm = () => {
  const router = useRouter()
  const [token, setToken] = useState('')

  useEffect(() => {
    const token = sessionStorage.getItem(sessionStorageName.token)

    if (!!token) {
      setToken(token)
    } else {
      // redirect back to initial step if token not found
      router.push(formStepRoutePaths.register)
    }
  }, [router])

  const handleFormSubmit = async (formData: FormData) => {
    const { data } = await axios.post<FormDataPostResponse>(
      '/step-2/api/visit-details',
      formData,
    )

    if (data?.success) {
      sessionStorage.setItem(token, JSON.stringify(data?.data))
      router.push(formStepRoutePaths.review)
    }
  }

  return (
    <Form submitLabel="Review" onSubmitCallback={handleFormSubmit}>
      <div className="gap-25 flex flex-wrap">
        <div className="flex flex-col gap-9">
          <TextInput
            name={formInputName.visitName}
            label="Visit name"
            placeholder="John Citizen"
            required
          />
          <DateTimeInput
            name={formInputName.entryDate}
            label="Date"
            type="date"
            required
          />
          <DateTimeInput
            name={formInputName.entryTime}
            label="Entry time"
            type="time"
            required
          />
          <Select
            name={formInputName.visitDuration}
            label="Visit duration"
            options={stringArrToFormOptions(visitDurationOptions)}
            required
          />
        </div>
        <div className="flex flex-col gap-9">
          <Select
            name={formInputName.entryPoint}
            label="Entry point"
            options={stringArrToFormOptions(visitEntryOptions)}
            required
          />
          <Select
            name={formInputName.meetingPointLevel}
            label="Meeting point level"
            options={stringArrToFormOptions(meetingPointLevelOptions)}
            required
          />
          <Select
            name={formInputName.meetingPointStand}
            label="Meeting point stand"
            options={stringArrToFormOptions(meetingPointStandOptions)}
            required
          />
          <Select
            name={formInputName.meetingPointRoom}
            label="Meeting point room"
            options={stringArrToFormOptions(meetingPointRoomOptions)}
            required
          />
        </div>
      </div>
    </Form>
  )
}
