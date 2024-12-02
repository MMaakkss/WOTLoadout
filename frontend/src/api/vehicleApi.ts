import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IVehicle } from '../types/vehicle.ts'

const apiUrl = import.meta.env.VITE_API_URL

export const vehicleApi = createApi({
  reducerPath: 'vehicleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/vehicle`,
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query<IVehicle[], void>({
      query: () => '/getList',
    }),
  }),
})

export const { useGetVehiclesQuery } = vehicleApi
