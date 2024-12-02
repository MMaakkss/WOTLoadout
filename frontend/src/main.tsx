import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import AppWrapper from './components/AppWrapper.tsx'
import AuthProvider from './components/AuthProvider.tsx'
import theme from './theme/theme.tsx'
import { router } from './routes/index.tsx'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
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
