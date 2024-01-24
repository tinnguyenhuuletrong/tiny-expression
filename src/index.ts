import { parse, Parser } from "./_tinyExpressionGrammar";
import { doOptimize } from "./optimize";
export { Runtime, type RuntimeValue, type IRuntimeContext } from "./runtime";
export { deserializeFromJson, serializeToJson } from "./utils";
export * from "./addons/StandardRuntimeContext";
export { parse, Parser, doOptimize };

export function compileAndOptimize(inp: string) {
  const tmp = compile(inp);
  try {
    const optimized = doOptimize(tmp);
    return optimized;
  } catch (error) {
    throw new Error(`optimized error ${inp} -> ${String(error)}`);
  }
}

export function compile(inp: string) {
  const tmp = parse(inp);
  if (!tmp.ast) {
    const msg = tmp.errs.map((itm) => itm.toString()).join(",");
    throw new Error(`compile error ${inp} -> ${msg}`);
  }
  return tmp.ast.value;
}
