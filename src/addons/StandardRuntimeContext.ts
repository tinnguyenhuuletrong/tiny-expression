import { IRuntimeContext, RuntimeValue } from "..";
import { _castToBoolean, _castToDate, _castToNumber } from "../utils";

export type RuntimeFuncType = (params: RuntimeValue[]) => RuntimeValue;
export type VariableMapType = Record<string, RuntimeValue>;
const StdFuncMap: Record<string, RuntimeFuncType> = {
  iif: iif,
  diffDays: diffDays,
  age: age,
  max: max,
  min: min,
};

export class StandardRuntimeContext implements IRuntimeContext {
  constructor(
    private variableMap: Record<string, RuntimeValue>,
    private funcMap: Record<string, RuntimeFuncType> = { ...StdFuncMap }
  ) {}
  resolveVariable(name: string): RuntimeValue {
    if (!(name in this.variableMap))
      throw new Error(`failed to resolve variable with name='${name}'`);
    return this.variableMap[name];
  }
  functionCall(name: string, params: RuntimeValue[]): RuntimeValue {
    const f = this.funcMap[name];
    if (!f) throw new Error(`unknown function: ${name}`);
    return f(params);
  }

  setVariableMaps(map: Record<string, RuntimeValue>) {
    this.variableMap = map;
  }
  registerFunction(name: string, func: RuntimeFuncType) {
    this.funcMap[name] = func;
  }
  unregisterFunction(name: string) {
    delete this.funcMap[name];
  }
}

function iif([condition, onTrue, onFalse]: RuntimeValue[]): RuntimeValue {
  const test = _castToBoolean(condition);
  if (test) return onTrue;
  else return onFalse;
}

function age([a]: RuntimeValue[]): RuntimeValue {
  const v1 = _castToDate(a);
  const now = new Date();
  return now.getFullYear() - v1.getFullYear();
}

function diffDays([a, b]: RuntimeValue[]): RuntimeValue {
  const v1 = _castToDate(a);
  const v2 = _castToDate(b);
  return (v2.valueOf() - v1.valueOf()) / 8.64e7;
}

function max(params: RuntimeValue[]): RuntimeValue {
  const values = params.map((itm) => _castToNumber(itm));
  return Math.max(...values);
}

function min(params: RuntimeValue[]): RuntimeValue {
  const values = params.map((itm) => _castToNumber(itm));
  return Math.min(...values);
}
