import { WotApi } from '../../services/wotApi'
import ApiError from '../../exceptions/api-error'

const wotApi = new WotApi()

export class TankService {
  async getList() {
    try {
      return await wotApi.getVehicles()
    } catch (err) {
      throw ApiError.BadRequest('Error', [err])
    }
  }
}
