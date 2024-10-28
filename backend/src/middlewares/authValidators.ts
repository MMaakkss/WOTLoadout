import { body } from 'express-validator'

const passwordValidator = body('password')
  .isLength({ min: 6, max: 24 })
  .withMessage('Password must be from 6 to 24 characters')
const emailValidator = body('email').isEmail().withMessage('Invalid email')
const nicknameValidator = body('nickname')
  .trim()
  .isLength({ min: 3, max: 24 })
  .withMessage('Nickname must be from 3 to 24 characters')

export const loginValidator = [passwordValidator, emailValidator]
export const registerValidator = [
  passwordValidator,
  emailValidator,
  nicknameValidator,
]
