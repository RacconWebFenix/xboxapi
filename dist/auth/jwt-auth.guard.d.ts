import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/user/user.service';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private reflector;
    private readonly usuarioService;
    constructor(reflector: Reflector, usuarioService: UserService);
    canActivate(context: ExecutionContext): boolean | import("rxjs").Observable<boolean>;
}
export {};
