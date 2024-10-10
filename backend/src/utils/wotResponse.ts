import {
  IVehicleData,
  IVehicleResponseObject,
  IVehicleResponseData,
} from '../models/vehicles'

export default class WotResponse {
  static formatToArray(res: IVehicleResponseObject): IVehicleData[] {
    const array: IVehicleData[] = []

    for (const obj in res) {
      const reducedObj = this.reduceObject(res[obj])
      array.push(reducedObj)
    }

    return array
  }

  static reduceObject(data: IVehicleResponseData): IVehicleData {
    const { is_wheeled, tank_id } = data

    return {
      is_wheeled,
      tank_id,
    }
  }
}
