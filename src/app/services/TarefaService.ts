import { getRepository } from 'typeorm';
import { Tarefa } from '../models/Tarefa';

type RequestTarefa = {
  id?: number;
  nome: string | undefined;
  conteudo: string | undefined;
  autor: string | undefined;
};

class TarefaService {
  async create({ nome, conteudo, autor }: RequestTarefa): Promise<Tarefa> {
    this.verifyParamsEmpty({ nome, conteudo, autor });
    const tarefa = await getRepository(Tarefa).save({
      nome,
      conteudo,
      autor,
    });
    return tarefa;
  }
  async update({ id, nome, conteudo, autor }: RequestTarefa): Promise<Tarefa> {
    const tarefa = await getRepository(Tarefa).findOne({
      where: {
        id,
      },
    });

    if (!tarefa) {
      throw new Error('Não encontramos Tarefa com esse id.');
    }

    this.verifyParamsEmpty({ nome, conteudo, autor });

    if (nome) {
      tarefa.nome = nome;
    }

    if (conteudo) {
      tarefa.conteudo = conteudo;
    }

    if (autor) {
      tarefa.autor = autor;
    }

    await getRepository(Tarefa).update({ id }, tarefa);

    return tarefa;
  }

  async delete(id: number): Promise<void> {
    const tarefa = await getRepository(Tarefa).findOne({
      where: {
        id,
      },
    });
    await getRepository(Tarefa).delete(id);
  }
  async findOneById(id: number): Promise<Tarefa> {
    const tarefa = await getRepository(Tarefa).findOne({
      where: {
        id,
      },
    });

    if (!tarefa) {
      throw new Error('Não encontramos Tarefa com esse id.');
    }

    return tarefa;
  }
  async findAll(): Promise<Tarefa[]> {
    const tarefas = await getRepository(Tarefa).find({
      order: { id: 'ASC' },
    });
    return tarefas;
  }

  verifyParamsEmpty({ nome, conteudo, autor }: RequestTarefa) {
    const paramsEmpty = !(nome && conteudo && autor);

    if (paramsEmpty) {
      throw new Error('Parâmetros vazios. Por favor, tente novamente.');
    }
  }
}

const tarefaService = new TarefaService();

export { tarefaService };
