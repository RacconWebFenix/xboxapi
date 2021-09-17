import { CreatePerfiDto } from 'src/perfis/dto/create-perfi.dto';

export class Jogo {
  id?: number;
  titulo: string;
  capa: string;
  descricao: string;
  ano: string;
  IMDB: number;
  trailer: string;
  gameplay: string;
  perfis?: CreatePerfiDto[];
}
