import { wotAxiosInstance } from '../config/axios'
import { IWotSuccessResponse } from '../models/axios'

export class WotApi {
  async getVehicles(limit: number = 25, page_no: number = 1) {
    const res = await wotAxiosInstance.get<
      IWotSuccessResponse,
      IWotSuccessResponse
    >('/vehicles/', {
      params: {
        limit,
        page_no,
      },
    })

    return res.data
  }
}
