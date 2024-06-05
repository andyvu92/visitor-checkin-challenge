interface SectionHeadingProps {
  title: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) =>
  !!title ? <p className="text-grey text-2xl font-medium">{title}</p> : null
