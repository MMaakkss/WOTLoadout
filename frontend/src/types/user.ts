export type User = {
  id: string
  email: string
  nickname: string
  role: UserRole
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
