import { IconType, SvgIcon } from '@/components/atoms/svg-icon'
import { FormInputProps, FormOptionProps } from './interface'

export interface VisitorTypeOption extends FormOptionProps {
  icon: IconType
}

interface VisitorTypeSelectProps extends FormInputProps {
  options: VisitorTypeOption[]
}

export const VisitorTypeSelect: React.FC<VisitorTypeSelectProps> = ({
  label,
  name,
  required,
  options,
}) => {
  if (!options?.length) return null

  return (
    <fieldset>
      <legend>{label}</legend>
      <div className="grid grid-cols-3 gap-9">
        {options?.map((option) => {
          const combinedName = `${name}-${option?.value}`
          return (
            <div key={option?.value}>
              <input
                id={combinedName}
                name={name}
                value={option?.value}
                type="radio"
                className="peer absolute opacity-0"
                required={required}
              />
              <label
                htmlFor={combinedName}
                className="rounded-lg-1 border-light-grey hover:bg-secondary peer-checked:bg-secondary group flex cursor-pointer flex-col items-center border transition-colors hover:bg-opacity-20 peer-checked:bg-opacity-20 peer-checked:[&>span]:border-white"
              >
                {/* decided not bind with section-heading classes as it could be different on other viewports */}
                <span className="text-grey border-light-grey block w-full border-b p-5 text-center text-2xl font-medium group-hover:border-white">
                  {option?.name}
                </span>
                <SvgIcon icon={option?.icon} className="size-icon-large p-5" />
              </label>
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}
