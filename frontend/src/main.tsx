import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/Login.tsx'
import HomePage from './pages/HomePage.tsx'
import AuthProvider from './components/AuthProvider.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import BaseLayout from './layouts/BaseLayout/BaseLayout.tsx'
import AppWrapper from './components/AppWrapper.tsx'

import './styles/main.scss'

import { store } from './store/store.ts'

const router = createBrowserRouter([
  {
    element: <BaseLayout/>,
    children: [
      {
        path: '/',
        element: (
            <ProtectedRoute allowedRoles={['admin']}>
              <HomePage />
            </ProtectedRoute>
        ),
      },
    ]
  },
  {
    path: '/signin',
    element: <Login />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <AuthProvider>
          <AppWrapper>
            <RouterProvider router={router} />
          </AppWrapper>
        </AuthProvider>
      </Provider>
    </ChakraProvider>
  </StrictMode>,
)
