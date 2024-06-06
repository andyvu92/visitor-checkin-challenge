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

interface VisitDetailsDataProps {
  entryDate: string
  entryPoint: string
  entryTime: string
  meetingPointLevel: string
  meetingPointRoom: string
  meetingPointStand: string
  visitDuration: string
  visitName: string
}

export const VisitDetailsReview = () => {
  const router = useRouter()
  const [visitData, setVisitData] = useState<VisitDetailsDataProps | null>(null)

  useEffect(() => {
    const token = sessionStorage.getItem(sessionStorageName.token)
    const data = !!token ? sessionStorage.getItem(token) : null

    if (!!data) {
      setVisitData(JSON.parse(data))
    } else {
      // redirect back to initial step if data not found
      router.push(formStepRoutePaths.register)
    }
  }, [router])

  return (
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
  )
}
