import ApiError from '../exceptions/api-error'
import { NextFunction, Request, Response } from 'express'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  console.log(err)

  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message, errors: err.errors })
  }

  res.status(500).json({ message: `Unexpected error. ${err}` })
}
