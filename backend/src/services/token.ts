import 'dotenv/config'
import jwt from 'jsonwebtoken'
import prisma from '../../prisma/prisma'

interface TokenPayload {
  id: string
  email: string
}

export default class TokenService {
  private static generateToken(
    payload: TokenPayload,
    secret: string,
    expiresIn: string,
  ) {
    return jwt.sign(payload, secret, { expiresIn })
  }

  static generateTokens(id: string, email: string) {
    const accessToken = this.generateToken(
      { id, email },
      process.env.JWT_ACCESS_SECRET || '',
      '30m',
    )

    const refreshToken = this.generateToken(
      { id, email },
      process.env.JWT_REFRESH_SECRET || '',
      '7d',
    )

    return {
      accessToken,
      refreshToken,
    }
  }
  static validateAccessToken(token: string) {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET as string)
  }
  static validateRefreshToken(token: string) {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET as string)
  }
  static async saveToken(userId: string, token: string) {
    const tokenData = await prisma.refreshToken.upsert({
      where: {
        userId,
      },
      create: {
        userId,
        token,
      },
      update: {
        token,
      },
    })

    return tokenData
  }
  static removeToken(userId: string) {
    return prisma.refreshToken.delete({
      where: {
        userId,
      },
    })
  }
  static findToken(userId: string) {
    return prisma.refreshToken.delete({
      where: {
        userId,
      },
    })
  }
}
