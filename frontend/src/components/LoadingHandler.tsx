import { FC, ReactNode } from 'react'
import Error from '../components/Error/Error.tsx'
import Loading from '../components/Loading/Loading.tsx'

interface LoadingHandlerProps {
  isLoading: boolean
  isError: boolean
  children: ReactNode
}

const LoadingHandler: FC<LoadingHandlerProps> = ({
  isLoading,
  isError,
  children,
}) => {
  return <>{isLoading ? <Loading /> : isError ? <Error /> : children}</>
}

export default LoadingHandler
