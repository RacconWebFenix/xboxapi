import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateGeneroDto } from './create-genero.dto';

export class UpdateGeneroDto extends PartialType(CreateGeneroDto) {
  @IsOptional()
  @IsNumber({}, { each: true })
  jogosDisconnectIds: number[];
}
