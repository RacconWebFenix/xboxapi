import { JogosService } from './jogos.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosController {
    private readonly jogosService;
    constructor(jogosService: JogosService);
    create(createJogoDto: CreateJogoDto): import(".prisma/client").Prisma.Prisma__JogosClient<import(".prisma/client").Jogos & {
        perfis: import(".prisma/client").JogosOnPerfis[];
    }>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateJogoDto: UpdateJogoDto): any;
    remove(id: string): any;
}
