import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreatePerfiDto } from 'src/perfis/dto/create-perfi.dto';
import { Jogo } from '../entities/jogo.entity';

export class CreateJogoDto implements Jogo {
  @IsString()
  @IsNotEmpty()
  titulo: string;
  @IsUrl({
    require_protocol: true,
  })
  capa: string;
  @IsString()
  @IsNotEmpty()
  descricao: string;
  @IsString()
  @IsNotEmpty()
  ano: string;
  @IsNumber()
  @IsNotEmpty()
  IMDB: number;
  @IsUrl({
    require_protocol: true,
  })
  trailer: string;
  @IsUrl({
    require_protocol: true,
  })
  gameplay: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePerfiDto)
  perfis?: CreatePerfiDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  perfisIds: number[];
}
