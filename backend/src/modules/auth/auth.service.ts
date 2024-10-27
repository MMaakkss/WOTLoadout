import ApiError from '../../exceptions/api-error'
import prisma from '../../../prisma/prisma'
import bcrypt from 'bcrypt'
import TokenService from '../../services/token'

interface IRegisterData {
  email: string
  password: string
  nickname: string
}

export default class AuthService {
  static async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      throw ApiError.BadRequest('User not found')
    }

    if (!user.hashedPassword) {
      throw ApiError.UnauthorizedError('No hash password')
    }

    const verified = await bcrypt.compare(password, user.hashedPassword)

    if (!verified) {
      throw ApiError.UnauthorizedError('Password is incorrect')
    }

    const tokens = TokenService.generateTokens(user.id, user.email)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { hashedPassword, ...userData } = user

    return {
      userData,
      ...tokens,
    }
  }
  static async register({ nickname, email, password }: IRegisterData) {
    const userExists = await prisma.user.findFirst({ where: { email } })

    if (userExists) {
      throw ApiError.BadRequest('User already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 5)

    const newUser = await prisma.user.create({
      data: {
        nickname,
        email,
        hashedPassword,
      },
    })

    if (newUser) {
      const tokens = TokenService.generateTokens(newUser.id, newUser.email)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { hashedPassword, ...userData } = newUser

      return {
        userData,
        ...tokens,
      }
    }

    throw new ApiError(500, 'Error registering user')
  }
}
