import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/Login.tsx'
import HomePage from './pages/HomePage.tsx'
import AuthProvied from './components/AuthProvider.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: 'signin',
    element: <Login />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvied>
      <RouterProvider router={router} />
    </AuthProvied>
  </StrictMode>,
)
