'use client'
import { useRouter } from 'next/navigation'
import { IconType, SvgIcon } from './svg-icon'

interface ButtonProps {
  label: string
  icon?: IconType
  routePath?: string
}

export const Button: React.FC<ButtonProps> = ({ label, icon, routePath }) => {
  const route = useRouter()

  if (!label) return null

  const onClickHandler = () => {
    if (!!routePath) {
      route.push(routePath)
    }
  }

  return (
    <button
      onClick={onClickHandler}
      className="text-secondary group flex items-center gap-1"
    >
      <SvgIcon icon={icon} />
      <span className="text-button font-semibold group-hover:underline">
        {label}
      </span>
    </button>
  )
}
