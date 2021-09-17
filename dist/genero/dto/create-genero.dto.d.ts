import { CreateJogoDto } from 'src/jogo/dto/create-jogo.dto';
import { Genero } from '../entities/genero.entity';
export declare class CreateGeneroDto implements Genero {
    nome: string;
    jogos?: CreateJogoDto[];
    jogosIds: number[];
}
