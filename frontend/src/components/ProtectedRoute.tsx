import { PropsWithChildren } from 'react'
import { User } from '../types/user'
import { useAuth } from '../hooks/useAuth'

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
