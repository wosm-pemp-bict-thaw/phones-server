import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'express-ts-server' },
  transports: [new winston.transports.Console({ format: winston.format.simple() })],
});

(logger as any).stream = { // FIXME any type
  write: (message: any) => {
    logger.info(String(message.trim()));
  },
};
