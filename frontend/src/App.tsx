import { PropsWithChildren } from 'react'
import './App.css'
import { useAuth } from './hooks/useAuth'

function App({ children }: PropsWithChildren) {
  const { isLoading } = useAuth()

  return (
    <>
      <h1>Wrapper</h1>
      {isLoading ? <>Loading....</> : <>{children}</>}
    </>
  )
}

export default App
