import { Runtime, deserializeFromJson, parse, serializeToJson } from "../src";
import { StandardRuntimeContext } from "../src/addons/StandardRuntimeContext";
import { doOptimize } from "../src/optimize";

const acl_check = `
  [1+3*5, !true, iff(!true, 10*3, 10*2)]
`;

// Parse expression to TargetValue
const tmp = parse(acl_check);
if (!tmp.ast?.value) {
  console.log(tmp.errs);
  throw new Error("syntax error");
}

const v1 = tmp.ast.value;
console.log("\nbefore: ");
console.dir(v1, { depth: 10 });
const v2 = doOptimize(v1);
console.log("\nafter: ");
console.dir(v2, { depth: 10 });

// // Save and load TargetValue <-> json
// const jsonStr = serializeToJson(tmp.ast.value);
// const fromJson = deserializeFromJson(jsonStr);
// if (!fromJson) {
//   throw new Error("OoO");
// }

// // Create runtime context
// const ctx = new StandardRuntimeContext({
//   age: 10,
// });
// const runtime = new Runtime(ctx);

// // Evalulate value
// const result = runtime.eval(fromJson);
// console.log(result);
