import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGeneroDto: CreateGeneroDto): Prisma.Prisma__GeneroClient<import(".prisma/client").Genero & {
        jogos: import(".prisma/client").Jogo[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Genero & {
        jogos: import(".prisma/client").Jogo[];
    })[]>;
    findOne(id: number): Prisma.Prisma__GeneroClient<import(".prisma/client").Genero & {
        jogos: import(".prisma/client").Jogo[];
    }>;
    update(id: number, updateGeneroDto: UpdateGeneroDto): Prisma.Prisma__GeneroClient<import(".prisma/client").Genero & {
        jogos: import(".prisma/client").Jogo[];
    }>;
    remove(id: number): Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
}
