import { Runtime, deserializeFromJson, parse, serializeToJson } from "../src";
import { StandardRuntimeContext } from "../src/addons/StandardRuntimeContext";

const acl_check = `
(
  {scopes} contain allow_read 
  &&
  {acc_type} == normal
) || {is_admin}
`;

// Parse expression to TargetValue
const tmp = parse(acl_check);
if (!tmp.ast?.value) {
  console.log(tmp.errs);
  throw new Error("syntax error");
}

// Save and load TargetValue <-> json
const jsonStr = serializeToJson(tmp.ast.value);
const fromJson = deserializeFromJson(jsonStr);
if (!fromJson) {
  throw new Error("OoO");
}

// Create runtime context
const ctx = new StandardRuntimeContext({
  scopes: ["allow_read"],
  acc_type: "normal",
  is_admin: false,
});
const runtime = new Runtime(ctx);

// Evalulate value
const result = runtime.eval(fromJson);
console.log(result); // -> true
