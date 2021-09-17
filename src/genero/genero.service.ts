import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGeneroDto: CreateGeneroDto) {
    // // const jogosIds = createGeneroDto.jogosIds;
    // // delete createGeneroDto.jogosIds;
    // // const data: Prisma.GeneroCreateInput = {
    // //   ...createGeneroDto,
    // //   jogos: {
    // //     connect: jogosIds?.map((id) => {
    // //       id;
    // //     }),
    // //   },
    // // };
    // return this.prisma.genero.create({
    //   data,
    //   include: { jogos: true },
    // });
  }

  findAll() {
    return `This action returns all genero`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genero`;
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  remove(id: number) {
    return `This action removes a #${id} genero`;
  }
}
