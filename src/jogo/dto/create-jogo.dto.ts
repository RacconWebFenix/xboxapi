import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreateGeneroDto } from 'src/genero/dto/create-genero.dto';
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
  //conecao com perfil
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePerfiDto)
  perfis?: CreatePerfiDto[];
  @IsOptional()
  @IsNumber({}, { each: true })
  perfisIds: number[];
  //conexao com generos
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateGeneroDto)
  generos?: CreateGeneroDto[];
  @IsOptional()
  @IsNumber({}, { each: true })
  generosIds: number[];
}
