import { SectionHeading } from '@/components/atoms/section-heading'
import { SectionWrapper } from '@/components/atoms/section-wrapper'
import { VisitDetailsForm } from '@/components/organisms/visit-details-form'

const SecondStep = () => {
  return (
    <SectionWrapper>
      <SectionHeading title="Add visit details" />
      <VisitDetailsForm />
    </SectionWrapper>
  )
}

export default SecondStep
