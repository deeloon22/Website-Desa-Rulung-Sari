// ====== FIREBASE REALTIME DATABASE CONFIGURATION ======
// Pastikan Anda sudah setup Firebase di https://firebase.google.com/

// 1. SETUP FIREBASE (Replace dengan kredensial Anda sendiri)
const firebaseConfig = {
    apiKey: "AIzaSyDemoKeyJangan123DiGunakanGanti",
    authDomain: "desa-project.firebaseapp.com",
    projectId: "desa-project",
    storageBucket: "desa-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcd1234efgh5678ijkl"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ====== GLOBAL VARIABLES ======
let newsData = [];
let galleryData = [];
let villageInfo = {};

// ====== INITIALIZE REALTIME LISTENERS ======
function initializeFirebaseListeners() {
    console.log("Initializing Firebase Listeners...");
    
    // Listen to News Data (Real-time update)
    database.ref('desa/news').on('value', (snapshot) => {
        if (snapshot.exists()) {
            newsData = Object.values(snapshot.val());
            console.log("News updated:", newsData);
            renderPublic(); // Update UI immediately
        } else {
            newsData = [];
        }
    });

    // Listen to Gallery Data (Real-time update)
    database.ref('desa/gallery').on('value', (snapshot) => {
        if (snapshot.exists()) {
            galleryData = Object.values(snapshot.val());
            console.log("Gallery updated:", galleryData);
            renderPublic(); // Update UI immediately
        } else {
            galleryData = [];
        }
    });

    // Listen to Village Info (Real-time update)
    database.ref('desa/info').on('value', (snapshot) => {
        if (snapshot.exists()) {
            villageInfo = snapshot.val();
            console.log("Village info updated:", villageInfo);
            renderPublic(); // Update UI immediately
        }
    });
}

// ====== FIREBASE ADMIN FUNCTIONS ======

// Add News
function addNewsToFirebase(title, date, category, summary, detail, image) {
    const newId = Date.now().toString();
    const newsRef = database.ref(`desa/news/${newId}`);
    
    newsRef.set({
        id: newId,
        title: title,
        date: date,
        category: category,
        summary: summary,
        detail: detail,
        image: image,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        showToast("Berita berhasil ditambahkan!", "success");
        document.getElementById('add-news-form').reset();
    }).catch((error) => {
        console.error("Error adding news:", error);
        showToast("Gagal menambahkan berita: " + error.message, "error");
    });
}

// Delete News
function deleteNewsFromFirebase(newsId) {
    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
        database.ref(`desa/news/${newsId}`).remove()
            .then(() => {
                showToast("Berita berhasil dihapus.", "info");
            })
            .catch((error) => {
                showToast("Gagal menghapus berita: " + error.message, "error");
            });
    }
}

// Add Gallery
function addGalleryToFirebase(title, image) {
    const newId = Date.now().toString();
    const galleryRef = database.ref(`desa/gallery/${newId}`);
    
    galleryRef.set({
        id: newId,
        title: title,
        image: image,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        showToast("Foto berhasil ditambahkan!", "success");
        document.getElementById('add-gallery-form').reset();
    }).catch((error) => {
        console.error("Error adding gallery:", error);
        showToast("Gagal menambahkan foto: " + error.message, "error");
    });
}

// Delete Gallery
function deleteGalleryFromFirebase(galleryId) {
    if (confirm("Hapus foto ini dari galeri?")) {
        database.ref(`desa/gallery/${galleryId}`).remove()
            .then(() => {
                showToast("Foto berhasil dihapus.", "info");
            })
            .catch((error) => {
                showToast("Gagal menghapus foto: " + error.message, "error");
            });
    }
}

// Update Village Info
function updateVillageInfoFirebase(heroDesc, aboutText, populationCount, landArea) {
    database.ref('desa/info').update({
        heroDesc: heroDesc,
        aboutText: aboutText,
        populationCount: populationCount,
        landArea: landArea,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        showToast("Informasi Desa berhasil diperbarui!", "success");
    }).catch((error) => {
        console.error("Error updating info:", error);
        showToast("Gagal memperbarui informasi: " + error.message, "error");
    });
}

// ====== INIT FIREBASE ON PAGE LOAD ======
window.addEventListener('load', function() {
    initializeFirebaseListeners();
});
