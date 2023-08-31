/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stccommunity.iotdepinprotocol.iotdepinprotocol";

export interface EventPb {
  pubId: string;
  topic: string;
  pubType: string;
  payload: string;
  pubTime: number;
  creator: string;
}

function createBaseEventPb(): EventPb {
  return { pubId: "", topic: "", pubType: "", payload: "", pubTime: 0, creator: "" };
}

export const EventPb = {
  encode(message: EventPb, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubId !== "") {
      writer.uint32(10).string(message.pubId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.pubType !== "") {
      writer.uint32(26).string(message.pubType);
    }
    if (message.payload !== "") {
      writer.uint32(34).string(message.payload);
    }
    if (message.pubTime !== 0) {
      writer.uint32(40).int64(message.pubTime);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
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
          message.pubId = reader.string();
          break;
        case 2:
          message.topic = reader.string();
          break;
        case 3:
          message.pubType = reader.string();
          break;
        case 4:
          message.payload = reader.string();
          break;
        case 5:
          message.pubTime = longToNumber(reader.int64() as Long);
          break;
        case 6:
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
      pubId: isSet(object.pubId) ? String(object.pubId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      pubType: isSet(object.pubType) ? String(object.pubType) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
      pubTime: isSet(object.pubTime) ? Number(object.pubTime) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: EventPb): unknown {
    const obj: any = {};
    message.pubId !== undefined && (obj.pubId = message.pubId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.pubType !== undefined && (obj.pubType = message.pubType);
    message.payload !== undefined && (obj.payload = message.payload);
    message.pubTime !== undefined && (obj.pubTime = Math.round(message.pubTime));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPb>, I>>(object: I): EventPb {
    const message = createBaseEventPb();
    message.pubId = object.pubId ?? "";
    message.topic = object.topic ?? "";
    message.pubType = object.pubType ?? "";
    message.payload = object.payload ?? "";
    message.pubTime = object.pubTime ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
