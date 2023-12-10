import { test, expect } from "bun:test";
import { parse, deserializeFromJson, serializeToJson } from "../src";
import { fail } from "assert";

const ALL_CASES = [
  `12345`,
  `1.32`,
  `-9.99`,
  `0`,
  `true`,
  `false`,
  `0x1234`,
  `-0xff`,
  `-10`,
  `{variable_name}`,
  `{variable_array.a.b.c.d}`,
  `[1,2,3]`,
  `[1.99, {v_a}]`,
  `[0x123, is_admin(3,7)]`,
  `''`,
  `""`,
  `11 + 22`,
  `0 - 31`,
  `-31 + 31`,
  `1 + 2*3`,
  `12 / (9 /0x33)`,
  `33^2`,
  `33%99`,
  `(((1 + 3) power (5 - 2)) ^ (9 / 7)) / (3 % 2)`,
  `{variable_a} ^ ({variable_b} + 1)`,
  `1 > 2`,
  `{variable_a} >= {variable_b}`,
  `10 / 2 < (2 * 3 + 1)`,
  `{age} - 18 < 0`,
  `{age} <= 0xff`,
  `{variable_a} == 1`,
  `{variable_b} != true`,
  `!{variable_c}`,
  `{array_a} empty`,
  `{array_b} notempty`,
  `{array_a} contain 5`,
  `{array_a} contains 5`,
  `{array_a} notcontains 5`,
  `[3,5,7] anyof 3`,
  `{array_a} allof true`,
  `{variable_a} > 0 and {variable_b}`,
  `(3 * {age} < 99) or {variable_b}`,
  `(
        {scopes} contain allow_read 
        && 
        {acc_type} == normal
      ) 
      || is_admin()`,
  `age( {dob} ) > 18`,
];

test("save load test", async () => {
  for (const inp of ALL_CASES) {
    doTest(inp);
  }
});

test("save load debug", async () => {
  const inp = `
  (
    {scopes} contain allow_read 
    && 
    {acc_type} == normal
  ) 
  || {is_admin}
  `;
  const res = parse(inp).ast?.value;
  if (!res) {
    fail(`failed to parse ${inp}`);
  }
  console.log(serializeToJson(res));
});

function doTest(inp: string) {
  const res = parse(inp).ast?.value;
  if (!res) {
    fail(`failed to parse ${inp}`);
  }
  const jsonStr = serializeToJson(res);
  const newObj = deserializeFromJson(jsonStr);
  expect(newObj).toEqual(res);
}
