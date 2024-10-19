import { createContext } from 'react'
import { IAuthContext } from '../types/context/authContext'

export const AuthContext = createContext<IAuthContext | undefined>(undefined)
