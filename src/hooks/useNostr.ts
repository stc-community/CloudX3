import { getConfig } from "@/config";
import { useNostrStore } from "@/store/modules/nostr";

// useNostr will choose a default replay for you!
export function useNostr() {
  const nostrStore = useNostrStore();
  const relay = getConfig()?.Relay || [];

  if (!nostrStore.getUrl) {
    nostrStore.saveUrl(relay[0].url);
  }

  return {
    nostrStore,
    relay
  };
}
