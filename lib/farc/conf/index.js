"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCronTime = (c) => {
    const re = /^(\d?\d{1}):(\d?\d{1})$/;
    if (typeof c !== "string") {
        return null;
    }
    let match = re.exec(c.trim());
    if (match) {
        const h = parseInt(match[1], 10);
        const m = parseInt(match[2], 10);
        if (h >= 0 && h < 24 && m >= 0 && m < 60) {
            match[1] = ("0" + match[1]).slice(-2);
            match[2] = ("0" + match[2]).slice(-2);
        }
        else {
            match = null;
        }
    }
    return match;
};
exports.setConfigValue = (val) => {
    switch (typeof val) {
        case "string":
        case "number":
        case "boolean":
            return { _val_: val };
        case "object":
            return val;
        default:
            return undefined;
    }
};
exports.getConfigValue = (val) => {
    return val && val._val_ !== undefined ? val._val_ : val;
};
//# sourceMappingURL=index.js.map