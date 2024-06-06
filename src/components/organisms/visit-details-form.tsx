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
import { VisitDetailsDataProps } from './visit-details-review'

export const VisitDetailsForm = () => {
  const router = useRouter()
  const [token, setToken] = useState('')

  const [visitData, setVisitData] = useState<VisitDetailsDataProps | null>(null)

  useEffect(() => {
    const token = localStorage.getItem(sessionStorageName.token)

    if (!!token) {
      const data = !!token ? localStorage.getItem(token) : null
      setToken(token)

      if (!!data) {
        setVisitData(JSON.parse(data))
      }
    } else {
      // redirect back to initial step if data not found
      router.push(formStepRoutePaths.register)
    }
  }, [router])

  const handleFormSubmit = async (formData: FormData) => {
    const { data } = await axios.post<FormDataPostResponse>(
      '/step-2/api/update-visit-details',
      formData,
    )

    // assume all requests to be success
    // handling error when scale
    if (data?.success) {
      localStorage.setItem(token, JSON.stringify(data?.data))
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
            defaultValue={visitData?.visitName}
          />
          <DateTimeInput
            name={formInputName.entryDate}
            label="Date"
            type="date"
            required
            defaultValue={visitData?.entryDate}
          />
          <DateTimeInput
            name={formInputName.entryTime}
            label="Entry time"
            type="time"
            required
            defaultValue={visitData?.entryTime}
          />
          <Select
            name={formInputName.visitDuration}
            label="Visit duration"
            options={stringArrToFormOptions(visitDurationOptions)}
            required
            defaultValue={visitData?.visitDuration}
          />
        </div>
        <div className="flex flex-col gap-9">
          <Select
            name={formInputName.entryPoint}
            label="Entry point"
            options={stringArrToFormOptions(visitEntryOptions)}
            required
            defaultValue={visitData?.entryPoint}
          />
          <Select
            name={formInputName.meetingPointLevel}
            label="Meeting point level"
            options={stringArrToFormOptions(meetingPointLevelOptions)}
            required
            defaultValue={visitData?.meetingPointLevel}
          />
          <Select
            name={formInputName.meetingPointStand}
            label="Meeting point stand"
            options={stringArrToFormOptions(meetingPointStandOptions)}
            required
            defaultValue={visitData?.meetingPointStand}
          />
          <Select
            name={formInputName.meetingPointRoom}
            label="Meeting point room"
            options={stringArrToFormOptions(meetingPointRoomOptions)}
            required
            defaultValue={visitData?.meetingPointRoom}
          />
        </div>
      </div>
    </Form>
  )
}
