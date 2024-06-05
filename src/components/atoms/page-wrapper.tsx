import { PageHeading } from '../molecules/page-heading'

export const PageWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <div className="container relative -top-32">
    <div className="rounded-t-lg-1 relative flex flex-col bg-white px-14">
      <PageHeading title="Register a new Visit" />
      {children}
    </div>
  </div>
)
