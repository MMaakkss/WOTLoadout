import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import ApiError from '../exceptions/api-error'

export const inputValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    next(ApiError.BadRequest('Validation error', errors.array()))
  } else {
    next()
  }
}
