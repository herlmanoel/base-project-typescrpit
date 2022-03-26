import { Router } from 'express';
import { resolver } from './app/adapters/resolver';

import { TarefaController } from './app/controllers/TarefaController';

const tarefaController = new TarefaController();

const routes = Router();

routes.post('/tasks', resolver(tarefaController.create));
routes.put('/tasks/:id', resolver(tarefaController.update));
routes.get('/tasks/:id', resolver(tarefaController.findOne));
routes.get('/tasks', resolver(tarefaController.findAll));
routes.delete('/tasks/:id', resolver(tarefaController.delete));

export default routes;
