import React from 'react'
import { CalendarIcon } from '../icons/calendar'
import { PersonIcon } from '../icons/person'
import { TruckIcon } from '../icons/truck'
import { StarIcon } from '../icons/star'
import { IconProps } from '../icons/interface'
import { PencilIcon } from '../icons/pencil'

export type IconType = 'calendar' | 'person' | 'truck' | 'star' | 'pencil'

const iconByString: IconByString = {
  'calendar': CalendarIcon,
  'person': PersonIcon,
  'truck': TruckIcon,
  'star': StarIcon,
  'pencil': PencilIcon,
}

export type IconByString = {
  [key in IconType]: React.FC<IconProps>
}

export interface SvgIconProps {
  icon?: IconType
  className?: string
}

export const SvgIcon: React.FC<SvgIconProps> = ({ icon, ...rest }) => {
  if (!icon) return null

  const IconRenderByType = iconByString[icon]

  if (IconRenderByType === undefined) {
    return null
  }

  return <IconRenderByType {...rest} />
}
