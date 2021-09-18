import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfiDto } from './dto/create-perfi.dto';
import { UpdatePerfiDto } from './dto/update-perfi.dto';
export declare class PerfisService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPerfiDto: CreatePerfiDto): Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Perfis & {
        jogos: import(".prisma/client").Jogo[];
        usuario: {
            nome: string;
        };
    })[]>;
    findOne(id: number): Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        jogos: import(".prisma/client").Jogo[];
        usuario: {
            nome: string;
        };
    }>;
    update(id: number, updatePerfiDto: UpdatePerfiDto): Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        jogos: {
            titulo: string;
        }[];
        usuario: {
            nome: string;
        };
    }>;
    remove(id: number): Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    }>;
}
