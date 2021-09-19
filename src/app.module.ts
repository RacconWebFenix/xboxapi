import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PerfisModule } from './perfis/perfis.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { JogoModule } from './jogo/jogo.module';
import { GeneroModule } from './genero/genero.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    PerfisModule,
    AuthModule,
    JogoModule,
    GeneroModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
