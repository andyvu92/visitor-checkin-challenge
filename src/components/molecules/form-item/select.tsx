import { FormInputProps, FormOptionProps } from './interface'

interface SelectProps extends FormInputProps {
  options: FormOptionProps[]
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  required,
  options,
  defaultValue = '',
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
        name={name}
        className="cursor-pointer"
        defaultValue={defaultValue}
        key={defaultValue} // force rerender as select dropdown has confusing behaviour without being a controlled component
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
