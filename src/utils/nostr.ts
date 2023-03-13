import { relayInit, getPublicKey, getEventHash, signEvent } from "nostr-tools";
import type { Relay, Event, Filter } from "nostr-tools";

type requestParams = {
  m: string; // module
  c: string; // controller
  a: string; // action
  content?: any; // params json
};

// type CallbackFunction = (event: Event) => void;

export default class Nostr {
  public relay: Relay;
  public sk: string;
  public pk: string;
  public url: string;
  private cbMap: Map<string, Function>;

  constructor(sk: string, url: string) {
    this.sk = sk;
    this.url = url;
    this.pk = getPublicKey(sk);
    this.cbMap = new Map();
  }

  async init(): Promise<Relay> {
    const relay = relayInit(this.url);
    relay.on("connect", () => {
      console.log(`connected to ${relay.url}`);
    });
    relay.on("error", () => {
      console.log(`failed to connect to ${relay.url}`);
    });

    await relay.connect();

    this.relay = relay;

    this.handleCallback();

    return relay;
  }

  async getList(filters: Filter[]) {
    const filteredEvent = await this.relay.list(filters);
    // console.log("filteredEvent=", filteredEvent);

    return filteredEvent;
  }

  handleCallback() {
    const sub = this.relay.sub([
      {
        kinds: [1, 7, 30023]
      }
    ]);
    sub.on("event", (event: Event) => {
      // console.log("got event", event);
      const goalEvent = event.tags.find(e => {
        return e[0] === "e";
      });
      if (goalEvent) {
        const id = goalEvent[1];
        if (this.cbMap.has(id)) {
          try {
            console.log("<=", event);
            this.cbMap.get(id)(event);
            this.cbMap.delete(id);
          } catch (e) {
            console.warn("nostr callback eval error:", e);
          }
        }
      }
    });
  }

  request(params: requestParams, cb: Function) {
    const event: Event = {
      kind: 1,
      pubkey: this.pk,
      created_at: Math.floor(Date.now() / 1000),
      tags: [
        ["m", params.m],
        ["c", params.c],
        ["a", params.a]
      ],
      content: params?.content ? JSON.stringify(params.content) : "",
      id: "",
      sig: ""
    };
    event.id = getEventHash(event);
    event.sig = signEvent(event, this.sk);

    this.relay.publish(event);
    console.log("=>", event);

    this.cbMap.set(event.id, cb);
  }

  close() {
    this.relay.close();
  }
}
