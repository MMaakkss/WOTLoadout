import {
  IVehicleData,
  IVehicleResponseObject,
  IVehicleResponseData,
} from '../models/vehicles'

export default class WotResponse {
  static convertToArray(res: IVehicleResponseObject): IVehicleData[] {
    const array: IVehicleData[] = []

    for (const obj in res) {
      const reducedObj = this.reduceObject(res[obj])
      array.push(reducedObj)
    }

    return array
  }

  static reduceObject(data: IVehicleResponseData): IVehicleData {
    const { tank_id, name, tier, nation, type, images, is_premium } = data

    return {
      name,
      tier,
      nation,
      type,
      tank_id,
      is_premium,
      image: images.big_icon,
    }
  }
}
