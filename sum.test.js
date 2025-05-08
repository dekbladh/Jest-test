const { sum, sub } = require("./sum");

describe("Addition", () => {
    it("addera 1+2 och förväntar sig 3", () => {
        expect(sum(1, 2)).toBe(3);
    });

    it("addera negativa tal -1 + (-2) och förväntar sig -3", () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    it("addera med noll 0 + 5 och förväntar sig 5", () => {
        expect(sum(0, 5)).toBe(5);
    });

    it("addera decimaltal 0.1 + 0.2 och förväntar sig ungefär 0.3", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it("addera stora tal 999999 + 1 och förväntar sig 1000000", () => {
        expect(sum(999999, 1)).toBe(1000000);
    });
});

describe("Subtraction", () => {
    it("subtrahera 2-1 och förväntar sig 1", () => {
        expect(sub(2, 1)).toBe(1);
    });

    it("subtrahera negativa tal -1 - (-2) och förväntar sig 1", () => {
        expect(sub(-1, -2)).toBe(1);
    });

    it("subtrahera med noll 5 - 0 och förväntar sig 5", () => {
        expect(sub(5, 0)).toBe(5);
    });

    it("subtrahera decimaltal 0.5 - 0.2 och förväntar sig 0.3", () => {
        expect(sub(0.5, 0.2)).toBeCloseTo(0.3);
    });

    it("subtrahera större tal från mindre 1 - 5 och förväntar sig -4", () => {
        expect(sub(1, 5)).toBe(-4);
    });
})
