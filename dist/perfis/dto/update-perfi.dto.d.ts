import { CreateJogoDto } from 'src/jogo/dto/create-jogo.dto';
import { CreatePerfiDto } from './create-perfi.dto';
declare const UpdatePerfiDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePerfiDto>>;
export declare class UpdatePerfiDto extends UpdatePerfiDto_base {
    jogos?: CreateJogoDto[];
    jogosIds: number[];
    jogosDisconnectIds: number[];
}
export {};
