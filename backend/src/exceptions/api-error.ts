export default class ApiError extends Error {
  status: number
  errors: Array<{ [key: string]: unknown }>

  constructor(
    status: number,
    message: string,
    errors: Array<{ [key: string]: unknown }> = [],
  ) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError(message: string = '') {
    return new ApiError(401, 'User not authenticated' + message)
  }

  static BadRequest(
    message: string,
    errors: Array<{ [key: string]: unknown }> = [],
  ) {
    return new ApiError(400, message, errors)
  }
}
