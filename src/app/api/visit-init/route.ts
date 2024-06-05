import { getRandomString } from '@/components/helpers/utils'

export const config = {
  api: {
    bodyParser: false,
  },
}

export const POST = async (request: Request) => {
  const data = await request.formData()
  const newSessionToken = getRandomString()
  console.log(data)

  // create new user session and return session token
  // assume that all requests will be success
  return Response.json({
    success: true,
    token: newSessionToken,
  })
}
