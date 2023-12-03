import { sidebar } from "vuepress-theme-hope";

export const viSidebar = sidebar({
  "/vi/": [
    "",
    {
      text: "Bắt đầu",
      icon: "info-circle",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Hướng dẫn",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});