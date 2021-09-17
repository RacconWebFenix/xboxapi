import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { UpdateJogoDto } from 'src/jogo/dto/update-jogo.dto';
import { CreatePerfiDto } from './create-perfi.dto';

export class UpdatePerfiDto extends PartialType(CreatePerfiDto) {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateJogoDto)
  jogos?: UpdateJogoDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  jogosIds: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  jogosDisconnectIds: number[];
}
