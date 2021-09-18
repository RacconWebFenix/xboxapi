import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';

@Injectable()
export class JogoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createJogoDto: CreateJogoDto) {
    const perfisIds = createJogoDto.perfisIds;
    delete createJogoDto.perfisIds;

    const generosIds = createJogoDto.generosIds;
    delete createJogoDto.generosIds;

    const data: Prisma.JogoCreateInput = {
      ...createJogoDto,
      perfis: {
        connect: perfisIds?.map((id) => ({
          id,
        })),
      },
      generos: {
        connect: generosIds?.map((id) => ({
          id,
        })),
      },
    };
    return this.prisma.jogo.create({
      data,
      include: { perfis: true, generos: true },
    });
  }

  findAll() {
    return this.prisma.jogo.findMany({
      include: {
        perfis: true,
        generos: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.jogo.findUnique({
      where: { id },
      include: {
        perfis: {
          select: {
            titulo: true,
          },
        },
        generos: true,
      },
    });
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    const perfisIds = updateJogoDto.perfisIds;
    const perfisDisconnectIds = updateJogoDto.perfisDisconnectIds;
    delete updateJogoDto.perfisIds;
    delete updateJogoDto.perfisDisconnectIds;
    const generosIds = updateJogoDto.generosIds;
    const generosDisconnectIds = updateJogoDto.generosDisconnectIds;
    delete updateJogoDto.generosIds;
    delete updateJogoDto.generosDisconnectIds;
    const data = {
      ...updateJogoDto,
      perfis: {
        connect: perfisIds.map((id) => ({ id })),
        disconnect: perfisDisconnectIds.map((id) => ({ id })),
      },
      generos: {
        connect: generosIds?.map((id) => ({ id })),
        disconnect: generosDisconnectIds.map((id) => ({ id })),
      },
    };
    return this.prisma.jogo.update({
      where: { id },
      data,
      include: { perfis: true, generos: true },
    });
  }

  remove(id: number) {
    return this.prisma.jogo.delete({
      where: { id },
    });
  }
}
