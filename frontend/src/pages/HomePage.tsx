import { useGetVehiclesQuery } from '../api/vehicleApi'
import LoadingHandler from '../components/LoadingHandler'

const HomePage = () => {
  const { data, isLoading, isError } = useGetVehiclesQuery()

  return (
    <>
      <LoadingHandler isLoading={isLoading} isError={isError}>
        <div>{JSON.stringify(data)}</div>
      </LoadingHandler>
    </>
  )
}

export default HomePage
