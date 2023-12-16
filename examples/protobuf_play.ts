// https://github.com/protobufjs/protobuf.js/tree/master?tab=readme-ov-file#using-reflection-only
import { compileAndOptimize } from "../src";
import pb from "../src/addons/protobuf/packer";

const tmp = pb.tiny_expression.Const.create({
  type: pb.tiny_expression.ENodeType.EConst,
  numberValue: 10,
});

console.log(tmp.toJSON());
