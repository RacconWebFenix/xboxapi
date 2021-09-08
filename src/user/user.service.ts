import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.usuarios.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.usuarios.findMany({
      include: {
        perfis: {
          select: {
            titulo: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.usuarios.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.usuarios.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.usuarios.delete({
      where: {
        id,
      },
    });
  }
}
