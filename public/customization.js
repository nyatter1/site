// Core color palette used for generating massive combinations
const colors = [
  { name: "Crimson", hex: "#dc2626", glow: "rgba(220, 38, 38, {a})" },
  { name: "Ruby", hex: "#e11d48", glow: "rgba(225, 29, 72, {a})" },
  { name: "Orange", hex: "#ea580c", glow: "rgba(234, 88, 12, {a})" },
  { name: "Amber", hex: "#d97706", glow: "rgba(217, 119, 6, {a})" },
  { name: "Gold", hex: "#ca8a04", glow: "rgba(202, 138, 4, {a})" },
  { name: "Yellow", hex: "#eab308", glow: "rgba(234, 179, 8, {a})" },
  { name: "Lime", hex: "#65a30d", glow: "rgba(101, 163, 13, {a})" },
  { name: "Green", hex: "#16a34a", glow: "rgba(22, 163, 74, {a})" },
  { name: "Emerald", hex: "#059669", glow: "rgba(5, 150, 105, {a})" },
  { name: "Teal", hex: "#0d9488", glow: "rgba(13, 148, 136, {a})" },
  { name: "Cyan", hex: "#0891b2", glow: "rgba(8, 145, 178, {a})" },
  { name: "Sky", hex: "#0284c7", glow: "rgba(2, 132, 199, {a})" },
  { name: "Blue", hex: "#2563eb", glow: "rgba(37, 99, 235, {a})" },
  { name: "Indigo", hex: "#4f46e5", glow: "rgba(79, 70, 229, {a})" },
  { name: "Violet", hex: "#7c3aed", glow: "rgba(124, 58, 237, {a})" },
  { name: "Purple", hex: "#9333ea", glow: "rgba(147, 51, 234, {a})" },
  { name: "Fuchsia", hex: "#c026d3", glow: "rgba(192, 38, 211, {a})" },
  { name: "Pink", hex: "#db2777", glow: "rgba(219, 39, 119, {a})" },
  { name: "Rose", hex: "#e11d48", glow: "rgba(225, 29, 72, {a})" },
  { name: "White", hex: "#ffffff", glow: "rgba(255, 255, 255, {a})" },
  { name: "Silver", hex: "#d4d4d8", glow: "rgba(212, 212, 216, {a})" },
  { name: "Platinum", hex: "#e5e7eb", glow: "rgba(229, 231, 235, {a})" },
  { name: "Graphite", hex: "#71717a", glow: "rgba(113, 113, 122, {a})" },
  { name: "Obsidian", hex: "#18181b", glow: "rgba(24, 24, 27, {a})" },
  { name: "Ice", hex: "#a5f3fc", glow: "rgba(165, 243, 252, {a})" },
  { name: "Mint", hex: "#6ee7b7", glow: "rgba(110, 231, 183, {a})" },
  { name: "Jade", hex: "#10b981", glow: "rgba(16, 185, 129, {a})" },
  { name: "Acid", hex: "#bef264", glow: "rgba(190, 242, 100, {a})" },
  { name: "Copper", hex: "#b45309", glow: "rgba(180, 83, 9, {a})" },
  { name: "Coral", hex: "#fb7185", glow: "rgba(251, 113, 133, {a})" },
  { name: "Magenta", hex: "#ff00aa", glow: "rgba(255, 0, 170, {a})" },
  { name: "Lavender", hex: "#c4b5fd", glow: "rgba(196, 181, 253, {a})" },
  { name: "Periwinkle", hex: "#818cf8", glow: "rgba(129, 140, 248, {a})" },
  { name: "Electric", hex: "#22d3ee", glow: "rgba(34, 211, 238, {a})" },
];

const extraBadgePack = [
  "\u{1F4B0}", "\u{1F4B8}", "\u{1FA99}", "\u{1F3B0}", "\u{1F3B2}", "\u{1F0CF}", "\u{1F3C6}", "\u{1F947}", "\u{1F4A0}", "\u{1F531}", "\u{269C}\u{FE0F}", "\u{1F6E1}\u{FE0F}", "\u{1F5E1}\u{FE0F}", "\u{1F9FF}", "\u{1FAAC}", "\u{1FAE7}",
  "\u{1FAA9}", "\u{1F9E8}", "\u{1F56F}\u{FE0F}", "\u{1F9F8}", "\u{1FA84}", "\u{1FA90}", "\u{2604}\u{FE0F}", "\u{1F320}", "\u{1F30C}", "\u{1F303}", "\u{1F309}", "\u{1F5A4}", "\u{1F90D}", "\u{1F498}", "\u{1F49E}", "\u{1F4AB}",
  "\u{1F9C1}", "\u{1F353}", "\u{1F352}", "\u{1F36D}", "\u{1F36C}", "\u{1F9CB}", "\u{1F942}", "\u{1F37E}", "\u{1F377}", "\u{2615}", "\u{1F3A7}", "\u{1F3AE}", "\u{1F579}\u{FE0F}", "\u{1F3AF}", "\u{1F3B1}", "\u{265F}\u{FE0F}",
  "\u{2660}\u{FE0F}", "\u{2665}\u{FE0F}", "\u{2666}\u{FE0F}", "\u{2663}\u{FE0F}", "\u{1F98B}", "\u{1FABD}", "\u{1FAF6}", "\u{1FAC0}", "\u{1F9E0}", "\u{1FAE6}"
];

export const badgeOptions = [
  "", "💖", "✨", "👑", "🛸", "👾", "🐾", "🌌", "💀", "🔥", "🎀", "🌙", "🪄", "🍡", "🌸", "🍕",
  "⭐", "⚡", "🦋", "🦇", "🍄", "🍉", "🍒", "🍩", "💎", "🔮", "🧿", "🍀", "🌺", "🦊", "🐼", "🐧",
  "😎", "🤠", "👽", "👻", "🤖", "🎃", "😈", "👹", "👺", "🤡", "💩", "🦄", "🐉", "🦖", "🦕", "🐙",
  "🦑", "🦐", "🦞", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🦍",
  "🦧", "🐘", "🦛", "🦏", "🐪", "🐫", "🦒", "🦘", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🦙",
  "🐐", "🦌", "🐕", "🐩", "🦮", "🐕‍🦺", "🐈", "🐈‍⬛", "🐓", "🦃", "🦚", "🦜", "🦢", "🦩", "🕊️", "🐇",
  "🦝", "🦨", "🦡", "🦫", "🦦", "🦥", "🐁", "🐀", "🐿️", "🦔", "🐉", "🐲", "🌵", "🎄", "🌲", "🌳",
  "🌴", "🪵", "🌱", "🌿", "☘️", "🍀", "🎍", "🪴", "🎋", "🍃", "🍂", "🍁", "🍄", "🌾", "💐", "🌷",
  "🌹", "🥀", "🌺", "🌸", "🌼", "🌻", "🌞", "🌝", "🌛", "🌜", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑",
  "🌒", "🌓", "🌔", "🌙", "🌎", "🌍", "🌏", "🪐", "💫", "⭐", "🌟", "✨", "⚡", "☄️", "💥", "🔥",
  "🌪️", "🌈", "☀️", "🌤️", "⛅", "🌥️", "☁️", "🌦️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️", "☃️", "⛄", "🌬️",
  "💨", "💧", "💦", "☔", "☂️", "🌊", "🪨", "🧿", "🔮", "📿", "🧿", "🧬", "🩸", "🦠", "🔬", "🔭"
  , ...extraBadgePack
].map((b, i) => ({ 
  value: b, 
  label: b || "None", 
  labelHtml: `<span class="text-xl">${b}</span>`, 
  checked: i === 0 
}));

const baseBackgrounds = [
  { value: "#000000", visual: "background: #000000", label: "Pitch Black", checked: true },
  { value: "#070709", visual: "background: #070709", label: "Dark Void" },
  { value: "#ffffff", visual: "background: #ffffff", label: "Pure White" },
  { value: "linear-gradient(to bottom right, #000000, #1a0b16)", visual: "background: linear-gradient(to bottom right, #000000, #1a0b16)", label: "Vampire Fade" },
  { value: "linear-gradient(to bottom right, #000000, #0c1a15)", visual: "background: linear-gradient(to bottom right, #000000, #0c1a15)", label: "Matrix Fade" },
  { value: "linear-gradient(to right, #ff9966, #ff5e62)", visual: "background: linear-gradient(to right, #ff9966, #ff5e62)", label: "Sunset Vibes" },
  { value: "linear-gradient(to right, #00F2FE, #4FACFE)", visual: "background: linear-gradient(to right, #00F2FE, #4FACFE)", label: "Ocean Breeze" },
  { value: "linear-gradient(to right, #fa709a, #fee140)", visual: "background: linear-gradient(to right, #fa709a, #fee140)", label: "Candy Dream" },
  { value: "linear-gradient(to top, #30cfd0 0%, #330867 100%)", visual: "background: linear-gradient(to top, #30cfd0 0%, #330867 100%)", label: "Deep Sea Space" },
  { value: "linear-gradient(to right, #f83600 0%, #f9d423 100%)", visual: "background: linear-gradient(to right, #f83600 0%, #f9d423 100%)", label: "Solar Flare" },
  { value: "radial-gradient(circle, #24243e, #302b63, #0f0c29)", visual: "background: radial-gradient(circle, #24243e, #302b63, #0f0c29)", label: "Galactic Core" },
  { value: "repeating-linear-gradient(45deg, #111 0px, #111 10px, #222 10px, #222 20px)", visual: "background: repeating-linear-gradient(45deg, #111 0px, #111 10px, #222 10px, #222 20px)", label: "Carbon Fiber" },
  { value: "repeating-radial-gradient(circle, #000 0, #000 10px, #1a1a1a 10px, #1a1a1a 20px)", visual: "background: repeating-radial-gradient(circle, #000 0, #000 10px, #1a1a1a 10px, #1a1a1a 20px)", label: "Hypnotic Dark" },
  { value: "linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)", visual: "background: linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent); background-size: 40px 40px; background-color: #0f172a;", label: "Warning Stripes" },
  { value: "radial-gradient(circle at 50% -20%, #e81cff, #40c9ff)", visual: "background: radial-gradient(circle at 50% -20%, #e81cff, #40c9ff)", label: "Vaporwave Horizon" },
  { value: "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)", visual: "background: conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)", label: "Conic Synth" },
  { value: "repeating-linear-gradient(90deg, #000, #000 20px, #0f172a 20px, #0f172a 40px)", visual: "background: repeating-linear-gradient(90deg, #000, #000 20px, #0f172a 20px, #0f172a 40px)", label: "Vertical Bars" },
  { value: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)", visual: "background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%)", label: "Toxic Green" },
  { value: "linear-gradient(to right, #fa709a 0%, #fee140 100%)", visual: "background: linear-gradient(to right, #fa709a 0%, #fee140 100%)", label: "Peach Gradient" },
  { value: "radial-gradient(circle at 50% 50%, #1e1e1e, #000)", visual: "background: radial-gradient(circle at 50% 50%, #1e1e1e, #000)", label: "Spotlight Dark" },
];

const generatedBackgrounds = colors.flatMap(c => [
  { value: c.hex, visual: `background: ${c.hex}`, label: `Solid ${c.name}` },
  { value: `linear-gradient(to right, #000000, ${c.hex})`, visual: `background: linear-gradient(to right, #000000, ${c.hex})`, label: `${c.name} Abyss` },
  { value: `linear-gradient(135deg, ${c.hex}, #000000)`, visual: `background: linear-gradient(135deg, ${c.hex}, #000000)`, label: `Angled ${c.name}` },
  { value: `radial-gradient(circle, ${c.hex}, #000000)`, visual: `background: radial-gradient(circle, ${c.hex}, #000000)`, label: `${c.name} Core` },
  { value: `conic-gradient(#000000, ${c.hex}, #000000)`, visual: `background: conic-gradient(#000000, ${c.hex}, #000000)`, label: `${c.name} Radar` },
]);

const deluxeBackgrounds = [
  { value: "linear-gradient(120deg, #020617, #111827, #020617); background-size: 220% 220%; animation: luxe-pan 9s ease infinite", visual: "background: linear-gradient(120deg, #020617, #111827, #020617); background-size: 220% 220%; animation: luxe-pan 9s ease infinite", label: "Slow Black Silk" },
  { value: "linear-gradient(135deg, #000000 0%, #18181b 35%, #52525b 50%, #09090b 65%, #000000 100%); background-size: 260% 260%; animation: luxe-pan 7s ease infinite", visual: "background: linear-gradient(135deg, #000000 0%, #18181b 35%, #52525b 50%, #09090b 65%, #000000 100%); background-size: 260% 260%; animation: luxe-pan 7s ease infinite", label: "Chrome Night" },
  { value: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 18%), radial-gradient(circle at 80% 30%, rgba(244,63,94,0.28), transparent 22%), #030303", visual: "background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 18%), radial-gradient(circle at 80% 30%, rgba(244,63,94,0.28), transparent 22%), #030303", label: "Velvet Sparks" },
  { value: "repeating-linear-gradient(0deg, #030303 0px, #030303 6px, #111113 7px, #030303 12px)", visual: "background: repeating-linear-gradient(0deg, #030303 0px, #030303 6px, #111113 7px, #030303 12px)", label: "Scanline Noir" },
  { value: "repeating-linear-gradient(45deg, #050505 0px, #050505 8px, #151515 9px, #050505 18px)", visual: "background: repeating-linear-gradient(45deg, #050505 0px, #050505 8px, #151515 9px, #050505 18px)", label: "Tailored Carbon" },
  { value: "conic-gradient(from 90deg, #000, #27272a, #000, #52525b, #000)", visual: "background: conic-gradient(from 90deg, #000, #27272a, #000, #52525b, #000)", label: "Gunmetal Compass" },
  { value: "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 18px 18px; background-color: #050507", visual: "background: linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 18px 18px; background-color: #050507", label: "Micro Grid" },
  { value: "radial-gradient(circle at top, var(--card-color, #ffffff), transparent 32%), linear-gradient(180deg, #000000, #070709)", visual: "background: radial-gradient(circle at top, var(--card-color, #ffffff), transparent 32%), linear-gradient(180deg, #000000, #070709)", label: "Accent Eclipse" },
  { value: "linear-gradient(135deg, transparent 0 45%, rgba(255,255,255,0.18) 50%, transparent 55% 100%), #070709; background-size: 200% 200%; animation: luxe-pan 6s linear infinite", visual: "background: linear-gradient(135deg, transparent 0 45%, rgba(255,255,255,0.18) 50%, transparent 55% 100%), #070709; background-size: 200% 200%; animation: luxe-pan 6s linear infinite", label: "Passing Glint" },
  { value: "radial-gradient(circle at 30% 10%, rgba(234,179,8,0.35), transparent 24%), radial-gradient(circle at 75% 85%, rgba(244,63,94,0.22), transparent 26%), #020202", visual: "background: radial-gradient(circle at 30% 10%, rgba(234,179,8,0.35), transparent 24%), radial-gradient(circle at 75% 85%, rgba(244,63,94,0.22), transparent 26%), #020202", label: "High Roller" }
];

export const bgOptions = [...baseBackgrounds, ...deluxeBackgrounds, ...generatedBackgrounds];

const baseBorders = [
  { value: "border-zinc-900", visual: "border: 1px solid #27272a;", label: "Minimalist", checked: true },
  { value: "rainbow-card", visual: "border: 3px solid transparent; background-clip: padding-box; position: relative; &::before { content: ''; position: absolute; inset: -3px; z-index: -1; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); border-radius: inherit; }", label: "True Rainbow Prism" },
  { value: "cyber-card", visual: "border: 1px solid #06b6d4; box-shadow: inset 0 0 15px rgba(6, 182, 212, 0.5);", label: "Cyberpunk Blue" },
  { value: "neon-glow-gold", visual: "border: 2px solid #eab308; box-shadow: 0 0 15px #eab308, inset 0 0 10px #eab308;", label: "Neon Gold" },
  { value: "dashed-thick", visual: "border: 4px dashed #6b7280;", label: "Thick Dashed" },
  { value: "dotted-thick", visual: "border: 4px dotted #9ca3af;", label: "Thick Dotted" },
  { value: "double-thick", visual: "border: 6px double #4b5563;", label: "Heavy Double" },
  { value: "groove-deep", visual: "border: 6px groove #374151;", label: "Deep Groove" },
  { value: "ridge-high", visual: "border: 6px ridge #d1d5db;", label: "High Ridge" },
  { value: "inset-classic", visual: "border: 4px inset #6b7280;", label: "Classic Inset" },
  { value: "outset-classic", visual: "border: 4px outset #9ca3af;", label: "Classic Outset" },
  { value: "synthwave", visual: "border-bottom: 4px solid #ec4899; border-top: 4px solid #06b6d4; border-left: 2px solid #8b5cf6; border-right: 2px solid #8b5cf6;", label: "Synthwave Grid" },
  { value: "hacker", visual: "border: 1px solid #22c55e; box-shadow: 0 0 5px #22c55e; border-style: dashed solid;", label: "Terminal Hacker" },
  { value: "glitch", visual: "border: 2px solid #fff; box-shadow: 3px 0 0 #f00, -3px 0 0 #0ff;", label: "RGB Glitch" },
];

const generatedBorders = colors.flatMap(c => [
  { value: `solid-${c.name}`, visual: `border: 2px solid ${c.hex};`, label: `Solid ${c.name}` },
  { value: `dashed-${c.name}`, visual: `border: 2px dashed ${c.hex};`, label: `Dashed ${c.name}` },
  { value: `dotted-${c.name}`, visual: `border: 3px dotted ${c.hex};`, label: `Dotted ${c.name}` },
  { value: `double-${c.name}`, visual: `border: 4px double ${c.hex};`, label: `Double ${c.name}` },
  { value: `glow-${c.name}`, visual: `border: 1px solid ${c.hex}; box-shadow: 0 0 10px ${c.glow.replace('{a}', '0.7')};`, label: `Glowing ${c.name}` },
  { value: `inner-glow-${c.name}`, visual: `border: 1px solid transparent; box-shadow: inset 0 0 15px ${c.glow.replace('{a}', '0.8')};`, label: `Inner Aura ${c.name}` },
  { value: `neon-sign-${c.name}`, visual: `border: 2px solid #fff; box-shadow: 0 0 5px #fff, 0 0 15px ${c.hex}, 0 0 30px ${c.hex};`, label: `Neon Sign ${c.name}` }
]);

const premiumBorders = [
  { value: "custom-accent-hairline", visual: "border: 1px solid var(--card-color, #ffffff); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);", label: "Accent Hairline" },
  { value: "custom-accent-double", visual: "border: 3px double var(--card-color, #ffffff);", label: "Accent Double" },
  { value: "custom-accent-luxe", visual: "border: 1px solid var(--card-color, #ffffff); box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 18px 45px rgba(0,0,0,0.45);", label: "Luxe Accent" },
  { value: "corner-cut", visual: "border: 1px solid #3f3f46; clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);", label: "Cut Corners" },
  { value: "top-bottom-accent", visual: "border-top: 3px solid var(--card-color, #ffffff); border-bottom: 3px solid var(--card-color, #ffffff); border-left: 1px solid #27272a; border-right: 1px solid #27272a;", label: "Top Bottom" },
  { value: "left-rail-accent", visual: "border: 1px solid #27272a; border-left: 6px solid var(--card-color, #ffffff);", label: "Left Rail" },
  { value: "polaroid-frame", visual: "border: 8px solid #f4f4f5; box-shadow: 0 12px 30px rgba(0,0,0,0.45);", label: "Polaroid" },
  { value: "casino-rail", visual: "border: 2px solid #eab308; box-shadow: 0 0 0 2px #09090b, 0 0 0 4px #7f1d1d;", label: "Casino Rail" },
  { value: "ruby-vault", visual: "border: 2px solid #e11d48; box-shadow: inset 0 0 24px rgba(225,29,72,0.22), 0 0 22px rgba(225,29,72,0.25);", label: "Ruby Vault" },
  { value: "ice-vault", visual: "border: 2px solid #a5f3fc; box-shadow: inset 0 0 24px rgba(165,243,252,0.2), 0 0 22px rgba(165,243,252,0.2);", label: "Ice Vault" }
];

export const borderStyles = [...baseBorders, ...premiumBorders, ...generatedBorders];

const baseGlows = [
  { value: "none", visual: "", label: "No Glow", checked: true },
  { value: "soft", visual: "box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);", label: "Soft White Aura" },
  { value: "medium", visual: "box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);", label: "Medium White Aura" },
  { value: "radiant", visual: "box-shadow: 0 0 35px rgba(255, 255, 255, 0.6);", label: "Radiant White" },
  { value: "hyper", visual: "box-shadow: 0 0 50px rgba(255, 255, 255, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.5);", label: "Hyper White" },
  { value: "blinding", visual: "box-shadow: 0 0 80px #ffffff, inset 0 0 40px #ffffff;", label: "Blinding White" },
  { value: "abyss", visual: "box-shadow: 0 0 30px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(0, 0, 0, 0.9);", label: "Dark Abyss" },
  { value: "rainbow-glow", visual: "box-shadow: 0 -10px 20px red, 10px 0 20px yellow, 0 10px 20px green, -10px 0 20px blue;", label: "Omni Rainbow" },
  { value: "miami-vice", visual: "box-shadow: -15px 0 30px #f472b6, 15px 0 30px #38bdf8;", label: "Miami Vice" },
  { value: "fire-ice", visual: "box-shadow: -15px 0 30px #ef4444, 15px 0 30px #0ea5e9;", label: "Fire & Ice" },
  { value: "toxic-spill", visual: "box-shadow: 0 15px 30px #84cc16, 0 -15px 30px #22c55e;", label: "Toxic Spill" },
  { value: "royal-flush", visual: "box-shadow: 0 0 40px #eab308, inset 0 0 20px #a855f7;", label: "Royal Flush" },
  { value: "matrix", visual: "box-shadow: 0 0 20px #22c55e, inset 0 0 20px #16a34a;", label: "The Matrix" },
  { value: "blood-moon", visual: "box-shadow: 0 0 50px #991b1b, inset 0 0 30px #7f1d1d;", label: "Blood Moon" },
];

const generatedGlows = colors.flatMap(c => [
  { value: `glow-subtle-${c.name}`, visual: `box-shadow: 0 0 10px ${c.glow.replace('{a}', '0.3')};`, label: `Subtle ${c.name}` },
  { value: `glow-ambient-${c.name}`, visual: `box-shadow: 0 0 20px ${c.glow.replace('{a}', '0.5')};`, label: `Ambient ${c.name}` },
  { value: `glow-strong-${c.name}`, visual: `box-shadow: 0 0 35px ${c.glow.replace('{a}', '0.8')};`, label: `Strong ${c.name}` },
  { value: `glow-inset-${c.name}`, visual: `box-shadow: inset 0 0 25px ${c.glow.replace('{a}', '0.7')};`, label: `Inner ${c.name}` },
  { value: `glow-omni-${c.name}`, visual: `box-shadow: 0 0 25px ${c.glow.replace('{a}', '0.6')}, inset 0 0 15px ${c.glow.replace('{a}', '0.4')};`, label: `Omni ${c.name}` },
  { value: `glow-supernova-${c.name}`, visual: `box-shadow: 0 0 60px ${c.hex}, inset 0 0 30px ${c.hex};`, label: `Supernova ${c.name}` },
]);

const premiumGlows = [
  { value: "accent-low", visual: "box-shadow: 0 0 18px color-mix(in srgb, var(--card-color, #ffffff) 35%, transparent);", label: "Accent Low" },
  { value: "accent-medium", visual: "box-shadow: 0 0 32px color-mix(in srgb, var(--card-color, #ffffff) 55%, transparent);", label: "Accent Medium" },
  { value: "accent-heavy", visual: "box-shadow: 0 0 48px color-mix(in srgb, var(--card-color, #ffffff) 70%, transparent), inset 0 0 20px color-mix(in srgb, var(--card-color, #ffffff) 25%, transparent);", label: "Accent Heavy" },
  { value: "casino-night", visual: "box-shadow: 0 0 24px rgba(234,179,8,0.45), 0 0 44px rgba(225,29,72,0.22);", label: "Casino Night" },
  { value: "diamond-cold", visual: "box-shadow: 0 0 28px rgba(165,243,252,0.45), inset 0 0 18px rgba(255,255,255,0.12);", label: "Diamond Cold" },
  { value: "soft-shadow-lift", visual: "box-shadow: 0 28px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06);", label: "Soft Lift" },
  { value: "underlight", visual: "box-shadow: 0 28px 38px rgba(255,255,255,0.14);", label: "Underlight" },
  { value: "red-carpet", visual: "box-shadow: -18px 18px 45px rgba(127,29,29,0.4), 18px -18px 45px rgba(234,179,8,0.22);", label: "Red Carpet" },
  { value: "black-diamond", visual: "box-shadow: 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 34px rgba(255,255,255,0.08), 0 0 60px rgba(0,0,0,0.9);", label: "Black Diamond" }
];

export const glowIntensities = [...baseGlows, ...premiumGlows, ...generatedGlows];

const basePfpStyles = [
  { value: "none", visual: "", label: "None", checked: true },
  { value: "rainbow-ring", visual: "background: conic-gradient(red, yellow, green, blue, magenta, red); padding: 3px; border-radius: 50%; width: 30px; height: 30px;", label: "Rainbow Ring" },
  { value: "spin-dashed", visual: "border: 3px dashed #6366f1; border-radius: 50%; width: 30px; height: 30px;", label: "Static Spin Dash" },
  { value: "double-ring", visual: "border: 4px double #ffffff; border-radius: 50%; width: 30px; height: 30px;", label: "Double White Ring" },
  { value: "target", visual: "border: 2px solid #ef4444; outline: 2px solid #ef4444; outline-offset: 2px; border-radius: 50%; width: 30px; height: 30px;", label: "Target Lock" },
  { value: "offset-ring", visual: "box-shadow: 4px 4px 0px #3b82f6; border-radius: 50%; width: 30px; height: 30px;", label: "Offset Shadow" },
  { value: "glass-ring", visual: "border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(5px); border-radius: 50%; width: 30px; height: 30px;", label: "Frosted Glass" },
  { value: "neon-pulse", visual: "border: 2px solid #06b6d4; box-shadow: 0 0 15px #06b6d4, inset 0 0 10px #06b6d4; border-radius: 50%; width: 30px; height: 30px;", label: "Neon Pulse Cyan" },
  { value: "gold-trim", visual: "border: 2px solid #fbbf24; outline: 1px solid #d97706; outline-offset: -3px; border-radius: 50%; width: 30px; height: 30px;", label: "Gold Trim" },
  { value: "holographic", visual: "background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%); padding: 2px; border-radius: 50%; width: 30px; height: 30px;", label: "Holographic Foil" },
  { value: "lava-lamp", visual: "background: radial-gradient(circle at 30% 30%, #ef4444, #991b1b); padding: 3px; border-radius: 50%; width: 30px; height: 30px; box-shadow: inset 0 0 10px #000;", label: "Lava Lamp" },
  { value: "radar", visual: "border: 1px solid #22c55e; background: conic-gradient(from 0deg, transparent 70%, rgba(34, 197, 94, 0.5) 100%); padding: 2px; border-radius: 50%; width: 30px; height: 30px;", label: "Active Radar" }
];

const generatedPfpStyles = colors.flatMap(c => [
  { value: `pfp-solid-${c.name}`, visual: `border: 2px solid ${c.hex}; border-radius: 50%; width: 30px; height: 30px;`, label: `Solid ${c.name}` },
  { value: `pfp-dashed-${c.name}`, visual: `border: 2px dashed ${c.hex}; border-radius: 50%; width: 30px; height: 30px;`, label: `Dashed ${c.name}` },
  { value: `pfp-dotted-${c.name}`, visual: `border: 3px dotted ${c.hex}; border-radius: 50%; width: 30px; height: 30px;`, label: `Dotted ${c.name}` },
  { value: `pfp-glow-${c.name}`, visual: `border: 1px solid ${c.hex}; box-shadow: 0 0 12px ${c.hex}; border-radius: 50%; width: 30px; height: 30px;`, label: `Glow Ring ${c.name}` },
  { value: `pfp-halo-${c.name}`, visual: `box-shadow: 0 0 0 3px #000, 0 0 0 5px ${c.hex}; border-radius: 50%; width: 30px; height: 30px;`, label: `Halo ${c.name}` },
  { value: `pfp-gradient-${c.name}`, visual: `background: linear-gradient(135deg, #000, ${c.hex}); padding: 3px; border-radius: 50%; width: 30px; height: 30px;`, label: `Gradient ${c.name}` },
]);

const premiumPfpStyles = [
  { value: "custom-clean-ring", visual: "border: var(--pfp-width, 2px) solid var(--pfp-color, #ffffff); border-radius: 50%;", label: "Custom Clean" },
  { value: "custom-soft-halo", visual: "border: var(--pfp-width, 2px) solid var(--pfp-color, #ffffff); box-shadow: 0 0 18px var(--pfp-color, #ffffff); border-radius: 50%;", label: "Custom Halo" },
  { value: "custom-double-halo", visual: "box-shadow: 0 0 0 var(--pfp-width, 2px) var(--pfp-color, #ffffff), 0 0 0 calc(var(--pfp-width, 2px) + 3px) #000, 0 0 24px var(--pfp-color, #ffffff); border-radius: 50%;", label: "Double Halo" },
  { value: "custom-orbit", visual: "border: var(--pfp-width, 2px) dashed var(--pfp-color, #ffffff); box-shadow: 0 0 14px var(--pfp-color, #ffffff); border-radius: 50%;", label: "Orbit Dash" },
  { value: "custom-luxe-frame", visual: "border: var(--pfp-width, 2px) double var(--pfp-color, #ffffff); outline: 1px solid rgba(255,255,255,0.16); outline-offset: 3px; border-radius: 50%;", label: "Luxe Frame" },
  { value: "casino-chip", visual: "border: 4px dashed #eab308; box-shadow: 0 0 0 3px #7f1d1d, 0 0 20px rgba(234,179,8,0.45); border-radius: 50%;", label: "Casino Chip" },
  { value: "ruby-crown-ring", visual: "border: 3px solid #e11d48; box-shadow: 0 -5px 0 #eab308, 0 0 20px rgba(225,29,72,0.45); border-radius: 50%;", label: "Ruby Crown" },
  { value: "diamond-cut-ring", visual: "clip-path: polygon(50% 0%, 92% 18%, 100% 60%, 73% 100%, 27% 100%, 0% 60%, 8% 18%); border: 2px solid #a5f3fc; box-shadow: 0 0 22px rgba(165,243,252,0.45);", label: "Diamond Cut" },
  { value: "glint-spin", visual: "border: 2px solid var(--pfp-color, #ffffff); box-shadow: 0 0 18px var(--pfp-color, #ffffff); border-radius: 50%; animation: glint-sweep 2s ease-in-out infinite;", label: "Glint Sweep" },
  { value: "black-tie", visual: "border: 2px solid #f4f4f5; box-shadow: 0 0 0 4px #000, 0 0 0 5px #52525b; border-radius: 50%;", label: "Black Tie" }
];

export const pfpStyles = [...basePfpStyles, ...premiumPfpStyles, ...generatedPfpStyles];
