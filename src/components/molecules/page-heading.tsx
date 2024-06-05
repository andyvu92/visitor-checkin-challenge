import { CalendarIcon } from '../icons/calendar'

interface PageHeadingProps {
  title: string
}

export const PageHeading: React.FC<PageHeadingProps> = ({ title }) =>
  !!title ? (
    <div className="grid-cols-section-heading grid items-center gap-3 pb-10 pt-12">
      <CalendarIcon />
      <h2 className="text-dark text-3xl font-bold">{title}</h2>
    </div>
  ) : null
