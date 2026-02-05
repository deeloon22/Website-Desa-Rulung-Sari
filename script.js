// --- HELPER: CONVERT FILE TO BASE64 ---
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

// --- INITIALIZE REALTIME LISTENERS ---
function initializeFirebaseListeners() {
    console.log("Initializing Firebase Listeners...");
    
    // Listen to News Data (Real-time update)
    database.ref('desa/news').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const newsObj = snapshot.val();
            // Convert object to array if needed
            newsData = Array.isArray(newsObj) ? newsObj : Object.values(newsObj);
            console.log("News updated:", newsData);
            renderPublic(); // Update UI immediately
        } else {
            newsData = [];
        }
    });

    // Listen to Gallery Data (Real-time update)
    database.ref('desa/gallery').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const galleryObj = snapshot.val();
            // Convert object to array if needed
            galleryData = Array.isArray(galleryObj) ? galleryObj : Object.values(galleryObj);
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

// --- 1. DATA MANAGEMENT ---

// Initialize empty arrays
let newsData = [];
let galleryData = [];
let villageInfo = {};

// --- 2. RENDER FUNCTIONS ---

function renderPublic() {
    // Render Info
    document.getElementById('hero-desc').innerText = villageInfo.heroDesc;
    document.getElementById('about-text').innerText = villageInfo.aboutText;
    document.getElementById('public-population').innerText = villageInfo.populationCount;
    document.getElementById('public-land').innerText = villageInfo.landArea;

    // --- Render News Cards ---
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    newsData.forEach(news => {
        // Gunakan summary untuk kartu, jika tidak ada gunakan content (fallback)
        const displayText = news.summary || news.content;
        
        const card = `
            <div class="flex-none w-[85%] md:w-[calc(33.333%-1rem)] snap-start bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col">
                <div class="h-48 overflow-hidden relative flex-shrink-0">
                    <span class="absolute top-4 right-4 bg-desaGold text-desaGreen text-xs font-bold px-3 py-1 rounded-full shadow z-10">${news.category}</span>
                    <img src="${news.image}" alt="${news.title}" class="w-full h-full object-cover transition duration-500 hover:scale-110">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <div class="text-xs text-gray-500 mb-2 flex items-center">
                        <i class="far fa-calendar-alt mr-2"></i> ${formatDate(news.date)}
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-desaGreen cursor-pointer line-clamp-2">${news.title}</h3>
                    <p class="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">${displayText}</p>
                    <button onclick="openNewsModal(${news.id})" class="mt-auto text-desaGreen font-semibold text-sm hover:underline text-left">Baca Selengkapnya &rarr;</button>
                </div>
            </div>
        `;
        newsContainer.innerHTML += card;
    });

    // --- Render Gallery Cards ---
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = '';
    galleryData.forEach(item => {
        const card = `
            <div class="flex-none w-[80%] md:w-[calc(25%-0.75rem)] snap-start group relative rounded-xl overflow-hidden shadow-md h-64 cursor-pointer">
                <img src="${item.image}" class="w-full h-full object-cover hover:opacity-90 transition duration-300 transform group-hover:scale-[1.05]">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                    <p class="text-white font-semibold text-sm">${item.title}</p>
                </div>
            </div>
        `;
        galleryContainer.innerHTML += card;
    });
}

// --- NEW: MODAL LOGIC ---
function openNewsModal(id) {
    const news = newsData.find(n => n.id === id);
    if(!news) return;

    document.getElementById('modal-image').src = news.image;
    document.getElementById('modal-category').innerText = news.category;
    document.getElementById('modal-date').innerText = formatDate(news.date);
    document.getElementById('modal-title').innerText = news.title;
    
    // Prioritaskan 'detail', jika tidak ada gunakan 'content', jika tidak ada gunakan 'summary'
    let rawContent = news.detail || news.content || news.summary;
    
    // Format Newlines menjadi paragraf HTML
    const formattedContent = rawContent.split('\n').map(para => 
        para.trim() ? `<p class="mb-3">${para}</p>` : ''
    ).join('');
    
    document.getElementById('modal-content').innerHTML = formattedContent;

    document.getElementById('news-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Matikan scroll background
}

function closeNewsModal() {
    document.getElementById('news-modal').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Hidupkan scroll background
}

// --- HERO SLIDER LOGIC ---
let currentHeroIndex = 0;
const heroImages = document.querySelectorAll('#hero-backgrounds img');

function rotateHeroImages() {
    // Need to re-query in case DOM wasn't ready (though window.onload handles it)
    // But good for safety.
    const images = document.querySelectorAll('#hero-backgrounds img');
    if(images.length === 0) return;
    
    // Fade out current
    images[currentHeroIndex].classList.remove('opacity-100');
    images[currentHeroIndex].classList.add('opacity-0');
    
    // Calculate next
    currentHeroIndex = (currentHeroIndex + 1) % images.length;
    
    // Fade in next
    images[currentHeroIndex].classList.remove('opacity-0');
    images[currentHeroIndex].classList.add('opacity-100');
}

// Start interval
setInterval(rotateHeroImages, 5000); // Change every 5 seconds

function scrollNews(direction) {
    const container = document.getElementById('news-container');
    const scrollAmount = container.clientWidth / 3; 
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

function scrollGallery(direction) {
    const container = document.getElementById('gallery-container');
    const scrollAmount = container.clientWidth / 2; 
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

function renderAdminTable() {
    // Populate Form inputs with current info
    document.getElementById('editHeroDesc').value = villageInfo.heroDesc || "";
    document.getElementById('editAboutText').value = villageInfo.aboutText || "";
    document.getElementById('editPopulation').value = villageInfo.populationCount || "";
    document.getElementById('editLand').value = villageInfo.landArea || "";

    // Render Table Berita
    const tbody = document.getElementById('admin-news-table');
    tbody.innerHTML = '';
    newsData.forEach((news) => {
        const row = `
            <tr class="border-b hover:bg-gray-50 transition">
                <td class="p-3 text-sm text-gray-600">${news.date}</td>
                <td class="p-3 font-semibold text-gray-800">${news.title}</td>
                <td class="p-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">${news.category}</span></td>
                <td class="p-3 text-center">
                    <button onclick="deleteNewsFromFirebase('${news.id}')" class="text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 p-2 rounded-full transition">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });

    // Render List Galeri
    const galleryList = document.getElementById('admin-gallery-list');
    galleryList.innerHTML = '';
    galleryData.forEach((item) => {
        const card = `
            <div class="bg-white p-2 rounded-lg shadow border border-gray-200 relative group">
                <div class="h-32 overflow-hidden rounded mb-2">
                    <img src="${item.image}" class="w-full h-full object-cover">
                </div>
                <p class="text-xs font-bold text-gray-700 truncate mb-1">${item.title}</p>
                <button onclick="deleteGalleryFromFirebase('${item.id}')" class="w-full bg-red-100 text-red-600 text-xs py-1 rounded hover:bg-red-200 transition">
                    Hapus
                </button>
            </div>
        `;
        galleryList.innerHTML += card;
    });
}

// --- 3. LOGIC & NAVIGATION ---

function showPage(pageId) {
    // Hide all pages
    document.getElementById('page-home').classList.add('hidden');
    document.getElementById('page-login').classList.add('hidden');
    document.getElementById('page-admin').classList.add('hidden');
    
    // Show requested page
    document.getElementById(`page-${pageId}`).classList.remove('hidden');

    // Handle Navbar visibility
    const navbar = document.getElementById('navbar');
    if(pageId === 'home') {
        renderPublic();
        navbar.classList.remove('hidden');
        window.scrollTo(0, 0);
    } else {
        navbar.classList.add('hidden');
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// --- 4. AUTHENTICATION (Simulated) ---

const ADMIN_USER = "RulungSari";
const ADMIN_PASS = "rulungsari21";

function checkLoginState() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        renderAdminTable();
        showPage('admin');
    } else {
        showPage('login');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    if (u === ADMIN_USER && p === ADMIN_PASS) {
        sessionStorage.setItem('isLoggedIn', 'true');
        showToast("Login Berhasil! Selamat datang Admin.", "success");
        renderAdminTable();
        showPage('admin');
    } else {
        showToast("Username atau Password salah!", "error");
    }
}

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    showToast("Berhasil Logout.", "info");
    showPage('home');
}

// --- 5. ADMIN ACTIONS ---

function switchAdminTab(tabName) {
    const panelBerita = document.getElementById('admin-panel-berita');
    const panelGaleri = document.getElementById('admin-panel-galeri');
    const panelInfo = document.getElementById('admin-panel-info');
    
    const btnBerita = document.getElementById('tab-berita');
    const btnGaleri = document.getElementById('tab-galeri');
    const btnInfo = document.getElementById('tab-info');

    // Reset Styles
    [btnBerita, btnGaleri, btnInfo].forEach(btn => {
        btn.className = "bg-desaGreen text-white px-6 py-3 rounded-t-lg font-bold shadow-md opacity-70 hover:opacity-100 whitespace-nowrap";
    });
    [panelBerita, panelGaleri, panelInfo].forEach(panel => panel.classList.add('hidden'));

    // Set Active Style
    const activeBtnClass = "bg-white text-desaGreen px-6 py-3 rounded-t-lg font-bold shadow-md border-b-2 border-desaGold whitespace-nowrap";

    if (tabName === 'berita') {
        panelBerita.classList.remove('hidden');
        btnBerita.className = activeBtnClass;
    } else if (tabName === 'galeri') {
        panelGaleri.classList.remove('hidden');
        btnGaleri.className = activeBtnClass;
    } else {
        panelInfo.classList.remove('hidden');
        btnInfo.className = activeBtnClass;
    }
}

// Updated: Add News with File Support & Detail - FIREBASE VERSION
async function addNews(e) {
    e.preventDefault();
    const title = document.getElementById('newsTitle').value;
    const date = document.getElementById('newsDate').value;
    const category = document.getElementById('newsCategory').value;
    const summary = document.getElementById('newsContent').value;
    const detail = document.getElementById('newsDetail').value;
    const fileInput = document.getElementById('newsImage');
    
    let image = "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"; // Default

    if (fileInput.files.length > 0) {
        try {
            image = await convertBase64(fileInput.files[0]);
        } catch (error) {
            console.error("Error reading file:", error);
            showToast("Gagal membaca file gambar", "error");
            return;
        }
    }

    // Save to Firebase
    addNewsToFirebase(title, date, category, summary, detail, image);
}

function deleteNews(index) {
    if(newsData[index]) {
        deleteNewsFromFirebase(newsData[index].id);
    }
}

// Updated: Add Gallery with File Support - FIREBASE VERSION
async function addGallery(e) {
    e.preventDefault();
    const title = document.getElementById('galleryTitle').value;
    const fileInput = document.getElementById('galleryImage');
    
    if (fileInput.files.length === 0) {
        showToast("Silakan pilih file gambar!", "error");
        return;
    }

    try {
        const image = await convertBase64(fileInput.files[0]);
        addGalleryToFirebase(title, image);
    } catch (error) {
        console.error("Error:", error);
        showToast("Gagal mengupload gambar.", "error");
    }
}

function deleteGallery(index) {
    if(galleryData[index]) {
        deleteGalleryFromFirebase(galleryData[index].id);
    }
}

function updateVillageInfo(e) {
    e.preventDefault();
    const heroDesc = document.getElementById('editHeroDesc').value;
    const aboutText = document.getElementById('editAboutText').value;
    const populationCount = document.getElementById('editPopulation').value;
    const landArea = document.getElementById('editLand').value;
    
    // Save to Firebase
    updateVillageInfoFirebase(heroDesc, aboutText, populationCount, landArea);
}

// --- 6. UTILS ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    let icon = 'fa-info-circle';
    let color = 'text-blue-500';
    
    if(type === 'success') { icon = 'fa-check-circle'; color = 'text-green-500'; toast.style.borderLeftColor = '#22c55e'; }
    if(type === 'error') { icon = 'fa-exclamation-circle'; color = 'text-red-500'; toast.style.borderLeftColor = '#ef4444'; }
    
    toast.innerHTML = `
        <i class="fas ${icon} ${color} text-xl mr-3"></i>
        <span class="font-semibold text-gray-700">${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.remove('nav-scrolled');
        navbar.classList.add('py-6');
    }
});

// --- INIT ---
window.addEventListener('load', function() {
    initializeFirebaseListeners();
    renderPublic();
});
