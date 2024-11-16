import { PropsWithChildren } from 'react'
import { useAuth } from '../hooks/useAuth.ts'

function AppWrapper({ children }: PropsWithChildren) {
  const { isLoading } = useAuth()

  return <>{isLoading ? <>Loading....</> : <>{children}</>}</>
}

export default AppWrapper
