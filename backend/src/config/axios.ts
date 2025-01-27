import axios from 'axios'
import { IVehicleResponse } from '../models/vehicles'

const WOT_APP_ID = process.env.WOT_APP_ID
const BASE_WOT_URL = process.env.WOT_URL || ''

export const wotAxiosInstance = axios.create({
  baseURL: BASE_WOT_URL,
  headers: {
    Accept: 'application/json',
  },
  params: {
    application_id: WOT_APP_ID,
  },
  transformResponse: (data: string) => {
    const parsedData: IVehicleResponse = JSON.parse(data)

    if (parsedData.status === 'error' && parsedData.error) {
      throw {
        message: `Axios error: ${parsedData.error.message}`,
        code: parsedData.error.code,
        path: parsedData.error.value,
      }
    }

    return parsedData
  },
})
