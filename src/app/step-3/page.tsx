import { Button } from '@/components/atoms/button'
import { SectionHeading } from '@/components/atoms/section-heading'
import { SectionWrapper } from '@/components/atoms/section-wrapper'
import { formStepRoutePaths } from '@/components/global/constants'
import { VisitDetailsReview } from '@/components/organisms/visit-details-review'

const ThirdStep = () => {
  return (
    <SectionWrapper>
      <h3 className="h2">Review your visit details</h3>
      <div className="max-w-visit-details-review flex content-between">
        <SectionHeading title="Your visit details" />
        <Button
          label="Edit"
          icon="pencil"
          routePath={formStepRoutePaths.details}
        />
      </div>
      <VisitDetailsReview />
    </SectionWrapper>
  )
}

export default ThirdStep
