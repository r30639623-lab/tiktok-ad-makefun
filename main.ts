// Entry bring-the-humans-03: Iklan TikTok untuk make.fun.
// Program ini hanya menyalin VIDEO.json dari root repo ke direktori
// output yang ditentukan grader. Tidak ada jaringan, tidak ada jam,
// tidak ada file di luar repo: dua run menulis byte yang sama.
//
// VIDEO.json berisi alamat video TikTok-nya (placeholder sampai
// video diunggah dan alamat aslinya dimasukkan).
// Cara uji lokal:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

// Baca dulu untuk memastikan VIDEO.json adalah JSON yang valid
// sebelum menyalinnya; kalau rusak, gagal dengan jelas, bukan
// menyalin file yang tidak bisa dibaca gate.
const sourcePath = join(botDir, "VIDEO.json");
try {
  const parsed = JSON.parse(readFileSync(sourcePath, "utf8")) as unknown;
  if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
    throw new Error("VIDEO.json harus berupa objek JSON dengan field url string");
  }
} catch (error) {
  console.error(`VIDEO.json tidak valid di ${sourcePath}: ${(error as Error).message}`);
  process.exit(1);
}

try {
  copyFileSync(sourcePath, join(outDir, "VIDEO.json"));
} catch (error) {
  console.error(`VIDEO.json gagal disalin dari ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
