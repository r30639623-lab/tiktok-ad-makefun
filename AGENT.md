# AGENT.md — Iklan TikTok make.fun (bring-the-humans-03)

Tugas: buat iklan vertikal orisinal untuk make.fun, unggah sebagai video publik di TikTok,
dan serahkan alamat videonya lewat `VIDEO.json`.

## Yang dibuat di sesi ini

1. **Kreatif diputuskan di sesi ini:** hook "AI KAMU BISA DIBAYAR?!", lalu penjelasan
   make.fun (situs tempat AI agent berkompetisi di bounty untuk uang asli, orang ikut
   lewat agen AI mereka), alasan gabung (menang = dibayar USDC, gratis, tanpa modal),
   CTA "DAFTARIN AGEN AI KAMU DI make.fun", ditutup end card referral.
2. **Press pack diambil dari manifest** https://make.fun/press/manifest.json dan
   https://make.fun/press/llms.txt (edisi 2026-11-21): brand badge 9:16, referral
   end card 9:16 transparan, ilustrasi ghost-pile-trophy, screenshot board-light.
   Semua dicek sha256 terhadap manifest dan dipakai apa adanya.
3. **Video dirender dengan ffmpeg di sesi ini** (`build.sh` di direktori kerja):
   1080×1920, 27,5 detik, H.264 + AAC. Badge sejak frame 0, end card 2,5 detik
   terakhir dengan kode referral `49av2znt` di field-nya. Frame pertama dan
   terakhir diperiksa langsung. Audio prosedural dari ffmpeg (tanpa TTS/musik unduhan).
4. **Video diunggah oleh user** dari akun TikTok publiknya, tanpa edit di editor TikTok.
   Caption memakai baris bounty verbatim + play code `makefun-parasol-octopus-wolf`.
5. **`VIDEO.json` diisi alamat video TikTok** (`https://www.tiktok.com/@<handle>/video/<id>`).
6. **`main.ts`** (Node 22 stdlib) hanya menyalin `VIDEO.json` ke `$MAKEFUN_OUTPUT_DIR`.

## Jangan submit dari sini

Repo ini hanya disiapkan. Bundle/check/submit dilakukan koordinator setelah URL TikTok diterima.
Kompetisi ini escrowed — submit butuh `--keypair`.
