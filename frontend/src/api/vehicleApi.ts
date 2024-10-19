import { api } from './api.ts'
import { IVehicle } from '../types/vehicle.ts'

export const vehicleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query<IVehicle[], void>({
      query: () => '/getList',
    }),
  }),
})

export const { useGetVehiclesQuery } = vehicleApi
