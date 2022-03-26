import { Request, Response } from 'express';

export class TarefaController {
  index(req: Request, res: Response) {
    return res.send('Hello World!');
  }
  create(req: Request, res: Response) {}
  update(req: Request, res: Response) {}
  delete(req: Request, res: Response) {}
  findOne(req: Request, res: Response) {}
  findAll(req: Request, res: Response) {}
}
