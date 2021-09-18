import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createJogoDto: CreateJogoDto): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        perfis: import(".prisma/client").Perfis[];
        generos: import(".prisma/client").Genero[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Jogo & {
        perfis: import(".prisma/client").Perfis[];
        generos: import(".prisma/client").Genero[];
    })[]>;
    findOne(id: number): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        perfis: {
            titulo: string;
        }[];
        generos: import(".prisma/client").Genero[];
    }>;
    update(id: number, updateJogoDto: UpdateJogoDto): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        perfis: import(".prisma/client").Perfis[];
        generos: import(".prisma/client").Genero[];
    }>;
    remove(id: number): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
}
