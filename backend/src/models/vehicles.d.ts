export type IVehicleResponse = IVehicleErrorResponse | IVehicleSuccessResponse

export interface IVehicleData {
  is_premium: boolean
  tank_id: number
  tier: number
  name: string
  nation: string
  type: string
  image: string
}

export interface IVehicleResponseData {
  is_premium: boolean
  tank_id: number
  tier: number
  name: string
  nation: string
  type: string
  images: {
    small_icon: string
    contour_icon: string
    big_icon: string
  }
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
