import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import ApiError from '../exceptions/api-error'

export const inputValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const error = validationResult(req)

  if (error.array().length) {
    res.status(400).json(new ApiError(400, 'Validation error', error.array()))
  } else {
    next()
  }
}
