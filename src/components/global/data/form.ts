import { FormOptionProps } from '@/components/molecules/form-item/interface'
import { VisitorTypeOption } from '@/components/molecules/form-item/visitor-type-select'

export const visitorTypeOptions: VisitorTypeOption[] = [
  {
    name: 'Visitor',
    value: 'visitor',
    icon: 'person',
  },
  {
    name: 'Delivery',
    value: 'delivery',
    icon: 'truck',
  },
  {
    name: 'Function',
    value: 'function',
    icon: 'star',
  },
]

export const visitReasonOptions: FormOptionProps[] = [
  {
    name: 'Reason A',
    value: 'reason-a',
  },
  {
    name: 'Reason B',
    value: 'reason-b',
  },
  {
    name: 'Reason C',
    value: 'reason-c',
  },
]

export const visitDurationOptions: string[] = [
  '30 mins',
  '60 mins',
  '90 mins',
  '120 mins',
]

export const visitEntryOptions: string[] = ['Entry A', 'Entry B', 'Entry C']

export const meetingPointLevelOptions: string[] = [
  'Ground',
  'Level 1',
  'Level 2',
  'Level 3',
  'Level 4',
]

export const meetingPointStandOptions: string[] = [
  'Stand A',
  'Stand B',
  'Stand C',
  'Stand D',
]

export const meetingPointRoomOptions: string[] = [
  'Room A',
  'Room B',
  'Room C',
  'Room D',
]
