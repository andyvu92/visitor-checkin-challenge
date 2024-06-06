import { FormDataPostResponse } from '@/components/global/interface/form-api-data'

export const POST = async (request: Request) => {
  const data = await request.json()
  console.log(data)

  // expect tokenSession from data
  // create visit record
  // handle necessary callbacks
  // assume that all requests will be success
  return Response.json({
    success: true,
  } as FormDataPostResponse)
}
