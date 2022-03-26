import 'reflect-metadata';
import express, { ErrorRequestHandler, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import './app/database/connection';
import swaggerUi from 'swagger-ui-express';

import routes from './routes';
import { AppError } from './app/erros/AppError';
import swaggerDoc from './app/doc/swagger.json';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((error: ErrorRequestHandler, req: Request, res: Response) => {
  if (error && error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `🔥 Server started at http://localhost:${process.env.PORT || 3000}`
  )
);
