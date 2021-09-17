import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { CreateJogoDto } from 'src/jogo/dto/create-jogo.dto';
import { Genero } from '../entities/genero.entity';

export class CreateGeneroDto implements Genero {
  @IsString()
  @IsNotEmpty()
  nome: string;
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateJogoDto)
  jogos?: CreateJogoDto[];
  @IsOptional()
  @IsNumber({}, { each: true })
  jogosIds: number[];
}
