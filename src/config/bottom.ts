// 定义底部按钮
export const BottomItems: BottomItems = {
  org: {
    title: "STC WEELINK",
    description:
      "The STC Council of the weelink web3 foundation, let us build global DPaaS open source infrastructure together.",
    github: "https://github.com/stc-community",
    twitter: "https://twitter.com/WeelinkChain",
    discord: "https://discord.com/",
    youtube: "https://www.youtube.com/"
  }
};

interface BottomItems {
  org: {
    title: string;
    description?: string;
    github?: string;
    twitter?: string;
    discord?: string;
    youtube?: string;
  };
}
