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
exports.CreateJogoDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_genero_dto_1 = require("../../genero/dto/create-genero.dto");
const create_perfi_dto_1 = require("../../perfis/dto/create-perfi.dto");
class CreateJogoDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({
        require_protocol: true,
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "capa", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "ano", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateJogoDto.prototype, "IMDB", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({
        require_protocol: true,
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "trailer", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({
        require_protocol: true,
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "gameplay", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_perfi_dto_1.CreatePerfiDto),
    __metadata("design:type", Array)
], CreateJogoDto.prototype, "perfis", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateJogoDto.prototype, "perfisIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_genero_dto_1.CreateGeneroDto),
    __metadata("design:type", Array)
], CreateJogoDto.prototype, "generos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateJogoDto.prototype, "generosIds", void 0);
exports.CreateJogoDto = CreateJogoDto;
//# sourceMappingURL=create-jogo.dto.js.map