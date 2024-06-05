import { FormInputProps } from './interface'

interface DateInputProps extends FormInputProps {
  type: 'date' | 'time'
}

export const DateTimeInput: React.FC<DateInputProps> = ({
  name,
  label,
  required,
  type = 'date',
}) => (
  <fieldset className="flex flex-col items-start">
    <label className="legend" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      className="cursor-pointer"
    />
  </fieldset>
)
