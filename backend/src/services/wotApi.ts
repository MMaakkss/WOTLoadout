import { axiosInstance } from '../config/axios'

const BASE_URL = process.env.WOT_URL || ''

export class WotApi {
  async getVehicles(limit: number = 25, page_no: number = 1) {
    const res = await axiosInstance.get(BASE_URL + '/vehicles/', {
      params: {
        limit,
        page_no
      }
    })

    return res.data
  }
}