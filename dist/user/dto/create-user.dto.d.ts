import { User } from '../entities/user.entity';
export declare class CreateUserDto implements User {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    admin: boolean;
}
