import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Usuarios & {
        perfis: {
            titulo: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
}
