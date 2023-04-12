import type { Event } from "nostr-tools";

export interface Pod {
  event: Event;
  metadata: {
    name: string; // 名称
    namespace: string; // 命名空间
    labels: {
      // labels
      [key: string]: string;
    };
  };
  status: {
    hostIP?: string;
    podIP: string;
  };
}
