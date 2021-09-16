import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Bcrypt
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      senha: await bcrypt.hash(createUserDto.senha, 10),
    };

    const createdUsuario = await this.prisma.usuarios.create({ data });

    return {
      ...createdUsuario,
      senha: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.usuarios.findUnique({ where: { email } });
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

  findById(id: number) {
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
