import { SectionHeading } from '@/components/atoms/section-heading'
import { SectionWrapper } from '@/components/atoms/section-wrapper'
import { NewVisitForm } from '@/components/organisms/new-visit-form'

const Home = () => {
  return (
    <SectionWrapper>
      <SectionHeading title="Select visit type and reason" />
      <NewVisitForm />
    </SectionWrapper>
  )
}

export default Home
