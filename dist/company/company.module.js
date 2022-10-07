"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_controller_1 = require("./company.controller");
const company_entity_1 = require("./company.entity");
const company_service_1 = require("./company.service");
let CompanyModule = class CompanyModule {
};
CompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([company_entity_1.Company])],
        providers: [company_service_1.CompanyService],
        controllers: [company_controller_1.CompanyController],
        exports: [company_service_1.CompanyService],
    })
], CompanyModule);
exports.CompanyModule = CompanyModule;
//# sourceMappingURL=company.module.js.map