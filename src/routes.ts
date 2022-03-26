import { Router } from 'express';

import { TarefaController } from './app/controllers/HomeController';

const tarefaController = new TarefaController();

const routes = Router();

routes.get('/', tarefaController.index);

export default routes;
