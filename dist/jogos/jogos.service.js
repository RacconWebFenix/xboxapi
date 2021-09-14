"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const update_jogo_dto_1 = require("./dto/update-jogo.dto");
let JogosService = class JogosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createJogoDto) {
        return this.prisma.jogos.create({
            data: createJogoDto,
            include: {
                perfis: {
                    where: {
                        perfisId: {
                            in: 
                        }
                    }
                },
            },
        });
    }
    ;
};
JogosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JogosService);
exports.JogosService = JogosService;
findAll();
{
    return this.prisma.jogos.findMany({
        include: {
            perfis: {
                select: {
                    perfisId: true,
                },
            },
        },
    });
}
findOne(id, number);
{
    return `This action returns a #${id} jogo`;
}
update(id, number, updateJogoDto, update_jogo_dto_1.UpdateJogoDto);
{
    return `This action updates a #${id} jogo`;
}
remove(id, number);
{
    return `This action removes a #${id} jogo`;
}
//# sourceMappingURL=jogos.service.js.map