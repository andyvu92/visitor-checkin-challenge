import { FormInputProps, FormOptionProps } from './interface'

interface SelectProps extends FormInputProps {
  options: FormOptionProps[]
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  required,
  options,
}) => {
  if (!options?.length) return null

  return (
    <fieldset className="flex flex-col items-start">
      <label htmlFor={name} className="legend">
        {label}
      </label>
      <select
        id={name}
        required={required}
        defaultValue=""
        name={name}
        className="cursor-pointer"
      >
        <option value="" disabled>
          {'–select–'}
        </option>
        {options.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.name}
          </option>
        ))}
      </select>
    </fieldset>
  )
}
