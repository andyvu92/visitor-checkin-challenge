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

export const visitDurationOptions: FormOptionProps[] = [
  {
    name: '30 mins',
    value: '30-mins',
  },
  {
    name: '60 mins',
    value: '60-mins',
  },
  {
    name: '90 mins',
    value: '90-mins',
  },
  {
    name: '120 mins',
    value: '120-mins',
  },
]

export const visitEntryOptions: FormOptionProps[] = [
  {
    name: 'Entry A',
    value: 'entry-a',
  },
  {
    name: 'Entry B',
    value: 'entry-b',
  },
  {
    name: 'Entry C',
    value: 'entry-c',
  },
]

export const meetingPointLevelOptions: FormOptionProps[] = [
  {
    name: 'Ground',
    value: 'ground',
  },
  {
    name: 'Level 1',
    value: 'level-1',
  },
  {
    name: 'Level 2',
    value: 'level-2',
  },
  {
    name: 'Level 3',
    value: 'level-3',
  },
  {
    name: 'Level 4',
    value: 'level-4',
  },
]

export const meetingPointStandOptions: FormOptionProps[] = [
  {
    name: 'Stand A',
    value: 'stand-a',
  },
  {
    name: 'Stand B',
    value: 'stand-b',
  },
  {
    name: 'Stand C',
    value: 'stand-c',
  },
  {
    name: 'Stand D',
    value: 'stand-d',
  },
]

export const meetingPointRoomOptions: FormOptionProps[] = [
  {
    name: 'Room A',
    value: 'room-a',
  },
  {
    name: 'Room B',
    value: 'room-b',
  },
  {
    name: 'Room C',
    value: 'room-c',
  },
  {
    name: 'Room D',
    value: 'room-d',
  },
]
