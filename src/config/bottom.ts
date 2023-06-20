// 定义底部按钮
export const BottomItems: BottomItems = {
  org: {
    title: "STC WEELINK",
    description:
      "The STC Council of the weelink web3 foundation, let us build global DPaaS open source infrastructure together.",
    github: "https://github.com/stc-community",
    twitter: "https://twitter.com/stc_community",
    // discord: "https://discord.com/",
    youtube: "https://www.youtube.com/@stc-community",
    linkedin: "https://www.linkedin.com/in/stc-community-519b4227b/"
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
    linkedin?: string;
  };
}
