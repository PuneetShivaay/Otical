/**
 * Free, open-source tools built and maintained by Otical.
 *
 * These are standalone products, not client work — they live on their own
 * domains and are not part of the Next.js build. This file only describes
 * them for the `/tools` showcase page; `liveUrl` always points off-site.
 *
 * SCHEMA
 * ------
 * slug          string   stable id, used as the React key
 * title         string
 * icon          string   lucide-react name; must exist in components/ui/Icon
 * summary       string   one line, used on cards
 * description   string   short paragraph, used on cards
 * liveUrl       string   external URL — always opens in a new tab
 * tags          string[] short capability/tech labels
 * free          boolean  true = always free, no signup paywall
 * openSource    boolean  true = source is publicly available
 */

export const tools = [
  {
    slug: "textutils",
    title: "Otical TextUtils",
    icon: "Type",
    summary:
      "Word counter, character counter and text cleanup — free, in the browser.",
    description:
      "A fast, no-signup text utility: word and character counts, reading time, case conversion and one-click whitespace cleanup.",
    liveUrl: "https://oticaltextutils.web.app",
    tags: ["Word counter", "Text cleanup", "Free"],
    free: true,
    openSource: true,
  },
  {
    slug: "zerocloud-compute-lab",
    title: "ZeroCloud Compute Lab",
    icon: "Cpu",
    summary:
      "100% client-side compute playground — nothing leaves the browser.",
    description:
      "Inspect local files and run CPU/GPU workloads entirely on-device using the Web Crypto API and multi-threaded workers - zero bytes sent to cloud.",
    liveUrl: "https://zerocloud-iota.vercel.app",
    tags: ["WebGPU", "Privacy-first", "Multi-core"],
    free: true,
    openSource: true,
  },
  {
    slug: "oticalshare",
    title: "OticalShare",
    icon: "UploadCloud",
    summary: "A secure file-sharing portal with admin-verified access.",
    description:
      "An online file sharing portal built with Firebase — anyone can register, but only users verified by an admin can access, upload and download files.",
    liveUrl: "https://oticalshare.web.app",
    tags: ["Firebase", "File sharing", "Admin-verified"],
    free: true,
    openSource: true,
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    icon: "KeyRound",
    summary:
      "Generate strong passwords from 6 to 100 characters, right in the browser.",
    description:
      "A simple, client-side password generator with adjustable length and character sets — nothing is sent to a server.",
    liveUrl: "https://oticaltextutils.web.app/password",
    tags: ["Security", "Client-side", "Free"],
    free: true,
    openSource: true,
  },
  {
    slug: "magic-memory-game",
    title: "Magic Memory Game",
    icon: "Gamepad2",
    summary: "An interactive card-matching memory game built with React.",
    description:
      "Flip two cards per turn and match identical pairs in the fewest attempts — dynamic shuffling, turn tracking and smooth 3D flip animations.",
    liveUrl: "https://puneetshivaay.github.io/Magic-Memory-Game/",
    tags: ["React", "Game", "Free"],
    free: true,
    openSource: true,
  },
];

export const toolHref = (tool) => tool.liveUrl;
