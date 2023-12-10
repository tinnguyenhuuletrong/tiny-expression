import { test, expect } from "bun:test";
import { parse, Runtime, IRuntimeContext, RuntimeValue } from "../src";
import { fail } from "assert";
import {
  StandardRuntimeContext,
  VariableMapType,
} from "../src/addons/StandardRuntimeContext";

const ALL_CASES_SIMPLE: Array<[string, any]> = [
  [`12345`, 12345],
  [`1.32`, 1.32],
  [`-9.99`, -9.99],
  [`0`, 0],
  [`100`, 100],
  [`true`, true],
  [`false`, false],
  [`0x1234`, 0x1234],
  [`-0xff`, -0xff],
  [`-10`, -10],
  [`[1,2,3]`, [1, 2, 3]],
  [`[1,[99],[3,7]]`, [1, [99], [3, 7]]],
  [`''`, ""],
  [`""`, ""],
  [`'i am string @!##&^#$(*#$)($&'`, `i am string @!##&^#$(*#$)($&`],
  [`"i am also a string 12345"`, `i am also a string 12345`],
  [`11 + 22`, 33],
  [`0 - 31`, -31],
  [`-31 + 31`, 0],
  [`1 + 2*3`, 7],
  [`12 / (9 /0x33)`, 68],
  [`33^2`, 1089],
  [`33%99`, 33],
  [`(((1 + 3) power (5 - 2)) ^ (9 / 7)) / (3 % 2)`, 210.0058511379554],
  [`1 > 2`, false],
  [`99 >= 99`, true],
  [`10 / 2 < (2 * 3 + 1)`, true],
  [`1 <= 0xff`, true],
  [`2 == 1`, false],
  [`false != true`, true],
  [`!(1>3)`, true],
  [`[] empty`, true],
  [`[1,2] notempty`, true],
  [`[1,2] contain 1`, true],
  [`[1,2] notcontain 99`, true],
  [`[false, false] anyof true`, false],
  [`[false, false] allof false`, true],
];

test("eval simple", async () => {
  const ctx = createRuntime();
  for (const [inp, answer] of ALL_CASES_SIMPLE) {
    const res = doTest(inp, ctx);
    console.log("\t", inp, "->", res);
    expect(res).toEqual(answer);
  }
});

test("eval runtime", async () => {
  const ctx = new StandardRuntimeContext({});
  const ALL_CASES_WITH_CONTEXT: Array<[string, any, VariableMapType]> = [
    [
      `iif({isAdmin}, "hello admin " + {name}, "hello user " + {name})`,
      "hello admin ttin",
      {
        isAdmin: true,
        name: "ttin",
      },
    ],
    [
      `iif({isAdmin}, "hello admin " + {name}, "hello user " + {name})`,
      "hello user user_1@abc.com",
      {
        isAdmin: false,
        name: "user_1@abc.com",
      },
    ],
    [
      `diffDays({dob}, '2023-12-09T09:19:38.215Z')`,
      91,
      {
        dob: "2023-09-09T09:19:38.215Z",
      },
    ],
    [
      `diffDays({dob}, '2023-12-09T09:19:38.215Z')`,
      91,
      {
        dob: 1694251178215,
      },
    ],
    [
      `diffDays({dob}, '2023-12-09T09:19:38.215Z') > 100`,
      false,
      {
        dob: 1694251178215,
      },
    ],
    [
      `age({dob})`,
      Math.round(
        new Date().getFullYear() -
          new Date("2000-09-09T09:19:38.215Z").getFullYear()
      ),
      {
        isAdmin: false,
        dob: "2000-09-09T09:19:38.215Z",
      },
    ],
    [
      `max({v},2,3,4,5)`,
      5,
      {
        v: -10,
      },
    ],
    [
      `min({v},2,3,4,5)`,
      -10,
      {
        v: -10,
      },
    ],
    [
      `
      (
        {scopes} contain allow_read 
        && 
        {acc_type} == normal
      ) 
      || {is_admin}`,
      true,
      {
        scopes: ["allow_read"],
        acc_type: "normal",
        is_admin: false,
      },
    ],
    [
      `
      (
        {scopes} contain allow_read 
        && 
        {acc_type} == normal
      ) 
      || {is_admin}`,
      true,
      {
        scopes: [],
        // should early stop when and eval
        // -> no exception throw event missing variable
        // acc_type: "normal",
        is_admin: true,
      },
    ],
  ];

  for (const [inp, answer, variableMap] of ALL_CASES_WITH_CONTEXT) {
    ctx.setVariableMaps(variableMap);
    const res = doTest(inp, ctx);
    console.log("\t", inp, "->", res);
    expect(res).toEqual(answer);
  }
});
test("eval extends new function", async () => {
  const ctx = new StandardRuntimeContext(
    {},
    {
      say: (params) => "hello",
    }
  );
  let inp = `say()`;
  let res = doTest(inp, ctx);
  console.log(inp, "->", res);

  ctx.registerFunction(
    "say_hi",
    ([name]) => `hi ${String(name).toLocaleUpperCase()}!`
  );
  inp = `say_hi('ttin')`;
  res = doTest(inp, ctx);
  console.log(inp, "->", res);
});

test("eval debug", async () => {
  const ctx = new StandardRuntimeContext({
    dob: 1694251178215,
  });
  const inp = `diffDays({dob}, '2023-12-09T09:19:38.215Z') > 100`;
  const res = parse(inp);
  if (!res.ast?.value) {
    console.log(res.errs.map((itm) => itm.toString()));
    fail(`failed to parse ${inp}`);
  }

  const rt = new Runtime(ctx);
  const result = rt.eval(res.ast.value);
  console.log(inp, "->", res.ast.value, "->", result);
});

function doTest(inp: string, ctx: IRuntimeContext) {
  const res = parse(inp);
  if (!res.ast?.value) {
    console.log(res.errs.map((itm) => itm.toString()));
    fail(`failed to parse ${inp}`);
  }

  const rt = new Runtime(ctx);
  return rt.eval(res.ast.value);
}

function createRuntime(): IRuntimeContext {
  return {
    resolveVariable(name: string): RuntimeValue {
      return 0;
    },
    functionCall(name: string, params: RuntimeValue[]): RuntimeValue {
      return 0;
    },
  };
}
