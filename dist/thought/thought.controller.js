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
exports.ThoughtController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const createThought_dto_1 = require("./createThought.dto");
const thought_service_1 = require("./thought.service");
let ThoughtController = class ThoughtController {
    constructor(thoughtsService) {
        this.thoughtsService = thoughtsService;
    }
    async getAllThoughts() {
        return await this.thoughtsService.getAllThoughts();
    }
    async createThought(thought) {
        return await this.thoughtsService.createThought(thought);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThoughtController.prototype, "getAllThoughts", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createThought_dto_1.CreateThoughtDTO]),
    __metadata("design:returntype", Promise)
], ThoughtController.prototype, "createThought", null);
ThoughtController = __decorate([
    (0, common_1.Controller)('thoughts'),
    __metadata("design:paramtypes", [thought_service_1.ThoughtService])
], ThoughtController);
exports.ThoughtController = ThoughtController;
//# sourceMappingURL=thought.controller.js.map