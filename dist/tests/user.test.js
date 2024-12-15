"use strict";
// tests/user.test.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
describe('User Model', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Optional: Seed the database
        yield prisma.user.deleteMany();
    }));
    it('should create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                name: 'Test User',
                email: 'testuser@example.com',
            },
        });
        expect(user).toHaveProperty('id');
        expect(user.name).toBe('Test User');
        expect(user.email).toBe('testuser@example.com');
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Cleanup
        yield prisma.user.deleteMany();
        yield prisma.$disconnect();
    }));
});
