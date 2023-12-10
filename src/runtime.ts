import {
  ArrayOperand,
  BinaryOperand,
  Const,
  EInstructionType,
  ENodeType,
  FunctionOperand,
  TargetValue,
  UnaryOperand,
  Variable,
  EUnaryInstructionType,
} from "./libs";
import {
  _castToArray,
  _castToBoolean,
  _castToStringOrNumber,
  _castToNumber,
} from "./utils";

export type RuntimeValue =
  | string
  | number
  | boolean
  | Array<RuntimeValue>
  | null;

export interface IRuntimeContext {
  resolveVariable(name: string): RuntimeValue;
  functionCall(name: string, params: RuntimeValue[]): RuntimeValue;
}

export class Runtime {
  constructor(private ctx: IRuntimeContext) {}

  eval(root: TargetValue) {
    return this._internalEval(root);
  }

  private _internalEval(node: TargetValue): RuntimeValue {
    const type = node.type;
    switch (type) {
      case ENodeType.EConst: {
        const ins = node as Const;
        return ins.value;
      }
      case ENodeType.Evariable: {
        const ins = node as Variable;
        return this.ctx.resolveVariable(ins.name);
      }
      case ENodeType.EBinaryOp: {
        const ins = node as BinaryOperand;
        return this._calBinaryOp(ins);
      }
      case ENodeType.EUnaryOp: {
        const ins = node as UnaryOperand;
        return this._calUnaryOp(ins);
      }
      case ENodeType.EUFuncOp: {
        const ins = node as FunctionOperand;
        const params = _castToArray(this._internalEval(ins.params));
        return this.ctx.functionCall(ins.name, params);
      }
      case ENodeType.EArrayOp: {
        const ins = node as ArrayOperand;
        const tmp = ins.data.map((itm) => this._internalEval(itm));
        return tmp;
      }

      default:
        // should not reachable
        ((_x: never) => {})(type);
        throw new Error(`unknown type ${type}`);
    }
  }

  private _calUnaryOp(ins: UnaryOperand): RuntimeValue {
    const op: EUnaryInstructionType = ins.op;
    switch (op) {
      case EInstructionType.negate: {
        const v = _castToBoolean(this._internalEval(ins.target));
        return !v;
      }
      case EInstructionType.empty: {
        const arr = _castToArray(this._internalEval(ins.target));
        return arr.length === 0;
      }
      case EInstructionType.notempty: {
        const arr = _castToArray(this._internalEval(ins.target));
        return arr.length !== 0;
      }
    }
  }

  private _calBinaryOp(ins: BinaryOperand): RuntimeValue {
    const op = ins.op;
    switch (op) {
      case EInstructionType.plus: {
        const left: any = _castToStringOrNumber(this._internalEval(ins.left));
        const right = _castToStringOrNumber(this._internalEval(ins.right));
        return left + right;
      }
      case EInstructionType.minus: {
        const left = _castToNumber(this._internalEval(ins.left));
        const right = _castToNumber(this._internalEval(ins.right));
        return left - right;
      }
      case EInstructionType.mul: {
        const left = _castToNumber(this._internalEval(ins.left));
        const right = _castToNumber(this._internalEval(ins.right));
        return left * right;
      }
      case EInstructionType.div: {
        const left = _castToNumber(this._internalEval(ins.left));
        const right = _castToNumber(this._internalEval(ins.right));
        return left / right;
      }
      case EInstructionType.mod: {
        const left = _castToNumber(this._internalEval(ins.left));
        const right = _castToNumber(this._internalEval(ins.right));
        return left % right;
      }
      case EInstructionType.power: {
        const left = _castToNumber(this._internalEval(ins.left));
        const right = _castToNumber(this._internalEval(ins.right));
        return left ** right;
      }
      case EInstructionType.equal: {
        const left = this._internalEval(ins.left);
        const right = this._internalEval(ins.right);
        return left == right;
      }
      case EInstructionType.notequal: {
        const left = this._internalEval(ins.left);
        const right = this._internalEval(ins.right);
        return left != right;
      }
      case EInstructionType.greater: {
        const left = _castToStringOrNumber(this._internalEval(ins.left));
        const right = _castToStringOrNumber(this._internalEval(ins.right));
        return left > right;
      }
      case EInstructionType.greaterorequal: {
        const left = _castToStringOrNumber(this._internalEval(ins.left));
        const right = _castToStringOrNumber(this._internalEval(ins.right));
        return left >= right;
      }
      case EInstructionType.less: {
        const left = _castToStringOrNumber(this._internalEval(ins.left));
        const right = _castToStringOrNumber(this._internalEval(ins.right));
        return left < right;
      }
      case EInstructionType.lessorequal: {
        const left = _castToStringOrNumber(this._internalEval(ins.left));
        const right = _castToStringOrNumber(this._internalEval(ins.right));
        return left <= right;
      }
      case EInstructionType.and: {
        return (
          _castToBoolean(this._internalEval(ins.left)) &&
          _castToBoolean(this._internalEval(ins.right))
        );
      }
      case EInstructionType.or: {
        return (
          _castToBoolean(this._internalEval(ins.left)) ||
          _castToBoolean(this._internalEval(ins.right))
        );
      }

      // isArithmeticOp == false
      case EInstructionType.contains: {
        const arr = _castToArray(this._internalEval(ins.left));
        const val = this._internalEval(ins.right);
        return arr.includes(val);
      }
      case EInstructionType.notcontains: {
        const arr = _castToArray(this._internalEval(ins.left));
        const val = this._internalEval(ins.right);
        return !arr.includes(val);
      }
      case EInstructionType.allof: {
        const arr = _castToArray(this._internalEval(ins.left));
        const val = this._internalEval(ins.right);
        for (const it of arr) {
          if (it !== val) return false;
        }
        return true;
      }
      case EInstructionType.anyof: {
        const arr = _castToArray(this._internalEval(ins.left));
        const val = this._internalEval(ins.right);
        for (const it of arr) {
          if (it === val) return true;
        }
        return false;
      }

      default:
        return null;
    }
  }
}
