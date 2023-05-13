export const SITE = {
  title: "FAPI Guide",
  description:
    "A website dedicated to being a guide for the game Farmer Against Potatoes Idle.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/gendelbendel/fapi-guide/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.com/invite/GKKPrxUUqa`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    Welcome: [
      { text: "Introduction", link: "en/introduction" },
      { text: "Glossary", link: "en/glossary" },
    ],
    Guides: [
      { text: "Ascension Priorities", link: "en/guides/ascension-priorities" },
    ],
    Checklists: [
      {
        text: "Before Reincarnating",
        link: "en/checklists/before-reincarnating",
      },
      { text: "Before Ascending", link: "en/checklists/before-ascending" },
    ],
    Resources: [
      { text: "Spreadsheets", link: "en/resources/spreadsheets" },
      { text: "Tools", link: "en/resources/tools" },
    ],
  },
};
