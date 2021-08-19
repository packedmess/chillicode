import path from 'path';
import {createLogger, format, transports} from 'winston';
import {isDev} from '@/utils/env';

const {combine, timestamp, printf} = format;
const {File, Console} = transports;

const logFormat = printf(({level, message, timestamp}) => {
  return `${timestamp} [${level}]:` + '\n' + message + '\n';
});

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), logFormat),
  transports: [
    new File({filename: path.resolve(process.cwd(), 'storage/logs/error.log'), level: 'error'}),
    new File({filename: path.resolve(process.cwd(), 'storage/logs/info.log')}),
  ],
});

// If we're not in production then log to the `console`
if (isDev()) {
  logger.add(new Console());
}

export default logger;
