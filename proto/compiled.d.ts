import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace tiny_expression. */
export namespace tiny_expression {

    /** ENodeType enum. */
    enum ENodeType {
        Evariable = 0,
        EConst = 1,
        EUnaryOp = 2,
        EUFuncOp = 3,
        EBinaryOp = 4,
        EArrayOp = 5
    }

    /** EInstructionType enum. */
    enum EInstructionType {
        plus = 1,
        minus = 2,
        mul = 3,
        div = 4,
        mod = 5,
        power = 6,
        and = 7,
        or = 8,
        lessorequal = 9,
        greaterorequal = 10,
        equal = 11,
        notequal = 12,
        less = 13,
        greater = 14,
        negate = 15,
        contains = 16,
        notcontains = 17,
        anyof = 18,
        allof = 19,
        empty = 20,
        notempty = 21
    }

    /** Properties of a Const. */
    interface IConst {

        /** Const type */
        type: tiny_expression.ENodeType;

        /** Const numberValue */
        numberValue?: (number|null);

        /** Const stringValue */
        stringValue?: (string|null);

        /** Const boolValue */
        boolValue?: (boolean|null);
    }

    /** Represents a Const. */
    class Const implements IConst {

        /**
         * Constructs a new Const.
         * @param [properties] Properties to set
         */
        constructor(properties?: tiny_expression.IConst);

        /** Const type. */
        public type: tiny_expression.ENodeType;

        /** Const numberValue. */
        public numberValue?: (number|null);

        /** Const stringValue. */
        public stringValue?: (string|null);

        /** Const boolValue. */
        public boolValue?: (boolean|null);

        /** Const value. */
        public value?: ("numberValue"|"stringValue"|"boolValue");

        /**
         * Creates a new Const instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Const instance
         */
        public static create(properties?: tiny_expression.IConst): tiny_expression.Const;

        /**
         * Encodes the specified Const message. Does not implicitly {@link tiny_expression.Const.verify|verify} messages.
         * @param message Const message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tiny_expression.IConst, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Const message, length delimited. Does not implicitly {@link tiny_expression.Const.verify|verify} messages.
         * @param message Const message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tiny_expression.IConst, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Const message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Const
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tiny_expression.Const;

        /**
         * Decodes a Const message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Const
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tiny_expression.Const;

        /**
         * Verifies a Const message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Const message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Const
         */
        public static fromObject(object: { [k: string]: any }): tiny_expression.Const;

        /**
         * Creates a plain object from a Const message. Also converts values to other types if specified.
         * @param message Const
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tiny_expression.Const, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Const to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Const
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Variable. */
    interface IVariable {

        /** Variable type */
        type: tiny_expression.ENodeType;

        /** Variable name */
        name: string;
    }

    /** Represents a Variable. */
    class Variable implements IVariable {

        /**
         * Constructs a new Variable.
         * @param [properties] Properties to set
         */
        constructor(properties?: tiny_expression.IVariable);

        /** Variable type. */
        public type: tiny_expression.ENodeType;

        /** Variable name. */
        public name: string;

        /**
         * Creates a new Variable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Variable instance
         */
        public static create(properties?: tiny_expression.IVariable): tiny_expression.Variable;

        /**
         * Encodes the specified Variable message. Does not implicitly {@link tiny_expression.Variable.verify|verify} messages.
         * @param message Variable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tiny_expression.IVariable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Variable message, length delimited. Does not implicitly {@link tiny_expression.Variable.verify|verify} messages.
         * @param message Variable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tiny_expression.IVariable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Variable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Variable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tiny_expression.Variable;

        /**
         * Decodes a Variable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Variable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tiny_expression.Variable;

        /**
         * Verifies a Variable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Variable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Variable
         */
        public static fromObject(object: { [k: string]: any }): tiny_expression.Variable;

        /**
         * Creates a plain object from a Variable message. Also converts values to other types if specified.
         * @param message Variable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tiny_expression.Variable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Variable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Variable
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Operand. */
    interface IOperand {

        /** Operand type */
        type: tiny_expression.ENodeType;

        /** Operand unaryOperad */
        unaryOperad?: (tiny_expression.IUnaryOperand|null);
    }

    /** Represents an Operand. */
    class Operand implements IOperand {

        /**
         * Constructs a new Operand.
         * @param [properties] Properties to set
         */
        constructor(properties?: tiny_expression.IOperand);

        /** Operand type. */
        public type: tiny_expression.ENodeType;

        /** Operand unaryOperad. */
        public unaryOperad?: (tiny_expression.IUnaryOperand|null);

        /** Operand value. */
        public value?: "unaryOperad";

        /**
         * Creates a new Operand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Operand instance
         */
        public static create(properties?: tiny_expression.IOperand): tiny_expression.Operand;

        /**
         * Encodes the specified Operand message. Does not implicitly {@link tiny_expression.Operand.verify|verify} messages.
         * @param message Operand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tiny_expression.IOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Operand message, length delimited. Does not implicitly {@link tiny_expression.Operand.verify|verify} messages.
         * @param message Operand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tiny_expression.IOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Operand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Operand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tiny_expression.Operand;

        /**
         * Decodes an Operand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Operand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tiny_expression.Operand;

        /**
         * Verifies an Operand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Operand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Operand
         */
        public static fromObject(object: { [k: string]: any }): tiny_expression.Operand;

        /**
         * Creates a plain object from an Operand message. Also converts values to other types if specified.
         * @param message Operand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tiny_expression.Operand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Operand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Operand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TargetValue. */
    interface ITargetValue {

        /** TargetValue type */
        type: tiny_expression.ENodeType;

        /** TargetValue constVal */
        constVal?: (tiny_expression.IConst|null);

        /** TargetValue variableVal */
        variableVal?: (tiny_expression.IVariable|null);

        /** TargetValue unaryOperand */
        unaryOperand?: (tiny_expression.IUnaryOperand|null);

        /** TargetValue binaryOperand */
        binaryOperand?: (tiny_expression.IBinaryOperand|null);
    }

    /** Represents a TargetValue. */
    class TargetValue implements ITargetValue {

        /**
         * Constructs a new TargetValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: tiny_expression.ITargetValue);

        /** TargetValue type. */
        public type: tiny_expression.ENodeType;

        /** TargetValue constVal. */
        public constVal?: (tiny_expression.IConst|null);

        /** TargetValue variableVal. */
        public variableVal?: (tiny_expression.IVariable|null);

        /** TargetValue unaryOperand. */
        public unaryOperand?: (tiny_expression.IUnaryOperand|null);

        /** TargetValue binaryOperand. */
        public binaryOperand?: (tiny_expression.IBinaryOperand|null);

        /** TargetValue value. */
        public value?: ("constVal"|"variableVal"|"unaryOperand"|"binaryOperand");

        /**
         * Creates a new TargetValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TargetValue instance
         */
        public static create(properties?: tiny_expression.ITargetValue): tiny_expression.TargetValue;

        /**
         * Encodes the specified TargetValue message. Does not implicitly {@link tiny_expression.TargetValue.verify|verify} messages.
         * @param message TargetValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tiny_expression.ITargetValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TargetValue message, length delimited. Does not implicitly {@link tiny_expression.TargetValue.verify|verify} messages.
         * @param message TargetValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tiny_expression.ITargetValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TargetValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TargetValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tiny_expression.TargetValue;

        /**
         * Decodes a TargetValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TargetValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tiny_expression.TargetValue;

        /**
         * Verifies a TargetValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TargetValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TargetValue
         */
        public static fromObject(object: { [k: string]: any }): tiny_expression.TargetValue;

        /**
         * Creates a plain object from a TargetValue message. Also converts values to other types if specified.
         * @param message TargetValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tiny_expression.TargetValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TargetValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TargetValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UnaryOperand. */
    interface IUnaryOperand {

        /** UnaryOperand type */
        type: tiny_expression.ENodeType;

        /** UnaryOperand target */
        target: tiny_expression.ITargetValue;
    }

    /** Represents an UnaryOperand. */
    class UnaryOperand implements IUnaryOperand {

        /**
         * Constructs a new UnaryOperand.
         * @param [properties] Properties to set
         */
        constructor(properties?: tiny_expression.IUnaryOperand);

        /** UnaryOperand type. */
        public type: tiny_expression.ENodeType;

        /** UnaryOperand target. */
        public target: tiny_expression.ITargetValue;

        /**
         * Creates a new UnaryOperand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnaryOperand instance
         */
        public static create(properties?: tiny_expression.IUnaryOperand): tiny_expression.UnaryOperand;

        /**
         * Encodes the specified UnaryOperand message. Does not implicitly {@link tiny_expression.UnaryOperand.verify|verify} messages.
         * @param message UnaryOperand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tiny_expression.IUnaryOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnaryOperand message, length delimited. Does not implicitly {@link tiny_expression.UnaryOperand.verify|verify} messages.
         * @param message UnaryOperand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tiny_expression.IUnaryOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnaryOperand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnaryOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tiny_expression.UnaryOperand;

        /**
         * Decodes an UnaryOperand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnaryOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tiny_expression.UnaryOperand;

        /**
         * Verifies an UnaryOperand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnaryOperand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnaryOperand
         */
        public static fromObject(object: { [k: string]: any }): tiny_expression.UnaryOperand;

        /**
         * Creates a plain object from an UnaryOperand message. Also converts values to other types if specified.
         * @param message UnaryOperand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tiny_expression.UnaryOperand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnaryOperand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UnaryOperand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BinaryOperand. */
    interface IBinaryOperand {

        /** BinaryOperand type */
        type: tiny_expression.ENodeType;

        /** BinaryOperand op */
        op: tiny_expression.EInstructionType;

        /** BinaryOperand left */
        left: tiny_expression.ITargetValue;

        /** BinaryOperand right */
        right: tiny_expression.ITargetValue;

        /** BinaryOperand isArithmeticOp */
        isArithmeticOp: boolean;
    }

    /** Represents a BinaryOperand. */
    class BinaryOperand implements IBinaryOperand {

        /**
         * Constructs a new BinaryOperand.
         * @param [properties] Properties to set
         */
        constructor(properties?: tiny_expression.IBinaryOperand);

        /** BinaryOperand type. */
        public type: tiny_expression.ENodeType;

        /** BinaryOperand op. */
        public op: tiny_expression.EInstructionType;

        /** BinaryOperand left. */
        public left: tiny_expression.ITargetValue;

        /** BinaryOperand right. */
        public right: tiny_expression.ITargetValue;

        /** BinaryOperand isArithmeticOp. */
        public isArithmeticOp: boolean;

        /**
         * Creates a new BinaryOperand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BinaryOperand instance
         */
        public static create(properties?: tiny_expression.IBinaryOperand): tiny_expression.BinaryOperand;

        /**
         * Encodes the specified BinaryOperand message. Does not implicitly {@link tiny_expression.BinaryOperand.verify|verify} messages.
         * @param message BinaryOperand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tiny_expression.IBinaryOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BinaryOperand message, length delimited. Does not implicitly {@link tiny_expression.BinaryOperand.verify|verify} messages.
         * @param message BinaryOperand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tiny_expression.IBinaryOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BinaryOperand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BinaryOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tiny_expression.BinaryOperand;

        /**
         * Decodes a BinaryOperand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BinaryOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tiny_expression.BinaryOperand;

        /**
         * Verifies a BinaryOperand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BinaryOperand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BinaryOperand
         */
        public static fromObject(object: { [k: string]: any }): tiny_expression.BinaryOperand;

        /**
         * Creates a plain object from a BinaryOperand message. Also converts values to other types if specified.
         * @param message BinaryOperand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tiny_expression.BinaryOperand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BinaryOperand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BinaryOperand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ArrayOperand. */
    interface IArrayOperand {

        /** ArrayOperand type */
        type: tiny_expression.ENodeType;

        /** ArrayOperand data */
        data?: (tiny_expression.ITargetValue[]|null);
    }

    /** Represents an ArrayOperand. */
    class ArrayOperand implements IArrayOperand {

        /**
         * Constructs a new ArrayOperand.
         * @param [properties] Properties to set
         */
        constructor(properties?: tiny_expression.IArrayOperand);

        /** ArrayOperand type. */
        public type: tiny_expression.ENodeType;

        /** ArrayOperand data. */
        public data: tiny_expression.ITargetValue[];

        /**
         * Creates a new ArrayOperand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArrayOperand instance
         */
        public static create(properties?: tiny_expression.IArrayOperand): tiny_expression.ArrayOperand;

        /**
         * Encodes the specified ArrayOperand message. Does not implicitly {@link tiny_expression.ArrayOperand.verify|verify} messages.
         * @param message ArrayOperand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tiny_expression.IArrayOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArrayOperand message, length delimited. Does not implicitly {@link tiny_expression.ArrayOperand.verify|verify} messages.
         * @param message ArrayOperand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tiny_expression.IArrayOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArrayOperand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArrayOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tiny_expression.ArrayOperand;

        /**
         * Decodes an ArrayOperand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArrayOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tiny_expression.ArrayOperand;

        /**
         * Verifies an ArrayOperand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArrayOperand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArrayOperand
         */
        public static fromObject(object: { [k: string]: any }): tiny_expression.ArrayOperand;

        /**
         * Creates a plain object from an ArrayOperand message. Also converts values to other types if specified.
         * @param message ArrayOperand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tiny_expression.ArrayOperand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArrayOperand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ArrayOperand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FunctionOperand. */
    interface IFunctionOperand {

        /** FunctionOperand type */
        type: tiny_expression.ENodeType;

        /** FunctionOperand params */
        params: tiny_expression.IArrayOperand;
    }

    /** Represents a FunctionOperand. */
    class FunctionOperand implements IFunctionOperand {

        /**
         * Constructs a new FunctionOperand.
         * @param [properties] Properties to set
         */
        constructor(properties?: tiny_expression.IFunctionOperand);

        /** FunctionOperand type. */
        public type: tiny_expression.ENodeType;

        /** FunctionOperand params. */
        public params: tiny_expression.IArrayOperand;

        /**
         * Creates a new FunctionOperand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FunctionOperand instance
         */
        public static create(properties?: tiny_expression.IFunctionOperand): tiny_expression.FunctionOperand;

        /**
         * Encodes the specified FunctionOperand message. Does not implicitly {@link tiny_expression.FunctionOperand.verify|verify} messages.
         * @param message FunctionOperand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tiny_expression.IFunctionOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FunctionOperand message, length delimited. Does not implicitly {@link tiny_expression.FunctionOperand.verify|verify} messages.
         * @param message FunctionOperand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tiny_expression.IFunctionOperand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FunctionOperand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FunctionOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tiny_expression.FunctionOperand;

        /**
         * Decodes a FunctionOperand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FunctionOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tiny_expression.FunctionOperand;

        /**
         * Verifies a FunctionOperand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FunctionOperand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FunctionOperand
         */
        public static fromObject(object: { [k: string]: any }): tiny_expression.FunctionOperand;

        /**
         * Creates a plain object from a FunctionOperand message. Also converts values to other types if specified.
         * @param message FunctionOperand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tiny_expression.FunctionOperand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FunctionOperand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FunctionOperand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
