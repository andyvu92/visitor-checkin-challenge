import React from 'react'
import { CalendarIcon } from '../icons/calendar'
import { PersonIcon } from '../icons/person'
import { TruckIcon } from '../icons/truck'
import { StarIcon } from '../icons/star'
import { IconProps } from '../icons/interface'
import { PencilIcon } from '../icons/pencil'
import { CheckedCircleIcon } from '../icons/checked-circle'
import classNames from 'classnames'

export type IconType =
  | 'calendar'
  | 'person'
  | 'truck'
  | 'star'
  | 'pencil'
  | 'checked-circle'

const iconByString: IconByString = {
  'calendar': CalendarIcon,
  'person': PersonIcon,
  'truck': TruckIcon,
  'star': StarIcon,
  'pencil': PencilIcon,
  'checked-circle': CheckedCircleIcon,
}

export type IconByString = {
  [key in IconType]: React.FC<IconProps>
}

export interface SvgIconProps {
  icon?: IconType
  className?: string
  withWrapping?: 'none' | 'square'
  status?: '' | 'success'
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  icon,
  withWrapping = 'none',
  status,
  className,
  ...rest
}) => {
  if (!icon) return null

  const IconRenderByType = iconByString[icon]

  if (IconRenderByType === undefined) {
    return null
  }

  return (
    <IconRenderByType
      {...rest}
      className={classNames(className, {
        'rounded-md p-2': withWrapping === 'square',
        'bg-success text-white': status === 'success',
      })}
    />
  )
}
