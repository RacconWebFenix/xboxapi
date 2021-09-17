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
exports.JogoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let JogoService = class JogoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createJogoDto) {
        const perfisIds = createJogoDto.perfisIds;
        delete createJogoDto.perfisIds;
        const data = Object.assign(Object.assign({}, createJogoDto), { perfis: {
                connect: perfisIds === null || perfisIds === void 0 ? void 0 : perfisIds.map((id) => ({
                    id,
                })),
            } });
        return this.prisma.jogo.create({
            data,
            include: { perfis: true },
        });
    }
    findAll() {
        return this.prisma.jogo.findMany({
            include: {
                perfis: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.jogo.findUnique({
            where: { id },
            include: {
                perfis: {
                    select: {
                        titulo: true,
                    },
                },
            },
        });
    }
    update(id, updateJogoDto) {
        const perfisIds = updateJogoDto.perfisIds;
        const perfisDisconnectIds = updateJogoDto.perfisDisconnectIds;
        delete updateJogoDto.perfisIds;
        delete updateJogoDto.perfisDisconnectIds;
        delete updateJogoDto.perfisIds;
        const data = Object.assign(Object.assign({}, updateJogoDto), { perfis: {
                connect: perfisIds.map((id) => ({ id })),
                disconnect: perfisDisconnectIds.map((id) => ({ id })),
            } });
        return this.prisma.jogo.update({
            where: { id },
            data,
            include: { perfis: true },
        });
    }
    remove(id) {
        return this.prisma.jogo.delete({
            where: { id },
        });
    }
};
JogoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JogoService);
exports.JogoService = JogoService;
//# sourceMappingURL=jogo.service.js.map