import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from 'src/Errors/unauthorized.error';
import { JwtService } from '@nestjs/jwt';
import { UsuarioToken } from './model/UsuarioToken';
import { UsuarioPayload } from './model/UsuarioPayload';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, senha: string): Promise<UsuarioToken> {
    const usuario: User = await this.validateUser(email, senha);

    const payload: UsuarioPayload = {
      username: usuario.email,
      sub: usuario.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(email: string, senha: string) {
    const usuario = await this.userService.findByEmail(email);

    if (usuario) {
      const isPasswordValid = await bcrypt.compare(senha, usuario.senha);
      if (isPasswordValid) {
        return {
          ...usuario,
          senha: undefined,
        };
      }
    }

    throw new UnauthorizedError('E-mail e/ou senha são incorretos');
  }
}
