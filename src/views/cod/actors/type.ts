import type { Event } from "nostr-tools";

export type ActorInfo = {
  event: Event;
  actor_id: string;
  actor_name: string;
  actor_ociref: string;
  count: number;
  host_id: string;
  id: string;
  is_hotwatched: boolean;
  port: number;
};

export interface HoleInfo {
  metadata: {
    name: string;
    namespace: string;
  };
}
