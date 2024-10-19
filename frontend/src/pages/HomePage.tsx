import { useGetVehiclesQuery } from '../api/vehicleApi.ts'

const HomePage = () => {
  const { data, isLoading } = useGetVehiclesQuery()
  return (
    <div>{isLoading ? 'loading...' : <div>{JSON.stringify(data)}</div>}</div>
  )
}

export default HomePage
