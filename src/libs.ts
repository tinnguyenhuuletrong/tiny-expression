export enum ENodeType {
  Evariable,
  EConst,
  EUnaryOp,
  EUFuncOp,
  EBinaryOp,
  EArrayOp,
}
type OpType =
  | ENodeType.EUnaryOp
  | ENodeType.EUFuncOp
  | ENodeType.EBinaryOp
  | ENodeType.EArrayOp;

export enum EInstructionType {
  plus = "plus",
  minus = "minus",
  mul = "mul",
  div = "div",
  mod = "mod",
  power = "power",

  and = "and",
  or = "or",

  lessorequal = "lessorequal",
  greaterorequal = "greaterorequal",
  equal = "equal",
  notequal = "notequal",
  less = "less",
  greater = "greater",
  negate = "negate",

  contains = "contains",
  notcontains = "notcontains",
  anyof = "anyof",
  allof = "allof",
  empty = "empty",
  notempty = "notempty",
}
export type EUnaryInstructionType =
  | EInstructionType.negate
  | EInstructionType.empty
  | EInstructionType.notempty;

const ALL_UNARY_INS = [
  EInstructionType.negate,
  EInstructionType.empty,
  EInstructionType.notempty,
];

export type TargetValue = Variable | Const | Operand;

export class Variable {
  public readonly type: ENodeType = ENodeType.Evariable;
  constructor(public readonly name: string) {}

  toObject() {
    const { type, name } = this;
    return { type, name };
  }
  static fromObj(obj: any) {
    return new Variable(obj.name);
  }
}

export class Const {
  public readonly type: ENodeType = ENodeType.EConst;
  constructor(public readonly value: string | number | boolean) {}

  toObject() {
    const { type, value } = this;
    return { type, value };
  }
  static fromObj(obj: any) {
    return new Const(obj.value);
  }
}

export abstract class Operand {
  public readonly type!: OpType;
  constructor(type: OpType) {
    this.type = type;
  }
  toObject(): any {
    return { type: this.type };
  }
}

export class FunctionOperand extends Operand {
  constructor(
    public readonly name: string,
    public readonly params: ArrayOperand
  ) {
    super(ENodeType.EUFuncOp);
  }

  toObject() {
    const { name, params } = this;
    return { ...super.toObject(), name, params: params.toObject() };
  }
  static fromObj(obj: any) {
    const params = valueFactory(obj.params);
    _ensureType(params, ENodeType.EArrayOp);
    return new FunctionOperand(obj.name, params as ArrayOperand);
  }
}

export class UnaryOperand extends Operand {
  public readonly op: EUnaryInstructionType;
  public readonly target: TargetValue;

  constructor(target: TargetValue | null, op: EInstructionType) {
    super(ENodeType.EUnaryOp);

    if (!target) throw new Error(`UnaryOperand target is null`);
    if (!ALL_UNARY_INS.includes(op))
      throw new Error(`UnaryOperand not accept insType ${op}`);

    this.target = target;
    this.op = op as any;
  }

  toObject() {
    const { op, target } = this;
    return { ...super.toObject(), op, target: target.toObject() };
  }
  static fromObj(obj: any) {
    const target = valueFactory(obj.target);
    return new UnaryOperand(target, obj.op);
  }
}

export class BinaryOperand extends Operand {
  public readonly op: EInstructionType;
  public readonly left: TargetValue;
  public readonly right: TargetValue;
  public readonly isArithmeticOp: boolean;
  constructor(
    op: EInstructionType,
    left: TargetValue,
    right: TargetValue,
    isArithmeticOp: boolean = false
  ) {
    super(ENodeType.EBinaryOp);
    this.op = op;
    this.left = left;
    this.right = right;
    this.isArithmeticOp = isArithmeticOp;
  }

  toObject() {
    const { op, left, right, isArithmeticOp } = this;
    return {
      ...super.toObject(),
      op,
      left: left.toObject(),
      right: right.toObject(),
      isArithmeticOp,
    };
  }
  static fromObj(obj: any) {
    const op = obj.op;
    const left = valueFactory(obj.left);
    const right = valueFactory(obj.right);
    const isArithmeticOp = Boolean(obj.isArithmeticOp);
    return new BinaryOperand(op, left, right, isArithmeticOp);
  }
}

export class ArrayOperand extends Operand {
  public readonly data: TargetValue[];
  constructor(params: TargetValue[]) {
    super(ENodeType.EArrayOp);
    this.data = params;
  }

  toObject() {
    const { data } = this;
    return {
      ...super.toObject(),
      data: data.map((itm) => itm.toObject()),
    };
  }
  static fromObj(obj: any) {
    if (!Array.isArray(obj.data))
      throw new Error("ArrayOperand parse error. obj.data must be array");
    const data = obj.data.map((itm: any) => valueFactory(itm));
    return new ArrayOperand(data);
  }
}

export function buildBinaryOperand(
  head: any,
  tail: Array<any>,
  isArithmeticOp: boolean = false
): TargetValue {
  return tail.reduce(function (result, elements) {
    return new BinaryOperand(
      elements.v1.value,
      result,
      elements.v2.value,
      isArithmeticOp
    );
  }, head.value);
}

export function flattenArray(array: Array<any>): Array<any> {
  return [].concat.apply([], array);
}

function _ensureType(obj: any, t: ENodeType) {
  if (obj?.type !== t) throw new Error(`expected type ${t}`);
}

export function valueFactory(obj: any): TargetValue {
  const type = obj.type as ENodeType;
  switch (type) {
    case ENodeType.EConst:
      return Const.fromObj(obj);
    case ENodeType.Evariable:
      return Variable.fromObj(obj);
    case ENodeType.EUnaryOp:
      return UnaryOperand.fromObj(obj);
    case ENodeType.EArrayOp:
      return ArrayOperand.fromObj(obj);
    case ENodeType.EBinaryOp:
      return BinaryOperand.fromObj(obj);
    case ENodeType.EUFuncOp:
      return FunctionOperand.fromObj(obj);
    default:
      // should not reachable
      ((_x: never) => {})(type);
      throw new Error(`unknown type ${type}`);
  }
}
