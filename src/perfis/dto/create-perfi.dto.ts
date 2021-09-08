import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePerfiDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;
  @IsUrl({
    require_protocol: true,
  })
  @IsNotEmpty()
  imagemUrl: string;
  @IsInt()
  usuarioId: number;
}
