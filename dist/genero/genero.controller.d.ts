import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroController {
    private readonly generoService;
    constructor(generoService: GeneroService);
    create(createGeneroDto: CreateGeneroDto): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero & {
        jogos: import(".prisma/client").Jogo[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Genero & {
        jogos: import(".prisma/client").Jogo[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero & {
        jogos: import(".prisma/client").Jogo[];
    }>;
    update(id: string, updateGeneroDto: UpdateGeneroDto): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero & {
        jogos: import(".prisma/client").Jogo[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
}
