import { AuthService } from './auth.service';
import { LoginRequestBody } from './model/LoginRequestBody';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, senha }: LoginRequestBody): Promise<import("./model/UsuarioToken").UsuarioToken>;
}
