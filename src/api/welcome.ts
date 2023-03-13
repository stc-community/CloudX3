import { http } from "@/utils/http";

export type WelcomeResult = {
  code: number;
  msg: string;
  data: string;
};

export const getWelcome = (data?: object) => {
  return http.request<WelcomeResult>("get", "/welcome", { data });
};
