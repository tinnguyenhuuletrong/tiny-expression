import {
  ArrayOperand,
  BinaryOperand,
  Const,
  EInstructionType,
  ENodeType,
  FunctionOperand,
  TargetValue,
  UnaryOperand,
} from "./libs";
import { _castToArray, _castToBoolean, _castToStringOrNumber } from "./utils";

export function doOptimize(node: TargetValue): TargetValue {
  return _doOptimizeInternal(node);
}

function _doOptimizeInternal(node: TargetValue): TargetValue {
  const type = node.type;
  switch (type) {
    case ENodeType.EBinaryOp: {
      const tmp = node as BinaryOperand;
      const left = _doOptimizeInternal(tmp.left);
      const right = _doOptimizeInternal(tmp.right);

      const canOptimize = isConst(left) && isConst(right);
      if (!canOptimize) {
        return new BinaryOperand(tmp.op, left, right, tmp.isArithmeticOp);
      }

      switch (tmp.op) {
        case EInstructionType.plus: {
          const v1 = _castToStringOrNumber((left as Const).value) as any;
          const v2 = _castToStringOrNumber((right as Const).value) as any;
          return new Const(v1 + v2);
        }
        case EInstructionType.minus: {
          const v1 = _castToStringOrNumber((left as Const).value) as any;
          const v2 = _castToStringOrNumber((right as Const).value) as any;
          return new Const(v1 - v2);
        }
        case EInstructionType.mul: {
          const v1 = _castToStringOrNumber((left as Const).value) as any;
          const v2 = _castToStringOrNumber((right as Const).value) as any;
          return new Const(v1 * v2);
        }
        case EInstructionType.div: {
          const v1 = _castToStringOrNumber((left as Const).value) as any;
          const v2 = _castToStringOrNumber((right as Const).value) as any;
          return new Const(v1 / v2);
        }
        case EInstructionType.mod: {
          const v1 = _castToStringOrNumber((left as Const).value) as any;
          const v2 = _castToStringOrNumber((right as Const).value) as any;
          return new Const(v1 % v2);
        }
        case EInstructionType.power: {
          const v1 = _castToStringOrNumber((left as Const).value) as any;
          const v2 = _castToStringOrNumber((right as Const).value) as any;
          return new Const(v1 ** v2);
        }

        default:
          return node;
      }
    }
    case ENodeType.EUnaryOp: {
      const tmp = node as UnaryOperand;
      const target = _doOptimizeInternal(tmp.target);

      const canOptimize = isConst(target);
      if (!canOptimize) return node;

      switch (tmp.op) {
        case EInstructionType.negate:
          const v = _castToBoolean((target as Const).value);
          return new Const(!v);

        default:
          return node;
      }
    }
    case ENodeType.EArrayOp: {
      const ins = node as ArrayOperand;
      const newData = ins.data.map((itm) => _doOptimizeInternal(itm));
      return new ArrayOperand(newData);
    }
    case ENodeType.EUFuncOp: {
      const ins = node as FunctionOperand;
      const params = _doOptimizeInternal(ins.params);
      return new FunctionOperand(ins.name, params as ArrayOperand);
    }
    default:
      return node;
  }
}

function isConst(node: TargetValue) {
  return node.type === ENodeType.EConst;
}
