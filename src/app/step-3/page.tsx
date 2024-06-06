'use client'
import { Button } from '@/components/atoms/button'
import { SectionHeading } from '@/components/atoms/section-heading'
import { SectionWrapper } from '@/components/atoms/section-wrapper'
import { formStepRoutePaths } from '@/components/global/constants'
import { Notification } from '@/components/molecules/notification'
import { VisitDetailsReview } from '@/components/organisms/visit-details-review'
import { useState } from 'react'

const ThirdStep = () => {
  const [visitDataSubmitted, setVisitDataSubmitted] = useState(false)
  const [visitName, setVisitName] = useState('')

  return (
    <SectionWrapper>
      {visitDataSubmitted ? (
        <Notification
          heading="Your Visit sent successfully"
          message={`Great news ${visitName}, your Visit registration is complete.`}
        />
      ) : (
        <h3 className="h2">Review your visit details</h3>
      )}

      <div className="max-w-visit-details-review flex w-full justify-between">
        <SectionHeading title="Your visit details" />
        {!visitDataSubmitted && (
          <Button
            label="Edit"
            icon="pencil"
            routePath={formStepRoutePaths.details}
          />
        )}
      </div>
      <VisitDetailsReview
        visitDataSubmitted={visitDataSubmitted}
        setVisitDataSubmitted={setVisitDataSubmitted}
        setVisitName={setVisitName}
      />
    </SectionWrapper>
  )
}

export default ThirdStep
