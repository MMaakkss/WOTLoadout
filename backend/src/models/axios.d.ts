export type IWotResponse = IWotErrorResponse | IWotSuccessResponse

export interface IWotData {
  is_wheeled: boolean
  tank_id: number
}

interface IWotMeta {
  count: number
  page_total: number
  total: number
  limit: number
  page: number
}

interface IWotSuccessResponse {
  status: string
  data: { [key: string]: IWotData }
  meta: IWotMeta
  error?: never
}

interface IWotErrorResponse {
  status: string
  error: IWotError
  data?: never
  meta?: never
}

interface IWotError {
  message: string
  value: string
  code: number
}
