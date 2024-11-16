import { PropsWithChildren, useEffect, useState } from 'react'
import { User, UserRole } from '../types/user'
import { AuthContext } from '../context/authContext'

export default function AuthProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async () => {
    setIsLoading(true)

    try {
      const response: User = {
        role: UserRole.USER,
        email: '12312',
        id: 'dsadas',
        nickname: 'Anatoliy',
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
