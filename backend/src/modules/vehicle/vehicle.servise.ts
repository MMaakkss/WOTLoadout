import WotApi from '../../services/wotApi'
import ApiError from '../../exceptions/api-error'
import WotResponse from '../../utils/wotResponse'

export default class VehicleService {
  static async getList() {
    try {
      const response = await WotApi.getVehicles()

      return WotResponse.convertToArray(response.data)
    } catch (err) {
      throw ApiError.BadRequest('Error', [err])
    }
  }
}
