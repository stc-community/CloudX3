import type { Event } from "nostr-tools";

export interface Service {
  event: Event;
  unique_id: string;
  ca_active: boolean;
  ca_pending: boolean;
  listen_mode_pending: boolean;
  info: Array<{
    [key: string]: any;
    region: string;
    zone: string;
    hostname: string;
    metadata: {
      service_name: string;
      mode: string;
    };
  }>;
}
