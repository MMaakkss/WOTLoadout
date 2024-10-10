import { WotApi } from '../../services/wotApi'
import ApiError from '../../exceptions/api-error'
import WotResponse from '../../utils/wotResponse'

const wotApi = new WotApi()

export default class VehicleService {
  static async getList() {
    try {
      const response = await wotApi.getVehicles()

      return WotResponse.formatToArray(response.data)
    } catch (err) {
      throw ApiError.BadRequest('Error', [err])
    }
  }
}
