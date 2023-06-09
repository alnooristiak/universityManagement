import { ErrorRequestHandler } from 'express'
import IGenericErrorMessage from '../../interfaces/error'
import config from '../../config'
import ApiError from '../../errors/ApiError'
import handleValidationError from '../../errors/handleValidationError'
import { errorlogger } from '../../shared/logger'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // res.status(400).json({err:err})

  // eslint-disable-next-line no-unused-expressions
  config.env === 'development'
    ? console.log('gloval error Hendler', error)
    : errorlogger.error('gloval error Hendler', error)

  let statusCode = 500
  let message = 'Something went wrong!'
  let errorMessages: IGenericErrorMessage[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
