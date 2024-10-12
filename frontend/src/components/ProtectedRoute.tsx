import { PropsWithChildren } from 'react'
import { useAuth } from './AuthProvider'
import { User } from '../types/user'

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: User['role'][]
}

export default function ProtectedRoute({
  allowedRoles,
  children,
}: ProtectedRouteProps) {
  const { currentUser } = useAuth()

  if (
    !currentUser ||
    (allowedRoles && !allowedRoles.includes(currentUser.role))
  ) {
    return <div>Permission denied</div>
  }

  return children
}
