import { test, expect } from "bun:test";
import { IRuntimeContext, RuntimeValue, compileAndOptimize } from "../src";

const ALL_CASES_OPTIMIZE: string[] = [
  `( (1*3 / 2) ^ 7 ) % ( {val} - 3 )`,
  `iff(!true, 10*3, 10*2)`,
  `[!true, !!false, [9*3+7], log((-2 + 2) * {age})]`,
];

test("do optimize", async () => {
  for (const inp of ALL_CASES_OPTIMIZE) {
    const res = compileAndOptimize(inp);
    console.log("\t", inp, "->", res);
    expect(res).toMatchSnapshot();
  }
});
