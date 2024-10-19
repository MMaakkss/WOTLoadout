import { User } from '../user'

export interface IAuthContext {
  currentUser: User | null
  isLoading: boolean
  handleLogin: () => Promise<void>
  handleLogout: () => Promise<void>
}
