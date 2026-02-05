# ⚡ QUICK START FIREBASE (SINGKAT)

## Yang berubah:
✅ Website sekarang **real-time** - perubahan admin langsung terlihat ke semua user  
✅ Tidak perlu refresh browser  
✅ Berbasis cloud (Firebase)

---

## Setup Cepat (5 menit):

### 1. Buat Firebase Project
```
firebase.google.com → Create Project → Nama: "desa-rulung-sari"
```

### 2. Buat Realtime Database
```
Build → Realtime Database → Create → Southeast Asia
```

### 3. Paste struktur data di Database
Di "Rules" atau root database, import JSON ini:
```json
{
  "desa": {
    "info": {
      "heroDesc": "...",
      "aboutText": "...",
      "populationCount": "1.200+",
      "landArea": "450Ha"
    },
    "news": {},
    "gallery": {}
  }
}
```

### 4. Copy Firebase Config
- Project Settings → `firebaseConfig` code
- Buka file: **firebase-config.js**
- Ganti `const firebaseConfig = {...}` dengan milik Anda
- **Save!**

### 5. Push ke Vercel
```
git add .
git commit -m "Add Firebase real-time database"
git push
```

✅ **SELESAI!** Website Anda sekarang real-time! 🚀

---

## Test:
1. Login Area Admin (RulungSari / rulungsari21)
2. Edit berita/galeri
3. Buka tab lain → lihat perubahan otomatis!

---

## Files yang berubah:
- `index.html` - Tambah Firebase SDK
- `script.js` - Ubah ke Firebase functions
- `firebase-config.js` - **File BARU**, isi dengan config Anda
- `FIREBASE_SETUP.md` - Panduan lengkap

---

**Ada error?** Buka Developer Tools (F12 → Console) untuk melihat pesan error.
