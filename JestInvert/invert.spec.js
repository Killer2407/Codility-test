const { invert } = require('./inverter');

// describe("invert", () => {
//     it("fails", () => {
//         throw new Error("it fails");
//     });

    test("invert", () => {
             expect(invert(null)).toBe('');
             expect(invert('abcd')).toBe('dcba');
             expect(invert('a')).toBe('a');
        });
        
// })