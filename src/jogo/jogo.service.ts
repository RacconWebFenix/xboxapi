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
    const data: Prisma.JogoCreateInput = {
      ...createJogoDto,
      perfis: {
        connect: perfisIds?.map((id) => ({
          id,
        })),
      },
    };
    return this.prisma.jogo.create({
      data,
      include: { perfis: true },
    });
  }

  findAll() {
    return this.prisma.jogo.findMany({
      include: {
        perfis: true,
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
      },
    });
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    const perfisIds = updateJogoDto.perfisIds;
    const perfisDisconnectIds = updateJogoDto.perfisDisconnectIds;

    delete updateJogoDto.perfisIds;

    delete updateJogoDto.perfisDisconnectIds;
    delete updateJogoDto.perfisIds;

    const data = {
      ...updateJogoDto,
      perfis: {
        connect: perfisIds.map((id) => ({ id })),
        disconnect: perfisDisconnectIds.map((id) => ({ id })),
      },
    };
    return this.prisma.jogo.update({
      where: { id },
      data,
      include: { perfis: true },
    });
  }

  remove(id: number) {
    return this.prisma.jogo.delete({
      where: { id },
    });
  }
}
