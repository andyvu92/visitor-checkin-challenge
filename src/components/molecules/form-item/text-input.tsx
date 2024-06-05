import { FormInputProps } from './interface'

export const TextInput: React.FC<FormInputProps> = ({
  name,
  label,
  required,
  placeholder,
}) => (
  <fieldset className="flex flex-col items-start">
    <label className="legend" htmlFor={name}>
      {label}
    </label>
    <input
      type="text"
      name={name}
      id={name}
      required={required}
      placeholder={placeholder}
    />
  </fieldset>
)
