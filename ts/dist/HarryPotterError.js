"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarryPotterError = void 0;
class HarryPotterError extends Error {
    isHarryPotterError = true;
    sdk = 'HarryPotter';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.HarryPotterError = HarryPotterError;
//# sourceMappingURL=HarryPotterError.js.map