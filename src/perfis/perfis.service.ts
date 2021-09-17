import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfiDto } from './dto/create-perfi.dto';
import { UpdatePerfiDto } from './dto/update-perfi.dto';

@Injectable()
export class PerfisService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPerfiDto: CreatePerfiDto) {
    return this.prisma.perfis.create({
      data: createPerfiDto,
      include: {
        usuario: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.perfis.findMany({
      include: {
        usuario: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.perfis.findUnique({
      where: {
        id,
      },
      include: {
        usuario: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  update(id: number, updatePerfiDto: UpdatePerfiDto) {
    const jogosIds = updatePerfiDto.jogosIds;
    const jogosDisconnectIds = updatePerfiDto.jogosDisconnectIds;
    delete updatePerfiDto.jogosIds;
    delete updatePerfiDto.jogosDisconnectIds;

    const data = {
      ...updatePerfiDto,
      jogos: {
        connect: jogosIds.map((id) => ({ id })),
        disconnect: jogosDisconnectIds.map((id) => ({ id })),
      },
    };

    return this.prisma.perfis.update({
      where: {
        id,
      },
      data,
      include: {
        usuario: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.perfis.delete({
      where: {
        id,
      },
      include: {
        usuario: {
          select: {
            nome: true,
          },
        },
      },
    });
  }
}
