/**
 * Created by Edgar on 29.02.2016.
 */

describe("A suite is just a function", function() {
    var a;
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("and so is a spec", function() {
        a = true;

        expect(a).toBe(true);
    });
});