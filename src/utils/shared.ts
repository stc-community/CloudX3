import type { Event } from "nostr-tools";
import type { Ref } from "vue";
import { useNostrStore } from "@/store/modules/nostr";
import { useModalStore } from "@/store/modules/modal";
import moment from "moment";

export function formatTime(timeStr, formatStr = "YYYY/MM/DD HH:mm:ss") {
  if (!timeStr) {
    return "-";
  }

  // 纳秒的数据转换
  if ((timeStr + "").length === 19) {
    timeStr = Math.floor(timeStr / 1000000);
  } else if ((timeStr + "").length === 13) {
    timeStr = +timeStr;
  } else if ((timeStr + "").length === 10) {
    timeStr = timeStr * 1000;
  }

  try {
    // @ts-ignore
    return moment(timeStr).format(formatStr);
  } catch (_e) {
    timeStr;
  }
}

export function showEventModal(event: Event) {
  useModalStore().setEvent(event);
}

export async function loadData(
  dataContainer: object | Array<any>,
  action: string, // 请求方法 a.b.c
  params: object | null = null, // 请求参数
  loading: Ref | null // loading 的控制参数
) {
  const arr = action.split(".");

  if (arr.length !== 3) {
    throw new Error("action format: a.b.c");
  }

  const nostr = await useNostrStore().asyncGetNostrInstance();

  nostr.request(
    {
      m: arr[0],
      c: arr[1],
      a: arr[2],
      content: params
    },
    function (event: Event) {
      loading.value = false;
      const content = JSON.parse(event?.content);

      // 如果请求的是列表数据
      if (Array.isArray(dataContainer)) {
        const d = Array.isArray(content?.data)
          ? content.data
          : content.data.list;

        (d || []).forEach(h => {
          h.event = event;
          dataContainer.push(h);
        });
      }
    }
  );
}

export function transMapToArr(obj: Object) {
  if (typeof obj !== "object") {
    return [];
  }

  return Object.keys(obj).map(k => {
    return {
      k,
      v: obj[k]
    };
  });
}

const IPFS_GATEWAY = "https://ipfs.io/ipfs/";
export function transIpfsToHttp(url: string) {
  if (url.startsWith("ipfs://")) {
    return IPFS_GATEWAY + url.substring(7);
  }

  return url;
}
