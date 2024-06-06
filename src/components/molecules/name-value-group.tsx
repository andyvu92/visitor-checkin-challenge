interface NameValueGroupProps {
  name: string
  value?: string
}

export const NameValueGroup: React.FC<NameValueGroupProps> = ({
  name,
  value,
}) => (
  <div className="min-w-name-value-group flex flex-col gap-1">
    {name && <p className="text-dark text-base">{name}</p>}
    {value && <p className="text-grey text-base">{value}</p>}
  </div>
)
