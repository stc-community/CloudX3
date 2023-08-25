/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stccommunity.iotdepinprotocol.iotdepinprotocol";

export interface MsgCreateKv {
  creator: string;
  index: string;
  value: string;
}

export interface MsgCreateKvResponse {
}

export interface MsgUpdateKv {
  creator: string;
  index: string;
  value: string;
}

export interface MsgUpdateKvResponse {
}

export interface MsgDeleteKv {
  creator: string;
  index: string;
}

export interface MsgDeleteKvResponse {
}

export interface MsgCreateDevice {
  creator: string;
  address: string;
  value: string;
}

export interface MsgCreateDeviceResponse {
}

export interface MsgUpdateDevice {
  creator: string;
  address: string;
  value: string;
}

export interface MsgUpdateDeviceResponse {
}

export interface MsgDeleteDevice {
  creator: string;
  address: string;
}

export interface MsgDeleteDeviceResponse {
}

export interface MsgOracleOperator {
  creator: string;
  reqId: string;
  operatorType: string;
  data: string;
}

export interface MsgOracleOperatorResponse {
}

function createBaseMsgCreateKv(): MsgCreateKv {
  return { creator: "", index: "", value: "" };
}

export const MsgCreateKv = {
  encode(message: MsgCreateKv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateKv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateKv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateKv {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgCreateKv): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateKv>, I>>(object: I): MsgCreateKv {
    const message = createBaseMsgCreateKv();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgCreateKvResponse(): MsgCreateKvResponse {
  return {};
}

export const MsgCreateKvResponse = {
  encode(_: MsgCreateKvResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateKvResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateKvResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateKvResponse {
    return {};
  },

  toJSON(_: MsgCreateKvResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateKvResponse>, I>>(_: I): MsgCreateKvResponse {
    const message = createBaseMsgCreateKvResponse();
    return message;
  },
};

function createBaseMsgUpdateKv(): MsgUpdateKv {
  return { creator: "", index: "", value: "" };
}

export const MsgUpdateKv = {
  encode(message: MsgUpdateKv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateKv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateKv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateKv {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgUpdateKv): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateKv>, I>>(object: I): MsgUpdateKv {
    const message = createBaseMsgUpdateKv();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgUpdateKvResponse(): MsgUpdateKvResponse {
  return {};
}

export const MsgUpdateKvResponse = {
  encode(_: MsgUpdateKvResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateKvResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateKvResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateKvResponse {
    return {};
  },

  toJSON(_: MsgUpdateKvResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateKvResponse>, I>>(_: I): MsgUpdateKvResponse {
    const message = createBaseMsgUpdateKvResponse();
    return message;
  },
};

function createBaseMsgDeleteKv(): MsgDeleteKv {
  return { creator: "", index: "" };
}

export const MsgDeleteKv = {
  encode(message: MsgDeleteKv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteKv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteKv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteKv {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: MsgDeleteKv): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteKv>, I>>(object: I): MsgDeleteKv {
    const message = createBaseMsgDeleteKv();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseMsgDeleteKvResponse(): MsgDeleteKvResponse {
  return {};
}

export const MsgDeleteKvResponse = {
  encode(_: MsgDeleteKvResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteKvResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteKvResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteKvResponse {
    return {};
  },

  toJSON(_: MsgDeleteKvResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteKvResponse>, I>>(_: I): MsgDeleteKvResponse {
    const message = createBaseMsgDeleteKvResponse();
    return message;
  },
};

function createBaseMsgCreateDevice(): MsgCreateDevice {
  return { creator: "", address: "", value: "" };
}

export const MsgCreateDevice = {
  encode(message: MsgCreateDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDevice {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgCreateDevice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDevice>, I>>(object: I): MsgCreateDevice {
    const message = createBaseMsgCreateDevice();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgCreateDeviceResponse(): MsgCreateDeviceResponse {
  return {};
}

export const MsgCreateDeviceResponse = {
  encode(_: MsgCreateDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeviceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateDeviceResponse {
    return {};
  },

  toJSON(_: MsgCreateDeviceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDeviceResponse>, I>>(_: I): MsgCreateDeviceResponse {
    const message = createBaseMsgCreateDeviceResponse();
    return message;
  },
};

function createBaseMsgUpdateDevice(): MsgUpdateDevice {
  return { creator: "", address: "", value: "" };
}

export const MsgUpdateDevice = {
  encode(message: MsgUpdateDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDevice {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgUpdateDevice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDevice>, I>>(object: I): MsgUpdateDevice {
    const message = createBaseMsgUpdateDevice();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgUpdateDeviceResponse(): MsgUpdateDeviceResponse {
  return {};
}

export const MsgUpdateDeviceResponse = {
  encode(_: MsgUpdateDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeviceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDeviceResponse {
    return {};
  },

  toJSON(_: MsgUpdateDeviceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDeviceResponse>, I>>(_: I): MsgUpdateDeviceResponse {
    const message = createBaseMsgUpdateDeviceResponse();
    return message;
  },
};

function createBaseMsgDeleteDevice(): MsgDeleteDevice {
  return { creator: "", address: "" };
}

export const MsgDeleteDevice = {
  encode(message: MsgDeleteDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDevice {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgDeleteDevice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDevice>, I>>(object: I): MsgDeleteDevice {
    const message = createBaseMsgDeleteDevice();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgDeleteDeviceResponse(): MsgDeleteDeviceResponse {
  return {};
}

export const MsgDeleteDeviceResponse = {
  encode(_: MsgDeleteDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDeviceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDeviceResponse {
    return {};
  },

  toJSON(_: MsgDeleteDeviceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDeviceResponse>, I>>(_: I): MsgDeleteDeviceResponse {
    const message = createBaseMsgDeleteDeviceResponse();
    return message;
  },
};

function createBaseMsgOracleOperator(): MsgOracleOperator {
  return { creator: "", reqId: "", operatorType: "", data: "" };
}

export const MsgOracleOperator = {
  encode(message: MsgOracleOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reqId !== "") {
      writer.uint32(18).string(message.reqId);
    }
    if (message.operatorType !== "") {
      writer.uint32(26).string(message.operatorType);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reqId = reader.string();
          break;
        case 3:
          message.operatorType = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOracleOperator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      reqId: isSet(object.reqId) ? String(object.reqId) : "",
      operatorType: isSet(object.operatorType) ? String(object.operatorType) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: MsgOracleOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reqId !== undefined && (obj.reqId = message.reqId);
    message.operatorType !== undefined && (obj.operatorType = message.operatorType);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleOperator>, I>>(object: I): MsgOracleOperator {
    const message = createBaseMsgOracleOperator();
    message.creator = object.creator ?? "";
    message.reqId = object.reqId ?? "";
    message.operatorType = object.operatorType ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseMsgOracleOperatorResponse(): MsgOracleOperatorResponse {
  return {};
}

export const MsgOracleOperatorResponse = {
  encode(_: MsgOracleOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgOracleOperatorResponse {
    return {};
  },

  toJSON(_: MsgOracleOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleOperatorResponse>, I>>(_: I): MsgOracleOperatorResponse {
    const message = createBaseMsgOracleOperatorResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateKv(request: MsgCreateKv): Promise<MsgCreateKvResponse>;
  UpdateKv(request: MsgUpdateKv): Promise<MsgUpdateKvResponse>;
  DeleteKv(request: MsgDeleteKv): Promise<MsgDeleteKvResponse>;
  CreateDevice(request: MsgCreateDevice): Promise<MsgCreateDeviceResponse>;
  UpdateDevice(request: MsgUpdateDevice): Promise<MsgUpdateDeviceResponse>;
  DeleteDevice(request: MsgDeleteDevice): Promise<MsgDeleteDeviceResponse>;
  OracleOperator(request: MsgOracleOperator): Promise<MsgOracleOperatorResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateKv = this.CreateKv.bind(this);
    this.UpdateKv = this.UpdateKv.bind(this);
    this.DeleteKv = this.DeleteKv.bind(this);
    this.CreateDevice = this.CreateDevice.bind(this);
    this.UpdateDevice = this.UpdateDevice.bind(this);
    this.DeleteDevice = this.DeleteDevice.bind(this);
    this.OracleOperator = this.OracleOperator.bind(this);
  }
  CreateKv(request: MsgCreateKv): Promise<MsgCreateKvResponse> {
    const data = MsgCreateKv.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Msg", "CreateKv", data);
    return promise.then((data) => MsgCreateKvResponse.decode(new _m0.Reader(data)));
  }

  UpdateKv(request: MsgUpdateKv): Promise<MsgUpdateKvResponse> {
    const data = MsgUpdateKv.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Msg", "UpdateKv", data);
    return promise.then((data) => MsgUpdateKvResponse.decode(new _m0.Reader(data)));
  }

  DeleteKv(request: MsgDeleteKv): Promise<MsgDeleteKvResponse> {
    const data = MsgDeleteKv.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Msg", "DeleteKv", data);
    return promise.then((data) => MsgDeleteKvResponse.decode(new _m0.Reader(data)));
  }

  CreateDevice(request: MsgCreateDevice): Promise<MsgCreateDeviceResponse> {
    const data = MsgCreateDevice.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Msg", "CreateDevice", data);
    return promise.then((data) => MsgCreateDeviceResponse.decode(new _m0.Reader(data)));
  }

  UpdateDevice(request: MsgUpdateDevice): Promise<MsgUpdateDeviceResponse> {
    const data = MsgUpdateDevice.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Msg", "UpdateDevice", data);
    return promise.then((data) => MsgUpdateDeviceResponse.decode(new _m0.Reader(data)));
  }

  DeleteDevice(request: MsgDeleteDevice): Promise<MsgDeleteDeviceResponse> {
    const data = MsgDeleteDevice.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Msg", "DeleteDevice", data);
    return promise.then((data) => MsgDeleteDeviceResponse.decode(new _m0.Reader(data)));
  }

  OracleOperator(request: MsgOracleOperator): Promise<MsgOracleOperatorResponse> {
    const data = MsgOracleOperator.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Msg", "OracleOperator", data);
    return promise.then((data) => MsgOracleOperatorResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
