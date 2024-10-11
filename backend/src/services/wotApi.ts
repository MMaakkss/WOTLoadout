import { wotAxiosInstance } from '../config/axios'
import { IVehicleSuccessResponse } from '../models/vehicles'

export default class WotApi {
  static async getVehicles(limit: number = 25, page_no: number = 1) {
    const res = await wotAxiosInstance.get<IVehicleSuccessResponse>(
      '/vehicles/',
      {
        params: {
          limit,
          page_no,
        },
      },
    )

    return res.data
  }
}
