import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { User } from '../types/user'

type AuthContext = {
  currentUser: User | null
  isLoading: boolean
  handleLogin: () => Promise<void>
  handleLogout: () => Promise<void>
}

const AuthContext = createContext<AuthContext | undefined>(undefined)

export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return 'ss'
}

export default function AuthProvied({ children }: PropsWithChildren) {
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

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used inside of a AuthProvider')
  }

  return context
}
