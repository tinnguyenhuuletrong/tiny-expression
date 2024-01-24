import { StandardRuntimeContext } from "../dist";
import { compileAndOptimize, IRuntimeContext, Runtime } from "../src/index";

function doCompileAndRun(inp: string, ctx: IRuntimeContext) {
  const res = compileAndOptimize(inp);
  const rt = new Runtime(ctx);
  return rt.eval(res);
}

const inp = `[false, false] allof false`;
const val = doCompileAndRun(inp, new StandardRuntimeContext({}));
console.log(inp, "->", val);
