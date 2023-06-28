<script setup lang="ts">
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import successIcon from "@/assets/marker/success.png";
import errorIcon from "@/assets/marker/error.png";
import primaryIcon from "@/assets/marker/primary.png";
import { getConfig } from "@/config";
import { useNostrStore } from "@/store/modules/nostr";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const relays = getConfig().Relay;
const url = useNostrStore().getUrl;
const Points = relays.map(r => {
  return {
    url,
    current: url === r.url,
    label: r.name,
    latlng: [r.lat, r.long]
  };
});

// FIXME 如果没有选中的，把第一个选中
// if (!Points.find(i => !!i.current)) {
//   Points[0].current = true;
// }

onMounted(() => {
  const map = L.map("leaflet-map").setView(
    Points.find(i => i.current).latlng,
    2
  );

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png",
    {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 4,
      minZoom: 2
    }
  ).addTo(map);

  const currentIcon = L.icon({
    iconUrl: successIcon,
    iconSize: [20, 20],
    iconAnchor: [0, 10],
    popupAnchor: [10, -10]
  });

  const reachableIcon = L.icon({
    iconUrl: primaryIcon,
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
  });

  Points.forEach(p => {
    L.marker(p.latlng, { icon: p.current ? currentIcon : reachableIcon })
      .addTo(map)
      .bindPopup(p.label);
  });
});
</script>
<template>
  <div class="relative">
    <div id="leaflet-map" class="rounded-md border border-slate-300" />
    <div
      class="flex items-center text-sm text-slate-500 absolute bottom-0 z-[401] p-2"
    >
      <img :src="successIcon" alt="current" width="20" />
      <span>{{ t("mesh.current") }}</span>

      <img :src="primaryIcon" alt="current" width="20" class="ml-20" />
      <span>{{ t("mesh.reachable") }}</span>

      <img :src="errorIcon" alt="current" width="20" class="ml-20" />
      <span>{{ t("mesh.unreachable") }}</span>
    </div>
  </div>
</template>

<style>
#leaflet-map {
  height: 500px;
}
</style>
