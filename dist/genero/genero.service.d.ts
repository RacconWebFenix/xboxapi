import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGeneroDto: CreateGeneroDto): void;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGeneroDto: UpdateGeneroDto): string;
    remove(id: number): string;
}
