import ProtectedRoute from '@/components/ProtectedRoute'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import HomePage from '@/pages/HomePage'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { UserRole } from '@/types/user'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
            <HomePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])
