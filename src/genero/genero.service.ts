import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGeneroDto: CreateGeneroDto) {
    const jogosIds = createGeneroDto.jogosIds;
    delete createGeneroDto.jogosIds;
    const data: Prisma.GeneroCreateInput = {
      ...createGeneroDto,
      jogos: {
        connect: jogosIds.map((id) => ({ id })),
      },
    };
    return this.prisma.genero.create({
      data,
      include: { jogos: true },
    });
  }

  findAll() {
    return this.prisma.genero.findMany({
      include: {
        jogos: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.genero.findUnique({
      where: {
        id,
      },
      include: {
        jogos: true,
      },
    });
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    const jogosIds = updateGeneroDto.jogosIds;
    const jogosDisconnectIds = updateGeneroDto.jogosDisconnectIds;
    delete updateGeneroDto.jogosIds;
    delete updateGeneroDto.jogosDisconnectIds;
    const data: Prisma.GeneroUpdateInput = {
      ...updateGeneroDto,
      jogos: {
        connect: jogosIds?.map((id) => ({ id })),
        disconnect: jogosDisconnectIds?.map((id) => ({ id })),
      },
    };
    return this.prisma.genero.update({
      where: { id },
      data,
      include: { jogos: true },
    });
  }

  remove(id: number) {
    return this.prisma.genero.delete({
      where: {
        id,
      },
    });
  }
}
