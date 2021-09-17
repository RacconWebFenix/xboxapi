import { JogoService } from './jogo.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogoController {
    private readonly jogoService;
    constructor(jogoService: JogoService);
    create(createJogoDto: CreateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        perfis: import(".prisma/client").Perfis[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Jogo & {
        perfis: import(".prisma/client").Perfis[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        perfis: {
            titulo: string;
        }[];
    }>;
    update(id: string, updateJogoDto: UpdateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        perfis: import(".prisma/client").Perfis[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
}
