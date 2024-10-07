import { WotApi } from '../../services/wotApi'

const wotApi = new WotApi()

export class TankService {
  async getList() {
    const data = await wotApi.getVehicles()

    return data.data
  }
}
