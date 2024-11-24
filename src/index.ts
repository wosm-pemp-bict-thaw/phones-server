import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import config from 'config';
import { logger } from './logger';
import apiRouter from './routes/api/v1';
import { setupSwagger } from './swagger';

const isProduction = process.env.NODE_ENV === 'production';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
// app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      scriptSrcAttr: ["'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  })
);
app.use(morgan('combined', { stream: logger.stream } as any)); // FIXME any type

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader?.split(' ')[1];
  
    if (!bearerToken) {
      console.log('HELLOo');
      return res.status(401).json({ error: 'Unauthorized: Token not provided' });
    }
    if (bearerToken !== process.env.AUTH_TOKEN) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
  
    next();
};
  

setupSwagger(app);

// Serve Angular static files
const angularDistPath = isProduction
  ? path.join(__dirname, 'client')
  : path.join(__dirname, '..', '..', 'client', 'dist', 'client', 'browser');

console.log(`Running in ${isProduction ? 'production' : 'development'} mode`);
console.log('Serving Angular static files from:', angularDistPath);

app.use(express.static(angularDistPath));

// @ts-ignore
// app.use('/api/v1', authenticate, apiRouter);
app.use('/api/v1', apiRouter);

// // Serve Angular static files
// const angularDistPath = path.join(__dirname, '..', '..', 'client', 'dist', 'client');
// app.use(express.static(angularDistPath));

// Serve Angular application for all unmatched routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
});

// app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
//   logger.error(err);
//   res.status(500).send('Internal Server Error');
// });

const PORT = config.get('port') || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
