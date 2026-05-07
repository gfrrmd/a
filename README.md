# 📨 Menfess Bot Telegram V.0.1.0

Bot Telegram sederhana untuk mengirim pesan anonim (menfess) ke sebuah channel secara otomatis. Dibangun menggunakan **Node.js** + **Telegraf**, siap di-deploy ke **Railway**.

---

## ✨ Fitur

- Kirim pesan teks anonim ke channel Telegram
- Mendukung media: **Foto, Video, Dokumen, Audio**
- Trigger word sederhana: cukup awali pesan dengan `mfs!`
- Pesan diteruskan ke channel tanpa identitas pengirim
- Graceful stop support (`SIGINT` / `SIGTERM`)

---

## 🧱 Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Runtime  | Node.js   |
| Framework Bot | [Telegraf](https://telegraf.js.org/) v4 |
| Config   | dotenv    |
| Hosting  | Railway   |

---

## ⚙️ Environment Variables

Buat file `.env` di root project (jangan di-commit ke Git):

```env
BOT_TOKEN=isi_token_bot_kamu
CHANNEL_ID=@nama_channel_atau_id_numerik
```

| Variable | Keterangan |
|----------|------------|
| `BOT_TOKEN` | Token dari [@BotFather](https://t.me/BotFather) |
| `CHANNEL_ID` | Username channel (misal `@myfess`) atau ID numerik (misal `-1001234567890`) |

> ⚠️ Pastikan bot sudah ditambahkan sebagai **Admin** di channel tujuan.

---

## 🚀 Cara Deploy di Railway

### 1. Fork / Clone Repo

```bash
git clone https://github.com/gfrrmd/Menfess-Bot-Telegram-V.0.1.0.git
cd Menfess-Bot-Telegram-V.0.1.0
```

### 2. Buat Project di Railway

1. Buka [railway.app](https://railway.app) dan login
2. Klik **New Project** → **Deploy from GitHub repo**
3. Pilih repo `Menfess-Bot-Telegram-V.0.1.0`
4. Railway akan otomatis mendeteksi project Node.js

### 3. Set Environment Variables

Di Railway dashboard:
1. Masuk ke tab **Variables**
2. Tambahkan:
   - `BOT_TOKEN` → token dari BotFather
   - `CHANNEL_ID` → ID atau username channel tujuan

### 4. Deploy

Railway akan otomatis menjalankan perintah:

```bash
npm install
npm start
```

Bot akan langsung berjalan setelah deploy selesai. Cek log di tab **Deployments** untuk memastikan bot aktif.

---

## 🤖 Cara Penggunaan Bot

1. Start bot dengan `/start`
2. Kirim pesan diawali kata `mfs!`

**Contoh:**
```
mfs! Halo semuanya, ini pesan anonim!
```

Untuk media (foto/video), tambahkan `mfs!` di bagian **caption**.

---

## 📁 Struktur Project

```
Menfess-Bot-Telegram-V.0.1.0/
├── index.js        # Entry point bot
├── package.json    # Dependencies & scripts
├── .env            # Konfigurasi (tidak di-commit)
└── README.md
```

---

## 📄 Lisensi

MIT License — bebas digunakan dan dimodifikasi.
