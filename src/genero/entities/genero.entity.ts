import { CreateJogoDto } from 'src/jogo/dto/create-jogo.dto';

export class Genero {
  id?: number;
  nome: string;
  jogos?: CreateJogoDto[];
}
