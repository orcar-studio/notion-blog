const CONFIG = {
  // profile setting (required)
  profile: {
    name: "오르카 스튜디오",
    image: "/orcar-logo-2.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "team.orcar.kr",
    bio: "공유 모빌리티 시장의 혁신을 꿈꾸는 오르카 스튜디오입니다.r",
    email: "contact@orcar.kr",
    github: "orcar-studio",
    linkedin: "",
    instagram: "",
  },
  projects: [
    {
      name: `섬카`,
      href: "https://fast.sumcar.kr",
    },
    {
      name: `오르카 ERP`,
      href: "https://rent.orcar.kr",
    },
    {
      name: `오르카 파트너스`,
      href: "https://partners.orcar.kr",
    },
    {
      name: `무지개렌터카 직판 사이트`,
      href: "https://rainbowrent.co.kr",
    },
  ],
  // blog setting (required)
  blog: {
    title: "오르카 스튜디오",
    description: "Orcar Studio's Blog",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://today.orcar.kr",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "orcar-studio/notion-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
