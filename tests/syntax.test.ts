import { test, expect } from "bun:test";
import { Parser, parse } from "../src";
import { inspect } from "util";

test("atoms cases", async () => {
  const CASES = [
    `12345`,
    `1.32`,
    `-9.99`,
    `0`,
    `100`,
    `true`,
    `false`,
    `0x1234`,
    `-0xff`,
    `-10`,
    `null`,
    `undefined`,
    `{variable_name}`,
    `{variable_array.a.b.c.d}`,
    `[1,2,3]`,
    `[1.99, {v_a}]`,
    `[0x123, is_admin(3,7)]`,
    `''`,
    `""`,
    `'i am string'`,
    `"i am also a string 12345"`,
  ];
  for (const it of CASES) {
    const res = parse(it);
    console.log(`${it} ->`, inspect(res.ast?.value, { depth: 10 }));

    if (!["null", "undefined"].includes(it))
      expect(res.ast?.value).not.toBe(null);

    expect(res.ast?.value).toMatchSnapshot(undefined);
  }
});

test("expressions cases", async () => {
  const CASES = [
    `11 + 22`,
    `0 - 31`,
    `-31 + 31`,
    `1 + 2*3`,
    `12 / (9 /0x33)`,
    `33^2`,
    `33%99`,
    `(((1 + 3) power (5 - 2)) ^ (9 / 7)) / (3 % 2)`,
    `{variable_a} ^ ({variable_b} + 1)`,
  ];

  for (const it of CASES) {
    const res = parse(it);
    console.log(`${it} ->`, inspect(res.ast?.value, { depth: 10 }));
    expect(res.ast?.value).not.toBe(null);
    expect(res.ast?.value).toMatchSnapshot();
  }
});

test("logical cases", async () => {
  const CASES = [
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
  ];

  for (const it of CASES) {
    const res = parse(it);
    console.log(`${it} ->`, inspect(res.ast?.value, { depth: 10 }));
    expect(res.ast?.value).not.toBe(null);
    expect(res.ast?.value).toMatchSnapshot();
  }
});

test("logical cases 2", async () => {
  const CASES = [
    `{variable_a} > 0 and {variable_b}`,
    `(3 * {age} < 99) or {variable_b}`,
    `(
        {scopes} contain allow_read 
        && 
        {acc_type} == normal
      ) 
      || is_admin()`,
  ];

  for (const it of CASES) {
    const res = parse(it);
    console.log(`${it} ->`, inspect(res.ast?.value, { depth: 10 }));
    expect(res.ast?.value).not.toBe(null);
    expect(res.ast?.value).toMatchSnapshot();
  }
});

test("function cases", async () => {
  const CASES = [
    `this_function()`,
    `thatFunction({variable_a})`,
    `parseInt({variable_a}, 10)`,
    `addDate(now(), 10)`,
    `iif(
      age({day_of_birth}) > 18, 
      true, 
      false
    )`,
  ];

  for (const it of CASES) {
    const res = parse(it);
    console.log(`${it} ->`, inspect(res.ast?.value, { depth: 10 }));
    expect(res.ast?.value).not.toBe(null);
    expect(res.ast?.value).toMatchSnapshot();
  }
});

test("syntax error cases", async () => {
  const CASES = [`(0fff`, `func)`, `a <> b`];
  for (const it of CASES) {
    const res = parse(it);
    console.log(`${it} ->`, inspect(res.ast?.value, { depth: 10 }));
    expect(res.ast === null).toBe(true);
    expect(res.errs.map((itm) => itm.pos)).toMatchSnapshot();
  }
});

test("usage", async () => {
  const inp = `age( {dob} ) > 18`;
  const ins = new Parser(inp);
  const isValid = ins.test();
  if (!isValid) throw new Error("OoO");
  const res = ins.parse().ast?.value;
  console.log(inp);
  console.dir(res, { depth: 10 });
  console.log(JSON.stringify(res));
});

test("syntax debug", async () => {
  const res = parse(`100`);
  // console.dir(
  //   res.errs.map((itm) => itm.toString()),
  //   {
  //     depth: 10,
  //   }
  // );
  // console.dir(res.ast, {
  //   depth: 20,
  // });
  console.dir(res.ast?.value, {
    depth: 10,
  });
});
