import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { Cpf } from 'src/helpers/cpf';

export class CreateUserDto implements User {
  @IsString()
  @IsNotEmpty()
  nome: string;
  @IsString()
  @IsNotEmpty()
  sobrenome: string;
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  senha: string;
  @IsString()
  @IsNotEmpty()
  @Cpf()
  cpf: string;
  @IsNotEmpty()
  @IsUrl({
    require_protocol: true,
  })
  imagemUrl: string;
  @IsNotEmpty()
  @IsBoolean()
  admin: boolean;
}
