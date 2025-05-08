const sum = require("./sum");
const sub = require("./sum");

describe("Addition", () => {
    it ("addera 1+2 och förväntar sig 3", () => {
        expect(sum(1, 2)).toBe(3);
    })

});

describe ("Subtraction", () => {
    it ("subtrahera 2-1 och förväntar sig 1", () => {
        expect(sub(2, 1)).toBe(1);
    })
})