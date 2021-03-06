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
exports.PerfisController = void 0;
const common_1 = require("@nestjs/common");
const perfis_service_1 = require("./perfis.service");
const create_perfi_dto_1 = require("./dto/create-perfi.dto");
const update_perfi_dto_1 = require("./dto/update-perfi.dto");
let PerfisController = class PerfisController {
    constructor(perfisService) {
        this.perfisService = perfisService;
    }
    create(createPerfiDto) {
        return this.perfisService.create(createPerfiDto);
    }
    findAll() {
        return this.perfisService.findAll();
    }
    findOne(id) {
        return this.perfisService.findOne(+id);
    }
    update(id, updatePerfiDto) {
        return this.perfisService.update(+id, updatePerfiDto);
    }
    remove(id) {
        return this.perfisService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_perfi_dto_1.CreatePerfiDto]),
    __metadata("design:returntype", void 0)
], PerfisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PerfisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerfisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_perfi_dto_1.UpdatePerfiDto]),
    __metadata("design:returntype", void 0)
], PerfisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerfisController.prototype, "remove", null);
PerfisController = __decorate([
    (0, common_1.Controller)('perfis'),
    __metadata("design:paramtypes", [perfis_service_1.PerfisService])
], PerfisController);
exports.PerfisController = PerfisController;
//# sourceMappingURL=perfis.controller.js.map