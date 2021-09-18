import { CreateJogoDto } from 'src/jogo/dto/create-jogo.dto';

export class Perfi {
  id?: number;
  titulo: string;
  imagemUrl: string;
  jogos?: CreateJogoDto[];
}
