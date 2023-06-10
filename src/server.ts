import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, errorlogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});

//  declear varriable to server
let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`database connect succesfully`);
    // leastining port
    server = app.listen(config.port, () => {
      logger.info(`Applicaation Listening Port ${config.port}`);
    });
  } catch (err) {
    errorlogger.error('its an error', err);
  }

  process.on('unhandledRejection', error => {
    console.log(
      'unhendle rejection! we are rejectyion our server... sthank you'
    );
    if (server) {
      server.close(() => {
        errorlogger.error(error);
      });
    }
    process.exit(1);
  });
}

bootstrap();

process.on('SIGNAL', () => {
  logger.info('signal is resived');
  if (server) {
    server.close();
  }
});

// console.log('X')
