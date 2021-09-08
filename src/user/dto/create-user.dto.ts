import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
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
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  senha: string;
  @IsString()
  @IsNotEmpty()
  @Cpf()
  cpf: string;
  @IsNotEmpty()
  @IsBoolean()
  admin: boolean;
}
