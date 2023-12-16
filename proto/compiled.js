/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tiny_expression = (function() {

    /**
     * Namespace tiny_expression.
     * @exports tiny_expression
     * @namespace
     */
    var tiny_expression = {};

    /**
     * ENodeType enum.
     * @name tiny_expression.ENodeType
     * @enum {number}
     * @property {number} Evariable=0 Evariable value
     * @property {number} EConst=1 EConst value
     * @property {number} EUnaryOp=2 EUnaryOp value
     * @property {number} EUFuncOp=3 EUFuncOp value
     * @property {number} EBinaryOp=4 EBinaryOp value
     * @property {number} EArrayOp=5 EArrayOp value
     */
    tiny_expression.ENodeType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Evariable"] = 0;
        values[valuesById[1] = "EConst"] = 1;
        values[valuesById[2] = "EUnaryOp"] = 2;
        values[valuesById[3] = "EUFuncOp"] = 3;
        values[valuesById[4] = "EBinaryOp"] = 4;
        values[valuesById[5] = "EArrayOp"] = 5;
        return values;
    })();

    /**
     * EInstructionType enum.
     * @name tiny_expression.EInstructionType
     * @enum {number}
     * @property {number} plus=1 plus value
     * @property {number} minus=2 minus value
     * @property {number} mul=3 mul value
     * @property {number} div=4 div value
     * @property {number} mod=5 mod value
     * @property {number} power=6 power value
     * @property {number} and=7 and value
     * @property {number} or=8 or value
     * @property {number} lessorequal=9 lessorequal value
     * @property {number} greaterorequal=10 greaterorequal value
     * @property {number} equal=11 equal value
     * @property {number} notequal=12 notequal value
     * @property {number} less=13 less value
     * @property {number} greater=14 greater value
     * @property {number} negate=15 negate value
     * @property {number} contains=16 contains value
     * @property {number} notcontains=17 notcontains value
     * @property {number} anyof=18 anyof value
     * @property {number} allof=19 allof value
     * @property {number} empty=20 empty value
     * @property {number} notempty=21 notempty value
     */
    tiny_expression.EInstructionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "plus"] = 1;
        values[valuesById[2] = "minus"] = 2;
        values[valuesById[3] = "mul"] = 3;
        values[valuesById[4] = "div"] = 4;
        values[valuesById[5] = "mod"] = 5;
        values[valuesById[6] = "power"] = 6;
        values[valuesById[7] = "and"] = 7;
        values[valuesById[8] = "or"] = 8;
        values[valuesById[9] = "lessorequal"] = 9;
        values[valuesById[10] = "greaterorequal"] = 10;
        values[valuesById[11] = "equal"] = 11;
        values[valuesById[12] = "notequal"] = 12;
        values[valuesById[13] = "less"] = 13;
        values[valuesById[14] = "greater"] = 14;
        values[valuesById[15] = "negate"] = 15;
        values[valuesById[16] = "contains"] = 16;
        values[valuesById[17] = "notcontains"] = 17;
        values[valuesById[18] = "anyof"] = 18;
        values[valuesById[19] = "allof"] = 19;
        values[valuesById[20] = "empty"] = 20;
        values[valuesById[21] = "notempty"] = 21;
        return values;
    })();

    tiny_expression.Const = (function() {

        /**
         * Properties of a Const.
         * @memberof tiny_expression
         * @interface IConst
         * @property {tiny_expression.ENodeType} type Const type
         * @property {number|null} [numberValue] Const numberValue
         * @property {string|null} [stringValue] Const stringValue
         * @property {boolean|null} [boolValue] Const boolValue
         */

        /**
         * Constructs a new Const.
         * @memberof tiny_expression
         * @classdesc Represents a Const.
         * @implements IConst
         * @constructor
         * @param {tiny_expression.IConst=} [properties] Properties to set
         */
        function Const(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Const type.
         * @member {tiny_expression.ENodeType} type
         * @memberof tiny_expression.Const
         * @instance
         */
        Const.prototype.type = 0;

        /**
         * Const numberValue.
         * @member {number|null|undefined} numberValue
         * @memberof tiny_expression.Const
         * @instance
         */
        Const.prototype.numberValue = null;

        /**
         * Const stringValue.
         * @member {string|null|undefined} stringValue
         * @memberof tiny_expression.Const
         * @instance
         */
        Const.prototype.stringValue = null;

        /**
         * Const boolValue.
         * @member {boolean|null|undefined} boolValue
         * @memberof tiny_expression.Const
         * @instance
         */
        Const.prototype.boolValue = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Const value.
         * @member {"numberValue"|"stringValue"|"boolValue"|undefined} value
         * @memberof tiny_expression.Const
         * @instance
         */
        Object.defineProperty(Const.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["numberValue", "stringValue", "boolValue"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Const instance using the specified properties.
         * @function create
         * @memberof tiny_expression.Const
         * @static
         * @param {tiny_expression.IConst=} [properties] Properties to set
         * @returns {tiny_expression.Const} Const instance
         */
        Const.create = function create(properties) {
            return new Const(properties);
        };

        /**
         * Encodes the specified Const message. Does not implicitly {@link tiny_expression.Const.verify|verify} messages.
         * @function encode
         * @memberof tiny_expression.Const
         * @static
         * @param {tiny_expression.IConst} message Const message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Const.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.numberValue);
            if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
            if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
            return writer;
        };

        /**
         * Encodes the specified Const message, length delimited. Does not implicitly {@link tiny_expression.Const.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tiny_expression.Const
         * @static
         * @param {tiny_expression.IConst} message Const message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Const.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Const message from the specified reader or buffer.
         * @function decode
         * @memberof tiny_expression.Const
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tiny_expression.Const} Const
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Const.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tiny_expression.Const();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.numberValue = reader.float();
                        break;
                    }
                case 3: {
                        message.stringValue = reader.string();
                        break;
                    }
                case 4: {
                        message.boolValue = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a Const message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tiny_expression.Const
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tiny_expression.Const} Const
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Const.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Const message.
         * @function verify
         * @memberof tiny_expression.Const
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Const.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                properties.value = 1;
                if (typeof message.numberValue !== "number")
                    return "numberValue: number expected";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
            }
            if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                if (typeof message.boolValue !== "boolean")
                    return "boolValue: boolean expected";
            }
            return null;
        };

        /**
         * Creates a Const message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tiny_expression.Const
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tiny_expression.Const} Const
         */
        Const.fromObject = function fromObject(object) {
            if (object instanceof $root.tiny_expression.Const)
                return object;
            var message = new $root.tiny_expression.Const();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Evariable":
            case 0:
                message.type = 0;
                break;
            case "EConst":
            case 1:
                message.type = 1;
                break;
            case "EUnaryOp":
            case 2:
                message.type = 2;
                break;
            case "EUFuncOp":
            case 3:
                message.type = 3;
                break;
            case "EBinaryOp":
            case 4:
                message.type = 4;
                break;
            case "EArrayOp":
            case 5:
                message.type = 5;
                break;
            }
            if (object.numberValue != null)
                message.numberValue = Number(object.numberValue);
            if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
            if (object.boolValue != null)
                message.boolValue = Boolean(object.boolValue);
            return message;
        };

        /**
         * Creates a plain object from a Const message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tiny_expression.Const
         * @static
         * @param {tiny_expression.Const} message Const
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Const.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "Evariable" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tiny_expression.ENodeType[message.type] === undefined ? message.type : $root.tiny_expression.ENodeType[message.type] : message.type;
            if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                if (options.oneofs)
                    object.value = "numberValue";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                object.stringValue = message.stringValue;
                if (options.oneofs)
                    object.value = "stringValue";
            }
            if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                object.boolValue = message.boolValue;
                if (options.oneofs)
                    object.value = "boolValue";
            }
            return object;
        };

        /**
         * Converts this Const to JSON.
         * @function toJSON
         * @memberof tiny_expression.Const
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Const.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Const
         * @function getTypeUrl
         * @memberof tiny_expression.Const
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Const.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tiny_expression.Const";
        };

        return Const;
    })();

    tiny_expression.Variable = (function() {

        /**
         * Properties of a Variable.
         * @memberof tiny_expression
         * @interface IVariable
         * @property {tiny_expression.ENodeType} type Variable type
         * @property {string} name Variable name
         */

        /**
         * Constructs a new Variable.
         * @memberof tiny_expression
         * @classdesc Represents a Variable.
         * @implements IVariable
         * @constructor
         * @param {tiny_expression.IVariable=} [properties] Properties to set
         */
        function Variable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Variable type.
         * @member {tiny_expression.ENodeType} type
         * @memberof tiny_expression.Variable
         * @instance
         */
        Variable.prototype.type = 0;

        /**
         * Variable name.
         * @member {string} name
         * @memberof tiny_expression.Variable
         * @instance
         */
        Variable.prototype.name = "";

        /**
         * Creates a new Variable instance using the specified properties.
         * @function create
         * @memberof tiny_expression.Variable
         * @static
         * @param {tiny_expression.IVariable=} [properties] Properties to set
         * @returns {tiny_expression.Variable} Variable instance
         */
        Variable.create = function create(properties) {
            return new Variable(properties);
        };

        /**
         * Encodes the specified Variable message. Does not implicitly {@link tiny_expression.Variable.verify|verify} messages.
         * @function encode
         * @memberof tiny_expression.Variable
         * @static
         * @param {tiny_expression.IVariable} message Variable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Variable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Variable message, length delimited. Does not implicitly {@link tiny_expression.Variable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tiny_expression.Variable
         * @static
         * @param {tiny_expression.IVariable} message Variable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Variable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Variable message from the specified reader or buffer.
         * @function decode
         * @memberof tiny_expression.Variable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tiny_expression.Variable} Variable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Variable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tiny_expression.Variable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a Variable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tiny_expression.Variable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tiny_expression.Variable} Variable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Variable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Variable message.
         * @function verify
         * @memberof tiny_expression.Variable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Variable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        /**
         * Creates a Variable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tiny_expression.Variable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tiny_expression.Variable} Variable
         */
        Variable.fromObject = function fromObject(object) {
            if (object instanceof $root.tiny_expression.Variable)
                return object;
            var message = new $root.tiny_expression.Variable();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Evariable":
            case 0:
                message.type = 0;
                break;
            case "EConst":
            case 1:
                message.type = 1;
                break;
            case "EUnaryOp":
            case 2:
                message.type = 2;
                break;
            case "EUFuncOp":
            case 3:
                message.type = 3;
                break;
            case "EBinaryOp":
            case 4:
                message.type = 4;
                break;
            case "EArrayOp":
            case 5:
                message.type = 5;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Variable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tiny_expression.Variable
         * @static
         * @param {tiny_expression.Variable} message Variable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Variable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "Evariable" : 0;
                object.name = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tiny_expression.ENodeType[message.type] === undefined ? message.type : $root.tiny_expression.ENodeType[message.type] : message.type;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Variable to JSON.
         * @function toJSON
         * @memberof tiny_expression.Variable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Variable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Variable
         * @function getTypeUrl
         * @memberof tiny_expression.Variable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Variable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tiny_expression.Variable";
        };

        return Variable;
    })();

    tiny_expression.Operand = (function() {

        /**
         * Properties of an Operand.
         * @memberof tiny_expression
         * @interface IOperand
         * @property {tiny_expression.ENodeType} type Operand type
         * @property {tiny_expression.IUnaryOperand|null} [unaryOperad] Operand unaryOperad
         */

        /**
         * Constructs a new Operand.
         * @memberof tiny_expression
         * @classdesc Represents an Operand.
         * @implements IOperand
         * @constructor
         * @param {tiny_expression.IOperand=} [properties] Properties to set
         */
        function Operand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Operand type.
         * @member {tiny_expression.ENodeType} type
         * @memberof tiny_expression.Operand
         * @instance
         */
        Operand.prototype.type = 0;

        /**
         * Operand unaryOperad.
         * @member {tiny_expression.IUnaryOperand|null|undefined} unaryOperad
         * @memberof tiny_expression.Operand
         * @instance
         */
        Operand.prototype.unaryOperad = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Operand value.
         * @member {"unaryOperad"|undefined} value
         * @memberof tiny_expression.Operand
         * @instance
         */
        Object.defineProperty(Operand.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["unaryOperad"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Operand instance using the specified properties.
         * @function create
         * @memberof tiny_expression.Operand
         * @static
         * @param {tiny_expression.IOperand=} [properties] Properties to set
         * @returns {tiny_expression.Operand} Operand instance
         */
        Operand.create = function create(properties) {
            return new Operand(properties);
        };

        /**
         * Encodes the specified Operand message. Does not implicitly {@link tiny_expression.Operand.verify|verify} messages.
         * @function encode
         * @memberof tiny_expression.Operand
         * @static
         * @param {tiny_expression.IOperand} message Operand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.unaryOperad != null && Object.hasOwnProperty.call(message, "unaryOperad"))
                $root.tiny_expression.UnaryOperand.encode(message.unaryOperad, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Operand message, length delimited. Does not implicitly {@link tiny_expression.Operand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tiny_expression.Operand
         * @static
         * @param {tiny_expression.IOperand} message Operand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Operand message from the specified reader or buffer.
         * @function decode
         * @memberof tiny_expression.Operand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tiny_expression.Operand} Operand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tiny_expression.Operand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.unaryOperad = $root.tiny_expression.UnaryOperand.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes an Operand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tiny_expression.Operand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tiny_expression.Operand} Operand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Operand message.
         * @function verify
         * @memberof tiny_expression.Operand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            if (message.unaryOperad != null && message.hasOwnProperty("unaryOperad")) {
                properties.value = 1;
                {
                    var error = $root.tiny_expression.UnaryOperand.verify(message.unaryOperad);
                    if (error)
                        return "unaryOperad." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Operand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tiny_expression.Operand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tiny_expression.Operand} Operand
         */
        Operand.fromObject = function fromObject(object) {
            if (object instanceof $root.tiny_expression.Operand)
                return object;
            var message = new $root.tiny_expression.Operand();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Evariable":
            case 0:
                message.type = 0;
                break;
            case "EConst":
            case 1:
                message.type = 1;
                break;
            case "EUnaryOp":
            case 2:
                message.type = 2;
                break;
            case "EUFuncOp":
            case 3:
                message.type = 3;
                break;
            case "EBinaryOp":
            case 4:
                message.type = 4;
                break;
            case "EArrayOp":
            case 5:
                message.type = 5;
                break;
            }
            if (object.unaryOperad != null) {
                if (typeof object.unaryOperad !== "object")
                    throw TypeError(".tiny_expression.Operand.unaryOperad: object expected");
                message.unaryOperad = $root.tiny_expression.UnaryOperand.fromObject(object.unaryOperad);
            }
            return message;
        };

        /**
         * Creates a plain object from an Operand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tiny_expression.Operand
         * @static
         * @param {tiny_expression.Operand} message Operand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Operand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "Evariable" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tiny_expression.ENodeType[message.type] === undefined ? message.type : $root.tiny_expression.ENodeType[message.type] : message.type;
            if (message.unaryOperad != null && message.hasOwnProperty("unaryOperad")) {
                object.unaryOperad = $root.tiny_expression.UnaryOperand.toObject(message.unaryOperad, options);
                if (options.oneofs)
                    object.value = "unaryOperad";
            }
            return object;
        };

        /**
         * Converts this Operand to JSON.
         * @function toJSON
         * @memberof tiny_expression.Operand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Operand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Operand
         * @function getTypeUrl
         * @memberof tiny_expression.Operand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Operand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tiny_expression.Operand";
        };

        return Operand;
    })();

    tiny_expression.TargetValue = (function() {

        /**
         * Properties of a TargetValue.
         * @memberof tiny_expression
         * @interface ITargetValue
         * @property {tiny_expression.ENodeType} type TargetValue type
         * @property {tiny_expression.IConst|null} [constVal] TargetValue constVal
         * @property {tiny_expression.IVariable|null} [variableVal] TargetValue variableVal
         * @property {tiny_expression.IUnaryOperand|null} [unaryOperand] TargetValue unaryOperand
         * @property {tiny_expression.IBinaryOperand|null} [binaryOperand] TargetValue binaryOperand
         */

        /**
         * Constructs a new TargetValue.
         * @memberof tiny_expression
         * @classdesc Represents a TargetValue.
         * @implements ITargetValue
         * @constructor
         * @param {tiny_expression.ITargetValue=} [properties] Properties to set
         */
        function TargetValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TargetValue type.
         * @member {tiny_expression.ENodeType} type
         * @memberof tiny_expression.TargetValue
         * @instance
         */
        TargetValue.prototype.type = 0;

        /**
         * TargetValue constVal.
         * @member {tiny_expression.IConst|null|undefined} constVal
         * @memberof tiny_expression.TargetValue
         * @instance
         */
        TargetValue.prototype.constVal = null;

        /**
         * TargetValue variableVal.
         * @member {tiny_expression.IVariable|null|undefined} variableVal
         * @memberof tiny_expression.TargetValue
         * @instance
         */
        TargetValue.prototype.variableVal = null;

        /**
         * TargetValue unaryOperand.
         * @member {tiny_expression.IUnaryOperand|null|undefined} unaryOperand
         * @memberof tiny_expression.TargetValue
         * @instance
         */
        TargetValue.prototype.unaryOperand = null;

        /**
         * TargetValue binaryOperand.
         * @member {tiny_expression.IBinaryOperand|null|undefined} binaryOperand
         * @memberof tiny_expression.TargetValue
         * @instance
         */
        TargetValue.prototype.binaryOperand = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * TargetValue value.
         * @member {"constVal"|"variableVal"|"unaryOperand"|"binaryOperand"|undefined} value
         * @memberof tiny_expression.TargetValue
         * @instance
         */
        Object.defineProperty(TargetValue.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["constVal", "variableVal", "unaryOperand", "binaryOperand"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new TargetValue instance using the specified properties.
         * @function create
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {tiny_expression.ITargetValue=} [properties] Properties to set
         * @returns {tiny_expression.TargetValue} TargetValue instance
         */
        TargetValue.create = function create(properties) {
            return new TargetValue(properties);
        };

        /**
         * Encodes the specified TargetValue message. Does not implicitly {@link tiny_expression.TargetValue.verify|verify} messages.
         * @function encode
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {tiny_expression.ITargetValue} message TargetValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TargetValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.constVal != null && Object.hasOwnProperty.call(message, "constVal"))
                $root.tiny_expression.Const.encode(message.constVal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.variableVal != null && Object.hasOwnProperty.call(message, "variableVal"))
                $root.tiny_expression.Variable.encode(message.variableVal, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.unaryOperand != null && Object.hasOwnProperty.call(message, "unaryOperand"))
                $root.tiny_expression.UnaryOperand.encode(message.unaryOperand, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.binaryOperand != null && Object.hasOwnProperty.call(message, "binaryOperand"))
                $root.tiny_expression.BinaryOperand.encode(message.binaryOperand, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TargetValue message, length delimited. Does not implicitly {@link tiny_expression.TargetValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {tiny_expression.ITargetValue} message TargetValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TargetValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TargetValue message from the specified reader or buffer.
         * @function decode
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tiny_expression.TargetValue} TargetValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TargetValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tiny_expression.TargetValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.constVal = $root.tiny_expression.Const.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.variableVal = $root.tiny_expression.Variable.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.unaryOperand = $root.tiny_expression.UnaryOperand.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.binaryOperand = $root.tiny_expression.BinaryOperand.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a TargetValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tiny_expression.TargetValue} TargetValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TargetValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TargetValue message.
         * @function verify
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TargetValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            if (message.constVal != null && message.hasOwnProperty("constVal")) {
                properties.value = 1;
                {
                    var error = $root.tiny_expression.Const.verify(message.constVal);
                    if (error)
                        return "constVal." + error;
                }
            }
            if (message.variableVal != null && message.hasOwnProperty("variableVal")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    var error = $root.tiny_expression.Variable.verify(message.variableVal);
                    if (error)
                        return "variableVal." + error;
                }
            }
            if (message.unaryOperand != null && message.hasOwnProperty("unaryOperand")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    var error = $root.tiny_expression.UnaryOperand.verify(message.unaryOperand);
                    if (error)
                        return "unaryOperand." + error;
                }
            }
            if (message.binaryOperand != null && message.hasOwnProperty("binaryOperand")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    var error = $root.tiny_expression.BinaryOperand.verify(message.binaryOperand);
                    if (error)
                        return "binaryOperand." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TargetValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tiny_expression.TargetValue} TargetValue
         */
        TargetValue.fromObject = function fromObject(object) {
            if (object instanceof $root.tiny_expression.TargetValue)
                return object;
            var message = new $root.tiny_expression.TargetValue();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Evariable":
            case 0:
                message.type = 0;
                break;
            case "EConst":
            case 1:
                message.type = 1;
                break;
            case "EUnaryOp":
            case 2:
                message.type = 2;
                break;
            case "EUFuncOp":
            case 3:
                message.type = 3;
                break;
            case "EBinaryOp":
            case 4:
                message.type = 4;
                break;
            case "EArrayOp":
            case 5:
                message.type = 5;
                break;
            }
            if (object.constVal != null) {
                if (typeof object.constVal !== "object")
                    throw TypeError(".tiny_expression.TargetValue.constVal: object expected");
                message.constVal = $root.tiny_expression.Const.fromObject(object.constVal);
            }
            if (object.variableVal != null) {
                if (typeof object.variableVal !== "object")
                    throw TypeError(".tiny_expression.TargetValue.variableVal: object expected");
                message.variableVal = $root.tiny_expression.Variable.fromObject(object.variableVal);
            }
            if (object.unaryOperand != null) {
                if (typeof object.unaryOperand !== "object")
                    throw TypeError(".tiny_expression.TargetValue.unaryOperand: object expected");
                message.unaryOperand = $root.tiny_expression.UnaryOperand.fromObject(object.unaryOperand);
            }
            if (object.binaryOperand != null) {
                if (typeof object.binaryOperand !== "object")
                    throw TypeError(".tiny_expression.TargetValue.binaryOperand: object expected");
                message.binaryOperand = $root.tiny_expression.BinaryOperand.fromObject(object.binaryOperand);
            }
            return message;
        };

        /**
         * Creates a plain object from a TargetValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {tiny_expression.TargetValue} message TargetValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TargetValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "Evariable" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tiny_expression.ENodeType[message.type] === undefined ? message.type : $root.tiny_expression.ENodeType[message.type] : message.type;
            if (message.constVal != null && message.hasOwnProperty("constVal")) {
                object.constVal = $root.tiny_expression.Const.toObject(message.constVal, options);
                if (options.oneofs)
                    object.value = "constVal";
            }
            if (message.variableVal != null && message.hasOwnProperty("variableVal")) {
                object.variableVal = $root.tiny_expression.Variable.toObject(message.variableVal, options);
                if (options.oneofs)
                    object.value = "variableVal";
            }
            if (message.unaryOperand != null && message.hasOwnProperty("unaryOperand")) {
                object.unaryOperand = $root.tiny_expression.UnaryOperand.toObject(message.unaryOperand, options);
                if (options.oneofs)
                    object.value = "unaryOperand";
            }
            if (message.binaryOperand != null && message.hasOwnProperty("binaryOperand")) {
                object.binaryOperand = $root.tiny_expression.BinaryOperand.toObject(message.binaryOperand, options);
                if (options.oneofs)
                    object.value = "binaryOperand";
            }
            return object;
        };

        /**
         * Converts this TargetValue to JSON.
         * @function toJSON
         * @memberof tiny_expression.TargetValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TargetValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TargetValue
         * @function getTypeUrl
         * @memberof tiny_expression.TargetValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TargetValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tiny_expression.TargetValue";
        };

        return TargetValue;
    })();

    tiny_expression.UnaryOperand = (function() {

        /**
         * Properties of an UnaryOperand.
         * @memberof tiny_expression
         * @interface IUnaryOperand
         * @property {tiny_expression.ENodeType} type UnaryOperand type
         * @property {tiny_expression.ITargetValue} target UnaryOperand target
         */

        /**
         * Constructs a new UnaryOperand.
         * @memberof tiny_expression
         * @classdesc Represents an UnaryOperand.
         * @implements IUnaryOperand
         * @constructor
         * @param {tiny_expression.IUnaryOperand=} [properties] Properties to set
         */
        function UnaryOperand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnaryOperand type.
         * @member {tiny_expression.ENodeType} type
         * @memberof tiny_expression.UnaryOperand
         * @instance
         */
        UnaryOperand.prototype.type = 0;

        /**
         * UnaryOperand target.
         * @member {tiny_expression.ITargetValue} target
         * @memberof tiny_expression.UnaryOperand
         * @instance
         */
        UnaryOperand.prototype.target = null;

        /**
         * Creates a new UnaryOperand instance using the specified properties.
         * @function create
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {tiny_expression.IUnaryOperand=} [properties] Properties to set
         * @returns {tiny_expression.UnaryOperand} UnaryOperand instance
         */
        UnaryOperand.create = function create(properties) {
            return new UnaryOperand(properties);
        };

        /**
         * Encodes the specified UnaryOperand message. Does not implicitly {@link tiny_expression.UnaryOperand.verify|verify} messages.
         * @function encode
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {tiny_expression.IUnaryOperand} message UnaryOperand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnaryOperand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            $root.tiny_expression.TargetValue.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UnaryOperand message, length delimited. Does not implicitly {@link tiny_expression.UnaryOperand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {tiny_expression.IUnaryOperand} message UnaryOperand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnaryOperand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnaryOperand message from the specified reader or buffer.
         * @function decode
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tiny_expression.UnaryOperand} UnaryOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnaryOperand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tiny_expression.UnaryOperand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.target = $root.tiny_expression.TargetValue.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("target"))
                throw $util.ProtocolError("missing required 'target'", { instance: message });
            return message;
        };

        /**
         * Decodes an UnaryOperand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tiny_expression.UnaryOperand} UnaryOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnaryOperand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnaryOperand message.
         * @function verify
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnaryOperand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            {
                var error = $root.tiny_expression.TargetValue.verify(message.target);
                if (error)
                    return "target." + error;
            }
            return null;
        };

        /**
         * Creates an UnaryOperand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tiny_expression.UnaryOperand} UnaryOperand
         */
        UnaryOperand.fromObject = function fromObject(object) {
            if (object instanceof $root.tiny_expression.UnaryOperand)
                return object;
            var message = new $root.tiny_expression.UnaryOperand();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Evariable":
            case 0:
                message.type = 0;
                break;
            case "EConst":
            case 1:
                message.type = 1;
                break;
            case "EUnaryOp":
            case 2:
                message.type = 2;
                break;
            case "EUFuncOp":
            case 3:
                message.type = 3;
                break;
            case "EBinaryOp":
            case 4:
                message.type = 4;
                break;
            case "EArrayOp":
            case 5:
                message.type = 5;
                break;
            }
            if (object.target != null) {
                if (typeof object.target !== "object")
                    throw TypeError(".tiny_expression.UnaryOperand.target: object expected");
                message.target = $root.tiny_expression.TargetValue.fromObject(object.target);
            }
            return message;
        };

        /**
         * Creates a plain object from an UnaryOperand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {tiny_expression.UnaryOperand} message UnaryOperand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnaryOperand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "Evariable" : 0;
                object.target = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tiny_expression.ENodeType[message.type] === undefined ? message.type : $root.tiny_expression.ENodeType[message.type] : message.type;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = $root.tiny_expression.TargetValue.toObject(message.target, options);
            return object;
        };

        /**
         * Converts this UnaryOperand to JSON.
         * @function toJSON
         * @memberof tiny_expression.UnaryOperand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnaryOperand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UnaryOperand
         * @function getTypeUrl
         * @memberof tiny_expression.UnaryOperand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UnaryOperand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tiny_expression.UnaryOperand";
        };

        return UnaryOperand;
    })();

    tiny_expression.BinaryOperand = (function() {

        /**
         * Properties of a BinaryOperand.
         * @memberof tiny_expression
         * @interface IBinaryOperand
         * @property {tiny_expression.ENodeType} type BinaryOperand type
         * @property {tiny_expression.EInstructionType} op BinaryOperand op
         * @property {tiny_expression.ITargetValue} left BinaryOperand left
         * @property {tiny_expression.ITargetValue} right BinaryOperand right
         * @property {boolean} isArithmeticOp BinaryOperand isArithmeticOp
         */

        /**
         * Constructs a new BinaryOperand.
         * @memberof tiny_expression
         * @classdesc Represents a BinaryOperand.
         * @implements IBinaryOperand
         * @constructor
         * @param {tiny_expression.IBinaryOperand=} [properties] Properties to set
         */
        function BinaryOperand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BinaryOperand type.
         * @member {tiny_expression.ENodeType} type
         * @memberof tiny_expression.BinaryOperand
         * @instance
         */
        BinaryOperand.prototype.type = 0;

        /**
         * BinaryOperand op.
         * @member {tiny_expression.EInstructionType} op
         * @memberof tiny_expression.BinaryOperand
         * @instance
         */
        BinaryOperand.prototype.op = 1;

        /**
         * BinaryOperand left.
         * @member {tiny_expression.ITargetValue} left
         * @memberof tiny_expression.BinaryOperand
         * @instance
         */
        BinaryOperand.prototype.left = null;

        /**
         * BinaryOperand right.
         * @member {tiny_expression.ITargetValue} right
         * @memberof tiny_expression.BinaryOperand
         * @instance
         */
        BinaryOperand.prototype.right = null;

        /**
         * BinaryOperand isArithmeticOp.
         * @member {boolean} isArithmeticOp
         * @memberof tiny_expression.BinaryOperand
         * @instance
         */
        BinaryOperand.prototype.isArithmeticOp = false;

        /**
         * Creates a new BinaryOperand instance using the specified properties.
         * @function create
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {tiny_expression.IBinaryOperand=} [properties] Properties to set
         * @returns {tiny_expression.BinaryOperand} BinaryOperand instance
         */
        BinaryOperand.create = function create(properties) {
            return new BinaryOperand(properties);
        };

        /**
         * Encodes the specified BinaryOperand message. Does not implicitly {@link tiny_expression.BinaryOperand.verify|verify} messages.
         * @function encode
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {tiny_expression.IBinaryOperand} message BinaryOperand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BinaryOperand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.op);
            $root.tiny_expression.TargetValue.encode(message.left, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.tiny_expression.TargetValue.encode(message.right, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isArithmeticOp);
            return writer;
        };

        /**
         * Encodes the specified BinaryOperand message, length delimited. Does not implicitly {@link tiny_expression.BinaryOperand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {tiny_expression.IBinaryOperand} message BinaryOperand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BinaryOperand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BinaryOperand message from the specified reader or buffer.
         * @function decode
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tiny_expression.BinaryOperand} BinaryOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BinaryOperand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tiny_expression.BinaryOperand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.op = reader.int32();
                        break;
                    }
                case 3: {
                        message.left = $root.tiny_expression.TargetValue.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.right = $root.tiny_expression.TargetValue.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.isArithmeticOp = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("op"))
                throw $util.ProtocolError("missing required 'op'", { instance: message });
            if (!message.hasOwnProperty("left"))
                throw $util.ProtocolError("missing required 'left'", { instance: message });
            if (!message.hasOwnProperty("right"))
                throw $util.ProtocolError("missing required 'right'", { instance: message });
            if (!message.hasOwnProperty("isArithmeticOp"))
                throw $util.ProtocolError("missing required 'isArithmeticOp'", { instance: message });
            return message;
        };

        /**
         * Decodes a BinaryOperand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tiny_expression.BinaryOperand} BinaryOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BinaryOperand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BinaryOperand message.
         * @function verify
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BinaryOperand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            switch (message.op) {
            default:
                return "op: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                break;
            }
            {
                var error = $root.tiny_expression.TargetValue.verify(message.left);
                if (error)
                    return "left." + error;
            }
            {
                var error = $root.tiny_expression.TargetValue.verify(message.right);
                if (error)
                    return "right." + error;
            }
            if (typeof message.isArithmeticOp !== "boolean")
                return "isArithmeticOp: boolean expected";
            return null;
        };

        /**
         * Creates a BinaryOperand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tiny_expression.BinaryOperand} BinaryOperand
         */
        BinaryOperand.fromObject = function fromObject(object) {
            if (object instanceof $root.tiny_expression.BinaryOperand)
                return object;
            var message = new $root.tiny_expression.BinaryOperand();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Evariable":
            case 0:
                message.type = 0;
                break;
            case "EConst":
            case 1:
                message.type = 1;
                break;
            case "EUnaryOp":
            case 2:
                message.type = 2;
                break;
            case "EUFuncOp":
            case 3:
                message.type = 3;
                break;
            case "EBinaryOp":
            case 4:
                message.type = 4;
                break;
            case "EArrayOp":
            case 5:
                message.type = 5;
                break;
            }
            switch (object.op) {
            default:
                if (typeof object.op === "number") {
                    message.op = object.op;
                    break;
                }
                break;
            case "plus":
            case 1:
                message.op = 1;
                break;
            case "minus":
            case 2:
                message.op = 2;
                break;
            case "mul":
            case 3:
                message.op = 3;
                break;
            case "div":
            case 4:
                message.op = 4;
                break;
            case "mod":
            case 5:
                message.op = 5;
                break;
            case "power":
            case 6:
                message.op = 6;
                break;
            case "and":
            case 7:
                message.op = 7;
                break;
            case "or":
            case 8:
                message.op = 8;
                break;
            case "lessorequal":
            case 9:
                message.op = 9;
                break;
            case "greaterorequal":
            case 10:
                message.op = 10;
                break;
            case "equal":
            case 11:
                message.op = 11;
                break;
            case "notequal":
            case 12:
                message.op = 12;
                break;
            case "less":
            case 13:
                message.op = 13;
                break;
            case "greater":
            case 14:
                message.op = 14;
                break;
            case "negate":
            case 15:
                message.op = 15;
                break;
            case "contains":
            case 16:
                message.op = 16;
                break;
            case "notcontains":
            case 17:
                message.op = 17;
                break;
            case "anyof":
            case 18:
                message.op = 18;
                break;
            case "allof":
            case 19:
                message.op = 19;
                break;
            case "empty":
            case 20:
                message.op = 20;
                break;
            case "notempty":
            case 21:
                message.op = 21;
                break;
            }
            if (object.left != null) {
                if (typeof object.left !== "object")
                    throw TypeError(".tiny_expression.BinaryOperand.left: object expected");
                message.left = $root.tiny_expression.TargetValue.fromObject(object.left);
            }
            if (object.right != null) {
                if (typeof object.right !== "object")
                    throw TypeError(".tiny_expression.BinaryOperand.right: object expected");
                message.right = $root.tiny_expression.TargetValue.fromObject(object.right);
            }
            if (object.isArithmeticOp != null)
                message.isArithmeticOp = Boolean(object.isArithmeticOp);
            return message;
        };

        /**
         * Creates a plain object from a BinaryOperand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {tiny_expression.BinaryOperand} message BinaryOperand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BinaryOperand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "Evariable" : 0;
                object.op = options.enums === String ? "plus" : 1;
                object.left = null;
                object.right = null;
                object.isArithmeticOp = false;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tiny_expression.ENodeType[message.type] === undefined ? message.type : $root.tiny_expression.ENodeType[message.type] : message.type;
            if (message.op != null && message.hasOwnProperty("op"))
                object.op = options.enums === String ? $root.tiny_expression.EInstructionType[message.op] === undefined ? message.op : $root.tiny_expression.EInstructionType[message.op] : message.op;
            if (message.left != null && message.hasOwnProperty("left"))
                object.left = $root.tiny_expression.TargetValue.toObject(message.left, options);
            if (message.right != null && message.hasOwnProperty("right"))
                object.right = $root.tiny_expression.TargetValue.toObject(message.right, options);
            if (message.isArithmeticOp != null && message.hasOwnProperty("isArithmeticOp"))
                object.isArithmeticOp = message.isArithmeticOp;
            return object;
        };

        /**
         * Converts this BinaryOperand to JSON.
         * @function toJSON
         * @memberof tiny_expression.BinaryOperand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BinaryOperand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BinaryOperand
         * @function getTypeUrl
         * @memberof tiny_expression.BinaryOperand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BinaryOperand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tiny_expression.BinaryOperand";
        };

        return BinaryOperand;
    })();

    tiny_expression.ArrayOperand = (function() {

        /**
         * Properties of an ArrayOperand.
         * @memberof tiny_expression
         * @interface IArrayOperand
         * @property {tiny_expression.ENodeType} type ArrayOperand type
         * @property {Array.<tiny_expression.ITargetValue>|null} [data] ArrayOperand data
         */

        /**
         * Constructs a new ArrayOperand.
         * @memberof tiny_expression
         * @classdesc Represents an ArrayOperand.
         * @implements IArrayOperand
         * @constructor
         * @param {tiny_expression.IArrayOperand=} [properties] Properties to set
         */
        function ArrayOperand(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArrayOperand type.
         * @member {tiny_expression.ENodeType} type
         * @memberof tiny_expression.ArrayOperand
         * @instance
         */
        ArrayOperand.prototype.type = 0;

        /**
         * ArrayOperand data.
         * @member {Array.<tiny_expression.ITargetValue>} data
         * @memberof tiny_expression.ArrayOperand
         * @instance
         */
        ArrayOperand.prototype.data = $util.emptyArray;

        /**
         * Creates a new ArrayOperand instance using the specified properties.
         * @function create
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {tiny_expression.IArrayOperand=} [properties] Properties to set
         * @returns {tiny_expression.ArrayOperand} ArrayOperand instance
         */
        ArrayOperand.create = function create(properties) {
            return new ArrayOperand(properties);
        };

        /**
         * Encodes the specified ArrayOperand message. Does not implicitly {@link tiny_expression.ArrayOperand.verify|verify} messages.
         * @function encode
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {tiny_expression.IArrayOperand} message ArrayOperand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArrayOperand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.tiny_expression.TargetValue.encode(message.data[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArrayOperand message, length delimited. Does not implicitly {@link tiny_expression.ArrayOperand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {tiny_expression.IArrayOperand} message ArrayOperand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArrayOperand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArrayOperand message from the specified reader or buffer.
         * @function decode
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tiny_expression.ArrayOperand} ArrayOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArrayOperand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tiny_expression.ArrayOperand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.tiny_expression.TargetValue.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes an ArrayOperand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tiny_expression.ArrayOperand} ArrayOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArrayOperand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArrayOperand message.
         * @function verify
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArrayOperand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.tiny_expression.TargetValue.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ArrayOperand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tiny_expression.ArrayOperand} ArrayOperand
         */
        ArrayOperand.fromObject = function fromObject(object) {
            if (object instanceof $root.tiny_expression.ArrayOperand)
                return object;
            var message = new $root.tiny_expression.ArrayOperand();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Evariable":
            case 0:
                message.type = 0;
                break;
            case "EConst":
            case 1:
                message.type = 1;
                break;
            case "EUnaryOp":
            case 2:
                message.type = 2;
                break;
            case "EUFuncOp":
            case 3:
                message.type = 3;
                break;
            case "EBinaryOp":
            case 4:
                message.type = 4;
                break;
            case "EArrayOp":
            case 5:
                message.type = 5;
                break;
            }
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".tiny_expression.ArrayOperand.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".tiny_expression.ArrayOperand.data: object expected");
                    message.data[i] = $root.tiny_expression.TargetValue.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ArrayOperand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {tiny_expression.ArrayOperand} message ArrayOperand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArrayOperand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults)
                object.type = options.enums === String ? "Evariable" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tiny_expression.ENodeType[message.type] === undefined ? message.type : $root.tiny_expression.ENodeType[message.type] : message.type;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.tiny_expression.TargetValue.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this ArrayOperand to JSON.
         * @function toJSON
         * @memberof tiny_expression.ArrayOperand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArrayOperand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ArrayOperand
         * @function getTypeUrl
         * @memberof tiny_expression.ArrayOperand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ArrayOperand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tiny_expression.ArrayOperand";
        };

        return ArrayOperand;
    })();

    tiny_expression.FunctionOperand = (function() {

        /**
         * Properties of a FunctionOperand.
         * @memberof tiny_expression
         * @interface IFunctionOperand
         * @property {tiny_expression.ENodeType} type FunctionOperand type
         * @property {tiny_expression.IArrayOperand} params FunctionOperand params
         */

        /**
         * Constructs a new FunctionOperand.
         * @memberof tiny_expression
         * @classdesc Represents a FunctionOperand.
         * @implements IFunctionOperand
         * @constructor
         * @param {tiny_expression.IFunctionOperand=} [properties] Properties to set
         */
        function FunctionOperand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FunctionOperand type.
         * @member {tiny_expression.ENodeType} type
         * @memberof tiny_expression.FunctionOperand
         * @instance
         */
        FunctionOperand.prototype.type = 0;

        /**
         * FunctionOperand params.
         * @member {tiny_expression.IArrayOperand} params
         * @memberof tiny_expression.FunctionOperand
         * @instance
         */
        FunctionOperand.prototype.params = null;

        /**
         * Creates a new FunctionOperand instance using the specified properties.
         * @function create
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {tiny_expression.IFunctionOperand=} [properties] Properties to set
         * @returns {tiny_expression.FunctionOperand} FunctionOperand instance
         */
        FunctionOperand.create = function create(properties) {
            return new FunctionOperand(properties);
        };

        /**
         * Encodes the specified FunctionOperand message. Does not implicitly {@link tiny_expression.FunctionOperand.verify|verify} messages.
         * @function encode
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {tiny_expression.IFunctionOperand} message FunctionOperand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FunctionOperand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            $root.tiny_expression.ArrayOperand.encode(message.params, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FunctionOperand message, length delimited. Does not implicitly {@link tiny_expression.FunctionOperand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {tiny_expression.IFunctionOperand} message FunctionOperand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FunctionOperand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FunctionOperand message from the specified reader or buffer.
         * @function decode
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tiny_expression.FunctionOperand} FunctionOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FunctionOperand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tiny_expression.FunctionOperand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.params = $root.tiny_expression.ArrayOperand.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("params"))
                throw $util.ProtocolError("missing required 'params'", { instance: message });
            return message;
        };

        /**
         * Decodes a FunctionOperand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tiny_expression.FunctionOperand} FunctionOperand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FunctionOperand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FunctionOperand message.
         * @function verify
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FunctionOperand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            {
                var error = $root.tiny_expression.ArrayOperand.verify(message.params);
                if (error)
                    return "params." + error;
            }
            return null;
        };

        /**
         * Creates a FunctionOperand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tiny_expression.FunctionOperand} FunctionOperand
         */
        FunctionOperand.fromObject = function fromObject(object) {
            if (object instanceof $root.tiny_expression.FunctionOperand)
                return object;
            var message = new $root.tiny_expression.FunctionOperand();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Evariable":
            case 0:
                message.type = 0;
                break;
            case "EConst":
            case 1:
                message.type = 1;
                break;
            case "EUnaryOp":
            case 2:
                message.type = 2;
                break;
            case "EUFuncOp":
            case 3:
                message.type = 3;
                break;
            case "EBinaryOp":
            case 4:
                message.type = 4;
                break;
            case "EArrayOp":
            case 5:
                message.type = 5;
                break;
            }
            if (object.params != null) {
                if (typeof object.params !== "object")
                    throw TypeError(".tiny_expression.FunctionOperand.params: object expected");
                message.params = $root.tiny_expression.ArrayOperand.fromObject(object.params);
            }
            return message;
        };

        /**
         * Creates a plain object from a FunctionOperand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {tiny_expression.FunctionOperand} message FunctionOperand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FunctionOperand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "Evariable" : 0;
                object.params = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tiny_expression.ENodeType[message.type] === undefined ? message.type : $root.tiny_expression.ENodeType[message.type] : message.type;
            if (message.params != null && message.hasOwnProperty("params"))
                object.params = $root.tiny_expression.ArrayOperand.toObject(message.params, options);
            return object;
        };

        /**
         * Converts this FunctionOperand to JSON.
         * @function toJSON
         * @memberof tiny_expression.FunctionOperand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FunctionOperand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FunctionOperand
         * @function getTypeUrl
         * @memberof tiny_expression.FunctionOperand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FunctionOperand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tiny_expression.FunctionOperand";
        };

        return FunctionOperand;
    })();

    return tiny_expression;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type_url = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Any
             * @function getTypeUrl
             * @memberof google.protobuf.Any
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Any.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Any";
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
