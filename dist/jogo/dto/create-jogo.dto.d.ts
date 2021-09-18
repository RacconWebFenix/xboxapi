import { CreateGeneroDto } from 'src/genero/dto/create-genero.dto';
import { CreatePerfiDto } from 'src/perfis/dto/create-perfi.dto';
import { Jogo } from '../entities/jogo.entity';
export declare class CreateJogoDto implements Jogo {
    titulo: string;
    capa: string;
    descricao: string;
    ano: string;
    IMDB: number;
    trailer: string;
    gameplay: string;
    perfis?: CreatePerfiDto[];
    perfisIds: number[];
    generos?: CreateGeneroDto[];
    generosIds: number[];
}
