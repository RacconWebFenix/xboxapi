import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfiDto } from './dto/create-perfi.dto';
import { UpdatePerfiDto } from './dto/update-perfi.dto';
export declare class PerfisService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPerfiDto: CreatePerfiDto): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    }>;
    update(id: number, updatePerfiDto: UpdatePerfiDto): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    }>;
}
