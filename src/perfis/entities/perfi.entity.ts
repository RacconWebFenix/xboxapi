import { UpdatePerfiDto } from '../dto/update-perfi.dto';

export class Perfi {
  id?: number;
  titulo: string;
  imagemUrl: string;
  jogos?: UpdatePerfiDto[];
}
