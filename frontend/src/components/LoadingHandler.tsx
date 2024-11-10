import { ReactNode } from 'react'
import Error from '../components/Error/Error.tsx'
import Loading from '../components/Loading/Loading.tsx'

interface ILoadingHandlerProps {
  isLoading: boolean
  isError: boolean
  children: ReactNode
}

const LoadingHandler = ({
  isLoading,
  isError,
  children,
}: ILoadingHandlerProps) => {
  return <>{isLoading ? <Loading /> : isError ? <Error /> : children}</>
}

export default LoadingHandler
