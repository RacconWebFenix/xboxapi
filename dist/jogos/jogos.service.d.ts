import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
export declare class JogosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createJogoDto: CreateJogoDto): import(".prisma/client").Prisma.Prisma__JogosClient<import(".prisma/client").Jogos & {
        perfis: import(".prisma/client").JogosOnPerfis[];
    }>;
}
