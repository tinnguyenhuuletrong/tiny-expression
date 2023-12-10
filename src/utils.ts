import type { RuntimeValue } from ".";
import { TargetValue, valueFactory } from "./libs";

export function serializeToJson(root: TargetValue): string {
  return JSON.stringify(root.toObject());
}

export function deserializeFromJson(str: string): TargetValue | null {
  const obj = JSON.parse(str);
  if (obj === null || obj === undefined) return null;
  return valueFactory(obj);
}

export function _castToStringOrNumber(v: RuntimeValue): string | number {
  const tmp = typeof v;
  if (tmp === "number" || tmp === "string") return v as string | number;
  throw new Error(`${v} is not TypePrimitive. it is ${tmp}`);
}

export function _castToNumber(v: RuntimeValue): number {
  const tmp = typeof v;
  if (tmp === "number") return v as number;
  throw new Error(`${v} is not TypePrimitive`);
}

export function _castToBoolean(v: RuntimeValue): boolean {
  return Boolean(v);
}

export function _castToDate(v: RuntimeValue): Date {
  let d!: Date;
  if (typeof v === "number") {
    d = new Date(v);
  } else if (typeof v === "string") {
    d = new Date(v);
    if (isNaN(d.valueOf())) {
      throw new Error(`${v} - ${d} is not a Date like string`);
    }
  } else {
    throw new Error(`${v} is not numer or string. can not cast to date`);
  }
  return d;
}

export function _castToArray(v: RuntimeValue): Array<RuntimeValue> {
  if (Array.isArray(v)) return v;
  throw new Error("ensureArray invalid cast");
}
