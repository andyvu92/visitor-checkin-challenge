'use client'
import axios from 'axios'
import {
  formStepRoutePaths,
  sessionStorageName,
} from '@/components/global/constants'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NameValueGroup } from '../molecules/name-value-group'
import moment from 'moment'
import { FormDataPostResponse } from '../global/interface/form-api-data'

export interface VisitDetailsDataProps {
  entryDate: string
  entryPoint: string
  entryTime: string
  meetingPointLevel: string
  meetingPointRoom: string
  meetingPointStand: string
  visitDuration: string
  visitName: string
}

interface VisitDetailsReviewProps {
  visitDataSubmitted?: boolean
  setVisitDataSubmitted?: (submitted: boolean) => void
}

export const VisitDetailsReview: React.FC<VisitDetailsReviewProps> = ({
  visitDataSubmitted,
  setVisitDataSubmitted,
}) => {
  const router = useRouter()
  const [visitData, setVisitData] = useState<VisitDetailsDataProps | null>(null)

  useEffect(() => {
    const token = localStorage.getItem(sessionStorageName.token)
    const data = !!token ? localStorage.getItem(token) : null

    if (!!data) {
      setVisitData(JSON.parse(data))
    } else {
      // redirect back to initial step if data not found
      if (typeof setVisitDataSubmitted === 'function') {
        setVisitDataSubmitted(false)
      }
      router.push(formStepRoutePaths.register)
    }
  }, [router, setVisitDataSubmitted])

  const visitCtaHandler = async () => {
    if (!visitDataSubmitted) {
      const { data } = await axios.post<FormDataPostResponse>(
        '/step-3/api/submit-visit',
        visitData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (data?.success) {
        localStorage.removeItem(sessionStorageName.token)
        if (typeof setVisitDataSubmitted === 'function') {
          setVisitDataSubmitted(true)
        }
      }
    } else {
      router.push(formStepRoutePaths.register)
    }
  }

  return (
    <div className="flex flex-col gap-9">
      <div className="gap-50 flex flex-wrap">
        <div className="flex flex-col gap-6">
          <NameValueGroup name="Visit name" value={visitData?.visitName} />
          <NameValueGroup
            name="Date"
            value={moment(visitData?.entryDate).format('DD/MM/YY')}
          />
          <NameValueGroup name="Entry time" value={visitData?.entryTime} />
          <NameValueGroup
            name="Visit duration"
            value={visitData?.visitDuration}
          />
        </div>
        <div className="flex flex-col gap-6">
          <NameValueGroup
            name="Meeting point level"
            value={visitData?.meetingPointLevel}
          />
          <NameValueGroup
            name="Meeting point stand"
            value={visitData?.meetingPointStand}
          />
          <NameValueGroup
            name="Meeting point room"
            value={visitData?.meetingPointRoom}
          />
        </div>
      </div>
      <button className="primary-cta ml-auto" onClick={visitCtaHandler}>
        {visitDataSubmitted ? 'Register a new visit' : 'Submit Visit'}
      </button>
    </div>
  )
}
