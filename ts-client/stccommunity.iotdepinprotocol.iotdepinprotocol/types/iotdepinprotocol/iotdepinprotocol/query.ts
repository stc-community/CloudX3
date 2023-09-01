/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Device } from "./device";
import { EventPb } from "./event_pb";
import { Kv } from "./kv";
import { Params } from "./params";

export const protobufPackage = "stccommunity.iotdepinprotocol.iotdepinprotocol";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetKvRequest {
  index: string;
  creator: string;
}

export interface QueryGetKvResponse {
  kv: Kv | undefined;
}

export interface QueryAllKvRequest {
  pagination: PageRequest | undefined;
  creator: string;
}

export interface QueryAllKvResponse {
  kv: Kv[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDeviceRequest {
  address: string;
  creator: string;
}

export interface QueryGetDeviceResponse {
  device: Device | undefined;
}

export interface QueryAllDeviceRequest {
  pagination: PageRequest | undefined;
  creator: string;
}

export interface QueryAllDeviceResponse {
  device: Device[];
  pagination: PageResponse | undefined;
}

export interface QueryGetEventPbRequest {
  id: number;
}

export interface QueryGetEventPbResponse {
  EventPb: EventPb | undefined;
}

export interface QueryAllEventPbRequest {
  pagination: PageRequest | undefined;
  topic: string;
}

export interface QueryAllEventPbResponse {
  EventPb: EventPb[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetKvRequest(): QueryGetKvRequest {
  return { index: "", creator: "" };
}

export const QueryGetKvRequest = {
  encode(message: QueryGetKvRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetKvRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetKvRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKvRequest {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: QueryGetKvRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetKvRequest>, I>>(object: I): QueryGetKvRequest {
    const message = createBaseQueryGetKvRequest();
    message.index = object.index ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseQueryGetKvResponse(): QueryGetKvResponse {
  return { kv: undefined };
}

export const QueryGetKvResponse = {
  encode(message: QueryGetKvResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kv !== undefined) {
      Kv.encode(message.kv, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetKvResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetKvResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kv = Kv.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKvResponse {
    return { kv: isSet(object.kv) ? Kv.fromJSON(object.kv) : undefined };
  },

  toJSON(message: QueryGetKvResponse): unknown {
    const obj: any = {};
    message.kv !== undefined && (obj.kv = message.kv ? Kv.toJSON(message.kv) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetKvResponse>, I>>(object: I): QueryGetKvResponse {
    const message = createBaseQueryGetKvResponse();
    message.kv = (object.kv !== undefined && object.kv !== null) ? Kv.fromPartial(object.kv) : undefined;
    return message;
  },
};

function createBaseQueryAllKvRequest(): QueryAllKvRequest {
  return { pagination: undefined, creator: "" };
}

export const QueryAllKvRequest = {
  encode(message: QueryAllKvRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllKvRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllKvRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKvRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: QueryAllKvRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllKvRequest>, I>>(object: I): QueryAllKvRequest {
    const message = createBaseQueryAllKvRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseQueryAllKvResponse(): QueryAllKvResponse {
  return { kv: [], pagination: undefined };
}

export const QueryAllKvResponse = {
  encode(message: QueryAllKvResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.kv) {
      Kv.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllKvResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllKvResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kv.push(Kv.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKvResponse {
    return {
      kv: Array.isArray(object?.kv) ? object.kv.map((e: any) => Kv.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllKvResponse): unknown {
    const obj: any = {};
    if (message.kv) {
      obj.kv = message.kv.map((e) => e ? Kv.toJSON(e) : undefined);
    } else {
      obj.kv = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllKvResponse>, I>>(object: I): QueryAllKvResponse {
    const message = createBaseQueryAllKvResponse();
    message.kv = object.kv?.map((e) => Kv.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDeviceRequest(): QueryGetDeviceRequest {
  return { address: "", creator: "" };
}

export const QueryGetDeviceRequest = {
  encode(message: QueryGetDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDeviceRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: QueryGetDeviceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDeviceRequest>, I>>(object: I): QueryGetDeviceRequest {
    const message = createBaseQueryGetDeviceRequest();
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseQueryGetDeviceResponse(): QueryGetDeviceResponse {
  return { device: undefined };
}

export const QueryGetDeviceResponse = {
  encode(message: QueryGetDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== undefined) {
      Device.encode(message.device, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDeviceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = Device.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDeviceResponse {
    return { device: isSet(object.device) ? Device.fromJSON(object.device) : undefined };
  },

  toJSON(message: QueryGetDeviceResponse): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = message.device ? Device.toJSON(message.device) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDeviceResponse>, I>>(object: I): QueryGetDeviceResponse {
    const message = createBaseQueryGetDeviceResponse();
    message.device = (object.device !== undefined && object.device !== null)
      ? Device.fromPartial(object.device)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDeviceRequest(): QueryAllDeviceRequest {
  return { pagination: undefined, creator: "" };
}

export const QueryAllDeviceRequest = {
  encode(message: QueryAllDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDeviceRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: QueryAllDeviceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDeviceRequest>, I>>(object: I): QueryAllDeviceRequest {
    const message = createBaseQueryAllDeviceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseQueryAllDeviceResponse(): QueryAllDeviceResponse {
  return { device: [], pagination: undefined };
}

export const QueryAllDeviceResponse = {
  encode(message: QueryAllDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.device) {
      Device.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDeviceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device.push(Device.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDeviceResponse {
    return {
      device: Array.isArray(object?.device) ? object.device.map((e: any) => Device.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDeviceResponse): unknown {
    const obj: any = {};
    if (message.device) {
      obj.device = message.device.map((e) => e ? Device.toJSON(e) : undefined);
    } else {
      obj.device = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDeviceResponse>, I>>(object: I): QueryAllDeviceResponse {
    const message = createBaseQueryAllDeviceResponse();
    message.device = object.device?.map((e) => Device.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetEventPbRequest(): QueryGetEventPbRequest {
  return { id: 0 };
}

export const QueryGetEventPbRequest = {
  encode(message: QueryGetEventPbRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEventPbRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEventPbRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEventPbRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetEventPbRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEventPbRequest>, I>>(object: I): QueryGetEventPbRequest {
    const message = createBaseQueryGetEventPbRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetEventPbResponse(): QueryGetEventPbResponse {
  return { EventPb: undefined };
}

export const QueryGetEventPbResponse = {
  encode(message: QueryGetEventPbResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EventPb !== undefined) {
      EventPb.encode(message.EventPb, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEventPbResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEventPbResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EventPb = EventPb.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEventPbResponse {
    return { EventPb: isSet(object.EventPb) ? EventPb.fromJSON(object.EventPb) : undefined };
  },

  toJSON(message: QueryGetEventPbResponse): unknown {
    const obj: any = {};
    message.EventPb !== undefined && (obj.EventPb = message.EventPb ? EventPb.toJSON(message.EventPb) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEventPbResponse>, I>>(object: I): QueryGetEventPbResponse {
    const message = createBaseQueryGetEventPbResponse();
    message.EventPb = (object.EventPb !== undefined && object.EventPb !== null)
      ? EventPb.fromPartial(object.EventPb)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEventPbRequest(): QueryAllEventPbRequest {
  return { pagination: undefined, topic: "" };
}

export const QueryAllEventPbRequest = {
  encode(message: QueryAllEventPbRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEventPbRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEventPbRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.topic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEventPbRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      topic: isSet(object.topic) ? String(object.topic) : "",
    };
  },

  toJSON(message: QueryAllEventPbRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.topic !== undefined && (obj.topic = message.topic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEventPbRequest>, I>>(object: I): QueryAllEventPbRequest {
    const message = createBaseQueryAllEventPbRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.topic = object.topic ?? "";
    return message;
  },
};

function createBaseQueryAllEventPbResponse(): QueryAllEventPbResponse {
  return { EventPb: [], pagination: undefined };
}

export const QueryAllEventPbResponse = {
  encode(message: QueryAllEventPbResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EventPb) {
      EventPb.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEventPbResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEventPbResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EventPb.push(EventPb.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEventPbResponse {
    return {
      EventPb: Array.isArray(object?.EventPb) ? object.EventPb.map((e: any) => EventPb.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEventPbResponse): unknown {
    const obj: any = {};
    if (message.EventPb) {
      obj.EventPb = message.EventPb.map((e) => e ? EventPb.toJSON(e) : undefined);
    } else {
      obj.EventPb = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEventPbResponse>, I>>(object: I): QueryAllEventPbResponse {
    const message = createBaseQueryAllEventPbResponse();
    message.EventPb = object.EventPb?.map((e) => EventPb.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Kv items. */
  Kv(request: QueryGetKvRequest): Promise<QueryGetKvResponse>;
  KvAll(request: QueryAllKvRequest): Promise<QueryAllKvResponse>;
  /** Queries a list of Device items. */
  Device(request: QueryGetDeviceRequest): Promise<QueryGetDeviceResponse>;
  DeviceAll(request: QueryAllDeviceRequest): Promise<QueryAllDeviceResponse>;
  /** Queries a list of EventPb items. */
  EventPb(request: QueryGetEventPbRequest): Promise<QueryGetEventPbResponse>;
  EventPbAll(request: QueryAllEventPbRequest): Promise<QueryAllEventPbResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Kv = this.Kv.bind(this);
    this.KvAll = this.KvAll.bind(this);
    this.Device = this.Device.bind(this);
    this.DeviceAll = this.DeviceAll.bind(this);
    this.EventPb = this.EventPb.bind(this);
    this.EventPbAll = this.EventPbAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Kv(request: QueryGetKvRequest): Promise<QueryGetKvResponse> {
    const data = QueryGetKvRequest.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Query", "Kv", data);
    return promise.then((data) => QueryGetKvResponse.decode(new _m0.Reader(data)));
  }

  KvAll(request: QueryAllKvRequest): Promise<QueryAllKvResponse> {
    const data = QueryAllKvRequest.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Query", "KvAll", data);
    return promise.then((data) => QueryAllKvResponse.decode(new _m0.Reader(data)));
  }

  Device(request: QueryGetDeviceRequest): Promise<QueryGetDeviceResponse> {
    const data = QueryGetDeviceRequest.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Query", "Device", data);
    return promise.then((data) => QueryGetDeviceResponse.decode(new _m0.Reader(data)));
  }

  DeviceAll(request: QueryAllDeviceRequest): Promise<QueryAllDeviceResponse> {
    const data = QueryAllDeviceRequest.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Query", "DeviceAll", data);
    return promise.then((data) => QueryAllDeviceResponse.decode(new _m0.Reader(data)));
  }

  EventPb(request: QueryGetEventPbRequest): Promise<QueryGetEventPbResponse> {
    const data = QueryGetEventPbRequest.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Query", "EventPb", data);
    return promise.then((data) => QueryGetEventPbResponse.decode(new _m0.Reader(data)));
  }

  EventPbAll(request: QueryAllEventPbRequest): Promise<QueryAllEventPbResponse> {
    const data = QueryAllEventPbRequest.encode(request).finish();
    const promise = this.rpc.request("stccommunity.iotdepinprotocol.iotdepinprotocol.Query", "EventPbAll", data);
    return promise.then((data) => QueryAllEventPbResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
