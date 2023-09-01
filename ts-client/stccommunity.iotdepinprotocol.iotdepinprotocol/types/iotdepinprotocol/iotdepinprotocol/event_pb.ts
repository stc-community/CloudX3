/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stccommunity.iotdepinprotocol.iotdepinprotocol";

export interface EventPb {
  index: string;
  deviceName: string;
  payload: string;
  creator: string;
}

function createBaseEventPb(): EventPb {
  return { index: "", deviceName: "", payload: "", creator: "" };
}

export const EventPb = {
  encode(message: EventPb, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPb {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPb();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.deviceName = reader.string();
          break;
        case 3:
          message.payload = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPb {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: EventPb): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.payload !== undefined && (obj.payload = message.payload);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPb>, I>>(object: I): EventPb {
    const message = createBaseEventPb();
    message.index = object.index ?? "";
    message.deviceName = object.deviceName ?? "";
    message.payload = object.payload ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

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
