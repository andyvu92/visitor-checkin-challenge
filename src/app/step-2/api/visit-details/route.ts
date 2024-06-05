import { FormDataPostResponse } from '@/components/global/interface/form-api-data'
import { hyphenToCamelCase } from '@/components/helpers/utils'

export const config = {
  api: {
    bodyParser: false,
  },
}

export const POST = async (request: Request) => {
  const data = await request.formData()
  console.log(data)

  const returnData = Object.keys(Object.fromEntries(data)).reduce(
    (prev, key) => {
      const keyVal = data.get(key)

      if (!!keyVal) {
        prev[hyphenToCamelCase(key)] = keyVal
      }

      return prev
    },
    {} as Record<string, FormDataEntryValue>,
  )

  // exect tokenSession from data
  // save data
  // assume that all requests will be success
  return Response.json({
    success: true,
    data: returnData,
  } as FormDataPostResponse)
}
