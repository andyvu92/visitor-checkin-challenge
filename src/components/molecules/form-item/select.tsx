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
      <label className="legend">{label}</label>
      <select
        id={name}
        required={required}
        defaultValue=""
        name="country"
        className="text-dark min-w-select cursor-pointer rounded-md border-0 px-5 py-3 text-base shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
