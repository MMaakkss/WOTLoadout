import { body } from 'express-validator'

const passwordValidator = body('password').isLength({ min: 6, max: 24 })
const emailValidator = body('email').isEmail()
const nicknameValidator = body('nickname').trim().isLength({ min: 3, max: 24 })

export const loginValidator = [passwordValidator, emailValidator]
export const registerValidator = [
  passwordValidator,
  emailValidator,
  nicknameValidator,
]
