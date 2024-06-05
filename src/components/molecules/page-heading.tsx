import { SvgIcon } from '../atoms/svg-icon'

interface PageHeadingProps {
  title: string
}

export const PageHeading: React.FC<PageHeadingProps> = ({ title }) =>
  !!title ? (
    <div className="grid-cols-section-heading border-light-grey mb-11 grid items-center gap-3 border-b pb-10 pt-12">
      <SvgIcon icon="calendar" />
      <h2>{title}</h2>
    </div>
  ) : null
