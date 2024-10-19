import { PropsWithChildren, useEffect, useState } from 'react'
import { User } from '../types/user'
import { AuthContext } from '../context/authContext'

export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return 'ss'
}

export default function AuthProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async () => {
    setIsLoading(true)

    try {
      const response = {
        role: 'admin',
        name: 'Anatoliy',
      }

      setCurrentUser(response)
    } catch {
      setCurrentUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      //response to back
    } finally {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    handleLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
