import { Prisma } from '@prisma/client';
export declare class User implements Prisma.UsuariosUncheckedCreateInput {
    id?: number;
    nome: string;
    sobrenome: string;
    imagemUrl: string;
    email: string;
    senha: string;
    cpf: string;
    admin: boolean;
}
