import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './pages/Login.tsx'
import HomePage from './pages/HomePage.tsx'
import AuthProvider from './components/AuthProvider.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'

import { store } from './store/store.ts'

import './index.css'

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
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
