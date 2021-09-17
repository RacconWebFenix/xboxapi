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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoController = void 0;
const common_1 = require("@nestjs/common");
const jogo_service_1 = require("./jogo.service");
const create_jogo_dto_1 = require("./dto/create-jogo.dto");
const update_jogo_dto_1 = require("./dto/update-jogo.dto");
let JogoController = class JogoController {
    constructor(jogoService) {
        this.jogoService = jogoService;
    }
    create(createJogoDto) {
        return this.jogoService.create(createJogoDto);
    }
    findAll() {
        return this.jogoService.findAll();
    }
    findOne(id) {
        return this.jogoService.findOne(+id);
    }
    update(id, updateJogoDto) {
        return this.jogoService.update(+id, updateJogoDto);
    }
    remove(id) {
        return this.jogoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_jogo_dto_1.CreateJogoDto]),
    __metadata("design:returntype", void 0)
], JogoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JogoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JogoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_jogo_dto_1.UpdateJogoDto]),
    __metadata("design:returntype", void 0)
], JogoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JogoController.prototype, "remove", null);
JogoController = __decorate([
    (0, common_1.Controller)('jogo'),
    __metadata("design:paramtypes", [jogo_service_1.JogoService])
], JogoController);
exports.JogoController = JogoController;
//# sourceMappingURL=jogo.controller.js.map