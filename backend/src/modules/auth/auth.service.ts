import ApiError from '../../exceptions/api-error'
import prisma from '../../../prisma/prisma'
import bcrypt from 'bcrypt'
import TokenService from '../../services/token'
import { removeFields } from '../../utils/helpers'

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

    const userData = removeFields(user, ['hashedPassword'])

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

      const userData = removeFields(newUser, ['hashedPassword'])

      return {
        userData,
        ...tokens,
      }
    }

    throw new ApiError(500, 'Error registering user')
  }
}
