import { Request, Response } from 'express';
import { tarefaService } from '../services/TarefaService';
export class TarefaController {
  async create(req: Request, res: Response) {
    const { nome, conteudo, autor } = req.body;
    const tarefa = await tarefaService.create({ nome, conteudo, autor });
    return res.status(201).json(tarefa);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, conteudo, autor } = req.body;
    const idNumber = Number(id);
    const tarefa = await tarefaService.update({
      id: idNumber,
      nome,
      conteudo,
      autor,
    });
    return res.json(tarefa);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await tarefaService.delete(Number(id));
    return res.status(204).json({ mensage: 'Tarefa deletada com sucesso.' });
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const tarefa = await tarefaService.findOneById(Number(id));
    return res.json(tarefa);
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const tarefas = await tarefaService.findAll();
    return res.json(tarefas);
  }
}
