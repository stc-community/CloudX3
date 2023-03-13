import * as dayjs from "dayjs";

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

  // @ts-ignore
  return dayjs(timeStr).format(formatStr);
}
