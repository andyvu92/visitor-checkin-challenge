import { FormOptionProps } from '../molecules/form-item/interface'

type GetRandomString = () => string

export const getRandomString: GetRandomString = () => {
  const randomNumber = Math.floor(Math.random() * 999999)
  const randomString = (Math.random() + 1).toString(36).substring(5)
  return `${randomNumber}-${randomString}`
}

export const hyphenToCamelCase = (text: string) =>
  text.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })

type StringArrToFormOptions = (stringArr: string[]) => FormOptionProps[]
export const stringArrToFormOptions: StringArrToFormOptions = (stringArr) =>
  !!stringArr?.length
    ? stringArr.reduce((prev, current) => {
        const option: FormOptionProps = {
          name: current,
          value: current,
        }

        return [...prev, option]
      }, [] as FormOptionProps[])
    : []
