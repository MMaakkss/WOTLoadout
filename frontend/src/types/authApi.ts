import { User } from './user'

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse extends User {}

export interface IRegisterRequest {
  email: string
  nickname: string
  password: string
}

export interface IRegisterResponse extends User {}
