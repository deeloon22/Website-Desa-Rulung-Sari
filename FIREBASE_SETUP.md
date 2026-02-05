# 🔥 PANDUAN SETUP FIREBASE REALTIME DATABASE

Website Anda sekarang menggunakan **Firebase Realtime Database** untuk update konten secara real-time. Ketika admin mengedit konten, semua user yang membuka website akan melihat perubahan otomatis tanpa perlu refresh.

## 📋 LANGKAH-LANGKAH SETUP

### 1. Buat Akun Firebase
- Buka https://firebase.google.com/
- Klik **"Get Started"** atau login dengan akun Google
- Pilih **"Create a project"**
- Isi nama project: `desa-rulung-sari` (atau nama desa Anda)
- Pilih lokasi: **Indonesia**
- Klik **"Create Project"** dan tunggu proses selesai

### 2. Setup Realtime Database
- Di halaman Project Dashboard Firebase, cari menu **"Build"** → **"Realtime Database"**
- Klik **"Create Database"**
- Pilih region: **Southeast Asia (Singapore)** (paling dekat dengan Indonesia)
- Pilih mode: **Start in Test Mode** (untuk development)
- Klik **"Enable"**

### 3. Setup Database Structure
- Di Realtime Database, buat struktur data dengan JSON berikut:

```json
{
  "desa": {
    "info": {
      "heroDesc": "Menuju desa yang mandiri, berbudaya, dan teknologi tepat guna bersama program KKN Universitas Kita.",
      "aboutText": "Desa Sejahtera terletak di kaki pegunungan yang asri. Mayoritas penduduk bermata pencaharian sebagai petani dan pengrajin. Kami berkomitmen untuk memajukan desa melalui digitalisasi tanpa meninggalkan kearifan lokal.",
      "populationCount": "1.200+",
      "landArea": "450Ha"
    },
    "news": {
      "1234567890": {
        "id": "1234567890",
        "title": "Kerja Bakti Membersihkan Saluran Irigasi",
        "date": "2026-01-15",
        "category": "Sosial",
        "summary": "Warga desa bahu membahu membersihkan saluran irigasi untuk menyambut musim tanam padi tahun ini.",
        "detail": "Warga desa bahu membahu membersihkan saluran irigasi untuk menyambut musim tanam padi tahun ini. Kegiatan ini dipimpin langsung oleh Kepala Desa dan diikuti oleh seluruh elemen masyarakat.",
        "image": "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    },
    "gallery": {
      "photo1": {
        "id": "photo1",
        "title": "Pemandangan Pagi",
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
      }
    }
  }
}
```

**Cara import data:**
- Klik icon ⋮ (3 titik) di Database → **Import JSON**
- Copy-paste struktur JSON di atas
- Klik **Import**

### 4. Ambil Kredensial Firebase
- Di Project Settings → **General** atau **</> Web**
- Scroll ke bawah dan cari **"Your web app's Firebase configuration"**
- Copy seluruh code JavaScript yang berisi `firebaseConfig`

Contohnya:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyDemoKeyJangan123DiGunakanGanti",
    authDomain: "desa-project.firebaseapp.com",
    projectId: "desa-project",
    storageBucket: "desa-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcd1234efgh5678ijkl"
};
```

### 5. Update File `firebase-config.js`
- Buka file **firebase-config.js** di folder project Anda
- Cari bagian `const firebaseConfig = {...}`
- Ganti dengan kredensial yang Anda copy dari Firebase
- **Simpan file**

### 6. Setup Security Rules (PENTING!)
Sebelum production, ubah security rules agar hanya admin yang bisa edit:

1. Di Firebase Console → **Realtime Database** → Tab **Rules**
2. Ganti dengan code berikut:

```json
{
  "rules": {
    "desa": {
      ".read": true,
      "info": {
        ".write": false
      },
      "news": {
        ".write": false
      },
      "gallery": {
        ".write": false
      }
    }
  }
}
```

Ini membuat:
- ✅ **Siapa saja bisa READ** (lihat konten)
- ❌ **Tidak ada yang bisa WRITE** (edit langsung dari database)

Untuk allow admin edit, Anda perlu setup **Firebase Authentication** (premium feature).

**Untuk saat ini (development):**
- Biarkan Test Mode aktif
- Rules otomatis: `.read: true` dan `.write: true`
- Setiap orang bisa edit (gunakan hanya di lingkungan terpercaya)

### 7. Test & Verifikasi
1. Upload website ke Vercel
2. Buka website di browser
3. Login ke Area Admin (Username: `RulungSari`, Password: `rulungsari21`)
4. Edit berita atau galeri
5. Buka tab baru dengan website yang sama
6. Lihat perubahan otomatis muncul tanpa refresh! 🎉

---

## 🔐 SECURITY CHECKLIST

**Sebelum Production:**
- [ ] Ubah password admin di `script.js`
- [ ] Setup proper Security Rules
- [ ] Aktifkan Firebase Authentication
- [ ] Disable Test Mode
- [ ] Backup data secara berkala

---

## 🚀 HOSTING DI VERCEL

1. Push code ke GitHub
2. Login ke https://vercel.com
3. Click **Add New... → Project**
4. Select repository Anda
5. Click **Deploy**
6. Website otomatis live dan akan auto-update saat ada perubahan data!

---

## 💡 TIPS & TROUBLESHOOTING

### Website tidak update?
- Cek Console (F12 → Console) untuk error messages
- Pastikan Firebase Config sudah benar di `firebase-config.js`
- Pastikan Database rule allows `.read`

### Gambar tidak muncul?
- Gambar disimpan sebagai Base64 di database (akan besar)
- Alternatif: Upload ke Firebase Storage (lebih baik)

### Admin panel tidak muncul?
- Cek username dan password
- Default: `RulungSari` / `rulungsari21`
- Ubah di `script.js` line `const ADMIN_USER` dan `const ADMIN_PASS`

---

## 📚 RESOURCES
- Firebase Docs: https://firebase.google.com/docs
- Realtime Database Guide: https://firebase.google.com/docs/database
- Vercel Deployment: https://vercel.com/docs

---

**Pertanyaan? Ada error?** Hubungi tim technical support Anda! 📞
