import { tagValues, createDictionary } from "../tags.mjs";

createDictionary(
  tagValues,
  ["ifd0", "ifd1"],
  [
    // Orientation
    [
      0x0112,
      {
        1: "Horizontal (normal)",
        2: "Mirror horizontal",
        3: "Rotate 180",
        4: "Mirror vertical",
        5: "Mirror horizontal and rotate 270 CW",
        6: "Rotate 90 CW",
        7: "Mirror horizontal and rotate 90 CW",
        8: "Rotate 270 CW",
      },
    ],

    // ResolutionUnit
    [
      0x0128,
      {
        1: "None",
        2: "inches",
        3: "cm",
      },
    ],
    [
      0x1401,
      {
        0x000: "F0/Standard (Provia)",
        0x100: "F1/Studio Portrait",
        0x110: "F1a/Studio Portrait Enhanced Saturation",
        0x120: "F1b/Studio Portrait Smooth Skin Tone (Astia)",
        0x130: "F1c/Studio Portrait Increased Sharpness",
        0x200: "F2/Fujichrome (Velvia)",
        0x300: "F3/Studio Portrait Ex",
        0x400: "F4/Velvia",
        0x500: "Pro Neg. Std",
        0x501: "Pro Neg. Hi",
        0x600: "Classic Chrome",
        0x700: "Eterna",
        0x800: "Classic Negative",
        0x900: "Bleach Bypass",
        0xa00: "Nostalgic Neg",
        0xb00: "Reala ACE",
      },
    ],
  ]
);
