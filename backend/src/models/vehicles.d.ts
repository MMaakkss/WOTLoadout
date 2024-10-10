export type IVehicleResponse = IVehicleErrorResponse | IVehicleSuccessResponse

export interface IVehicleData {
  is_wheeled: boolean
  tank_id: number
}

export interface IVehicleResponseData {
  is_wheeled: boolean
  tank_id: number
  engines: number[]
  radios: number[]
}

export interface IVehicleResMeta {
  count: number
  page_total: number
  total: number
  limit: number
  page: number
}

export interface IVehicleSuccessResponse {
  status: string
  data: IVehicleResponseObject
  meta: IVehicleResMeta
  error?: never
}

export interface IVehicleResponseObject {
  [key: string]: IVehicleResponseData
}

export interface IVehicleErrorResponse {
  status: string
  error: IVehicleError
  data?: never
  meta?: never
}

export interface IVehicleError {
  message: string
  value: string
  code: number
}
