import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorlogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`database connect succesfully`)
    // leastining port
    app.listen(config.port, () => {
      logger.info(`Applicaation Listening Port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('its an error', err)
  }
}

bootstrap()
