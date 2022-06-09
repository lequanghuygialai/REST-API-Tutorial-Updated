"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionSchema = void 0;
const zod_1 = require("zod");
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateSessionInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    CreateSessionResponse:
 *      type: object
 *      properties:
 *        accessToken:
 *          type: string
 *        refreshToken:
 *          type: string
 */
exports.createSessionSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "Email is required",
        }),
        password: (0, zod_1.string)({
            required_error: "Password is required",
        }),
    }),
});
/**
 * @openapi
 * components:
 *  schemas:
 *    GetSessionResponse:
 *      type: object
 *      properties:
 *        accessToken:
 *          type: string
 *        refreshToken:
 *          type: string
 */
/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteSessionResponse:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          user:
 *            type: string
 *          valid:
 *            type: boolean
 *          userAgent:
 *            type: string
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 *          __v:
 *            type: number
 */
