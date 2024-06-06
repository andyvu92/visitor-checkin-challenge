import { SvgIcon } from '../atoms/svg-icon'

interface NotificationProps {
  heading?: string
  message?: string
}

// increasemental development
// assume success notification as default
export const Notification: React.FC<NotificationProps> = ({
  heading,
  message,
}) =>
  !!heading || !!message ? (
    <div className="animate-fade max-w-notification ring-success bg-success ring-3 flex w-full gap-6 rounded-lg bg-opacity-20 p-8 ring-inset">
      <SvgIcon icon="checked-circle" status="success" withWrapping="square" />
      <div className="flex flex-col gap-2">
        {!!heading && (
          <span className="text-success-dark text-lg">{heading}</span>
        )}
        {!!message && <span className="text-grey text-base">{message}</span>}
      </div>
    </div>
  ) : null
