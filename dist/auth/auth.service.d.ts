import { JwtService } from '@nestjs/jwt';
import { UsuarioToken } from './model/UsuarioToken';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(email: string, senha: string): Promise<UsuarioToken>;
    private validateUser;
}
