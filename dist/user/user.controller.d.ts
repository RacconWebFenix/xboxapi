import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        senha: any;
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        cpf: string;
        imagemUrl: string;
        admin: boolean;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Usuarios & {
        perfis: {
            titulo: string;
        }[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
}
