import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateJogoDto } from './create-jogo.dto';

export class UpdateJogoDto extends PartialType(CreateJogoDto) {
  @IsOptional()
  @IsNumber({}, { each: true })
  perfisDisconnectIds: number[];
}
