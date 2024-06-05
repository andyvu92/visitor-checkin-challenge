type GetRandomString = () => string

export const getRandomString: GetRandomString = () => {
  const randomNumber = Math.floor(Math.random() * 999999)
  const randomString = (Math.random() + 1).toString(36).substring(5)
  return `${randomNumber}-${randomString}`
}
