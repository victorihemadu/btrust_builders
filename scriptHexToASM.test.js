const { scriptHexToASM } = require(".script.mjs");
const assert = require("assert");

describe("scriptHexToASM", () => {
  it("should correctly convert hex script to ASM", () => {
    const hexScript = "6a146f6d6e6900000000000000000000";
    const expectedASM = "OP_RETURN 6f6d6e69000000000000000000000000";
    assert.strictEqual(scriptHexToASM(hexScript), expectedASM);
  });

  it("should handle empty hex input", () => {
    const hexScript = "";
    const expectedASM = "";
    assert.strictEqual(scriptHexToASM(hexScript), expectedASM);
  });

});
