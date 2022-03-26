import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
  @Column()
  isConcluida: boolean;

  constructor(id: number, descricao: string, isConcluida: boolean) {
    this.id = id;
    this.descricao = descricao;
    this.isConcluida = isConcluida;
  }
}
