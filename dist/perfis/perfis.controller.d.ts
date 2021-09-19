import { PerfisService } from './perfis.service';
import { CreatePerfiDto } from './dto/create-perfi.dto';
import { UpdatePerfiDto } from './dto/update-perfi.dto';
export declare class PerfisController {
    private readonly perfisService;
    constructor(perfisService: PerfisService);
    create(createPerfiDto: CreatePerfiDto): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
        jogos: import(".prisma/client").Jogo[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
        jogos: import(".prisma/client").Jogo[];
    }>;
    update(id: string, updatePerfiDto: UpdatePerfiDto): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
        jogos: {
            titulo: string;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PerfisClient<import(".prisma/client").Perfis & {
        usuario: {
            nome: string;
        };
    }>;
}
