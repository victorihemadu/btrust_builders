import { script } from "bitcoinjs-lib";

function scriptHexToASM(hex) {

  const scriptBuffer = Buffer.from(hex, "hex");

  const parsedScript = script.compile(scriptBuffer);

  return script.toASM(parsedScript);

}

  console.log(scriptHexToASM("010101029301038801027693010487"));
