// --- 1. DATA MANAGEMENT WITH LOCALSTORAGE ---
// 📝 CARA KERJA CONTENT MANAGEMENT:
// 
// STEP 1: Edit konten di bawah ini (defaultNewsData, defaultGalleryData, defaultVillageInfo)
//         Perubahan akan disimpan dalam KODE
//
// STEP 2: Klik tombol "Reset ke Default" di halaman admin
//         Data akan dimuat dari kode dan localStorage dihapus
//
// STEP 3: Konten baru langsung muncul di website
//
// STEP 4: Setelah itu, admin bisa UPDATE konten lewat FORM DI WEBSITE
//         Perubahan akan disimpan di localStorage (browser)
//
// ⚠️ PENTING: Jangan hapus koma, kurung, atau tanda kutip!
//            Hanya ubah nilai di dalam tanda kutip atau elemen array.

// ========================================
// 📰 DATA KABAR/BERITA DESA
// ========================================
// Gunakan path: "image/nama-file.jpeg" untuk file lokal
// ATAU gunakan URL: "https://..." untuk gambar online
// 
// File foto tersedia di folder image/:
// foto 1.jpeg, foto 2.jpeg, foto 3.jpeg, foto 4.jpeg, foto 5.jpeg
// foto 6.jpeg, foto 7.jpeg, foto 8.jpeg, foto 9.jpeg, foto 10.jpeg
// foto 11.jpeg, foto desa.jpeg, logo lamsel.jpeg

const defaultNewsData = [
    {
        id: 1,
        title: "Rapat Koordinasi RT",
        date: "2026-01-08",
        category: "Organisasi",
        image: "image/foto 8.jpeg",
        summary: "Rapat Koordinasi RT Desa Rulung Sari yang dihadiri oleh perangkat desa dan para Ketua RT guna membahas koordinasi, evaluasi, serta penyampaian informasi terkait kegiatan dan pelayanan kepada masyarakat.",
        content: "Pemerintah Desa Rulung Sari melaksanakan Rapat Koordinasi RT yang bertempat di ruang pertemuan desa. Kegiatan ini dihadiri oleh perangkat desa, para Ketua RT, serta perwakilan masyarakat. Rapat koordinasi ini bertujuan untuk memperkuat komunikasi dan sinergi antara pemerintah desa dan Ketua RT dalam pelaksanaan pelayanan kepada masyarakat. Dalam rapat tersebut dibahas berbagai hal terkait evaluasi kegiatan yang telah berjalan, penyampaian informasi desa, serta koordinasi rencana kegiatan ke depan. Melalui rapat koordinasi ini diharapkan tercipta kesamaan pemahaman, peningkatan kinerja RT, serta pelayanan yang lebih optimal bagi masyarakat Desa Rulung Sari."
    },
    {
        id: 2,
        title: "Ngapunten Izin Healing Karang Taruna",
        date: "2025-11-16",
        category: "Kegiatan",
        image: "image/foto 10.jpeg",
        summary: "Karang Taruna Desa Rulung Sari melaksanakan kegiatan ‘Ngepunten Izin Healing’ sebagai bentuk kebersamaan dan penyegaran bagi anggota. Kegiatan ini diikuti oleh pemuda-pemudi Karang Taruna dengan penuh semangat dan kebersamaan.",
        content: "Karang Taruna Desa Rulung Sari melaksanakan kegiatan bertajuk ‘Ngepunten Izin Healing’ sebagai bentuk kebersamaan dan penguatan solidaritas antaranggota. Kegiatan ini diikuti oleh pemuda dan pemudi Karang Taruna Desa Rulung Sari dengan penuh antusias dan semangat kebersamaan.Kegiatan healing ini bertujuan untuk memberikan penyegaran fisik dan mental setelah berbagai aktivitas dan program kerja yang telah dijalankan. Selain sebagai sarana rekreasi, kegiatan ini juga menjadi momen penting untuk mempererat tali silaturahmi, meningkatkan kekompakan, serta menumbuhkan rasa kebersamaan antaranggota Karang Taruna.Selama kegiatan berlangsung, seluruh peserta mengikuti rangkaian acara dengan tertib dan penuh keceriaan. Suasana kebersamaan terlihat jelas melalui interaksi antaranggota yang saling mendukung dan menjaga kekompakan. Diharapkan melalui kegiatan ini, Karang Taruna Desa Rulung Sari dapat kembali menjalankan peran dan program kerjanya dengan semangat baru, ide-ide segar, serta komitmen yang lebih kuat dalam mendukung pembangunan dan kegiatan sosial di Desa Rulung Sari."
    },
    {
        id: 3,
        title: "Gotong Royong Bersama Perangkat Desa",
        date: "2026-01-08",
        category: "Kegiatan",
        image: "image/foto 9.jpeg",
        summary: "Pemerintah Desa Rulung Sari bersama perangkat desa dan masyarakat melaksanakan kegiatan gotong royong sebagai bentuk kebersamaan dan kepedulian terhadap kebersihan serta lingkungan desa.",
        content: "Pemerintah Desa Rulung Sari bersama perangkat desa dan masyarakat melaksanakan kegiatan gotong royong sebagai wujud kebersamaan dan kepedulian terhadap kebersihan serta kelestarian lingkungan desa. Kegiatan ini dilaksanakan dengan melibatkan berbagai unsur masyarakat yang secara bersama-sama bekerja membersihkan lingkungan sekitar. Gotong royong ini bertujuan untuk menciptakan lingkungan desa yang bersih, sehat, dan nyaman, sekaligus mempererat hubungan antara pemerintah desa dan masyarakat. Melalui kegiatan ini, nilai-nilai kebersamaan, kepedulian sosial, dan semangat kerja sama terus ditumbuhkan di tengah kehidupan bermasyarakat. Selama kegiatan berlangsung, perangkat desa dan masyarakat terlihat antusias dalam melaksanakan berbagai aktivitas seperti membersihkan area umum, merapikan lingkungan, serta menjaga fasilitas desa. Diharapkan melalui kegiatan gotong royong ini, kesadaran masyarakat akan pentingnya menjaga kebersihan dan keindahan lingkungan semakin meningkat, sehingga tercipta Desa Rulung Sari yang bersih, sehat, dan asri."
    },
    {
        id: 4,
        title: "Lokakarya KKN Unila Periode 1 2026",
        date: "2026-01-12",
        category: "Kegiatan",
        image: "image/foto lokakarya.jpeg",
        summary: "Kegiatan Lokakarya KKN Universitas Lampung Periode 1 Tahun 2026 dilaksanakan di Aula Balai Desa Rulung Sari bersama perangkat desa dan warga sebagai wadah penyampaian program kerja serta diskusi dan kolaborasi pembangunan desa.",
        content: `Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Lampung Periode 1 Tahun 2026 melaksanakan kegiatan lokakarya yang bertempat di Aula Balai Desa Rulung Sari. Kegiatan ini dihadiri oleh perangkat desa, tokoh masyarakat, serta warga Desa Rulung Sari. Lokakarya ini bertujuan untuk memperkenalkan mahasiswa KKN kepada masyarakat sekaligus memaparkan rencana program kerja yang akan dilaksanakan selama masa pengabdian.
        Dalam kegiatan lokakarya ini, mahasiswa KKN menyampaikan berbagai program yang berfokus pada pemberdayaan masyarakat, peningkatan kualitas sumber daya manusia, serta dukungan terhadap pembangunan desa. Selain pemaparan program, kegiatan ini juga menjadi sarana diskusi dan penyerapan aspirasi masyarakat agar program KKN dapat berjalan selaras dengan kebutuhan dan potensi Desa Rulung Sari.
        Melalui lokakarya ini, diharapkan terjalin kerja sama yang baik antara mahasiswa KKN, pemerintah desa, dan masyarakat. Sinergi tersebut diharapkan mampu mendukung terlaksananya program-program KKN secara optimal serta memberikan manfaat nyata bagi Desa Rulung Sari selama dan setelah pelaksanaan KKN Universitas Lampung Periode 1 Tahun 2026.`
    },
    {
        id: 5,
        title: "Kegiatan Kolaborasi Karang Taruna x Pasar Malam",
        date: "2025-10-15",
        category: "Kegiatan",
        image: "image/foto 11.jpeg",
        summary: "Karang Taruna Desa Rulung Sari melaksanakan kegiatan kolaborasi dengan penyelenggara pasar malam di Lapangan Balai Desa sebagai upaya mendukung kegiatan hiburan masyarakat sekaligus meningkatkan kebersamaan dan partisipasi pemuda desa.",
        content: `Karang Taruna Desa Rulung Sari melaksanakan kegiatan kolaborasi dengan penyelenggara pasar malam yang bertempat di Lapangan Balai Desa. Kegiatan ini merupakan bentuk peran aktif pemuda desa dalam mendukung kegiatan hiburan masyarakat sekaligus meningkatkan partisipasi dan kebersamaan warga.
        Kolaborasi ini bertujuan untuk menciptakan suasana hiburan yang aman, tertib, dan nyaman bagi masyarakat, serta memberikan ruang bagi pemuda desa untuk terlibat langsung dalam kegiatan sosial dan ekonomi desa. Keberadaan pasar malam diharapkan dapat menjadi sarana hiburan bagi masyarakat sekaligus menggerakkan roda perekonomian lokal.
        Selama kegiatan berlangsung, Karang Taruna berperan dalam membantu pengaturan lokasi, menjaga ketertiban, serta mendukung kelancaran aktivitas pasar malam. Antusiasme masyarakat terlihat tinggi dalam menyambut kegiatan ini. Diharapkan melalui kolaborasi antara Karang Taruna dan penyelenggara pasar malam, terjalin kerja sama yang baik dan berkelanjutan guna mendukung kegiatan-kegiatan positif lainnya di Desa Rulung Sari.`
    },
    {
        id: 6,
        title: "Sosialisasi Calon Anggota Koperasi Desa",
        date: "2025-11-10",
        category: "Organisasi",
        image: "image/foto 3.jpeg",
        summary: "Kegiatan Sosialisasi Calon Anggota Koperasi Desa dilaksanakan di Aula Balai Desa Rulung Sari sebagai upaya memberikan pemahaman kepada masyarakat mengenai manfaat dan mekanisme keanggotaan koperasi desa.",
        content: `Pemerintah Desa Rulung Sari melaksanakan kegiatan Sosialisasi Calon Anggota Koperasi Desa yang bertempat di Aula Balai Desa Rulung Sari. Kegiatan ini dihadiri oleh perangkat desa dan masyarakat sebagai calon anggota koperasi desa. Sosialisasi ini bertujuan untuk memberikan pemahaman kepada masyarakat mengenai peran, manfaat, serta mekanisme keanggotaan koperasi desa dalam mendukung peningkatan perekonomian masyarakat.
        Dalam kegiatan sosialisasi tersebut disampaikan penjelasan mengenai tujuan pembentukan koperasi desa, hak dan kewajiban anggota, serta peluang usaha yang dapat dikembangkan melalui koperasi. Selain itu, peserta juga diberikan kesempatan untuk berdiskusi dan menyampaikan pertanyaan terkait pengelolaan dan partisipasi dalam koperasi desa.
        Melalui kegiatan sosialisasi ini, diharapkan masyarakat dapat memahami pentingnya koperasi sebagai wadah ekonomi bersama yang dikelola secara transparan dan berkelanjutan. Kegiatan ini juga diharapkan mampu meningkatkan minat dan partisipasi masyarakat untuk bergabung sebagai anggota koperasi desa demi mewujudkan kemandirian dan kesejahteraan ekonomi Desa Rulung Sari.`
    },
    {
        id: 7,
        title: "Kegiatan Posyandu Dusun 3",
        date: "2026-01-14",
        category: "Sosial",
        image: "image/foto posyandu.jpeg",
        summary: "Mahasiswa KKN Universitas Lampung melaksanakan kegiatan Posyandu di Dusun III bersama kader dan bidan desa, sekaligus mengadakan sosialisasi pencegahan stunting kepada masyarakat.",
        content: `Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Lampung melaksanakan kegiatan Posyandu di Dusun III Desa Rulung Sari bekerja sama dengan kader Posyandu dan bidan desa. Kegiatan ini diikuti oleh masyarakat, khususnya ibu dan balita, sebagai bentuk dukungan terhadap peningkatan pelayanan kesehatan ibu dan anak di tingkat desa.
        Dalam kegiatan Posyandu tersebut, mahasiswa KKN turut membantu pelaksanaan pelayanan kesehatan seperti penimbangan balita, pengukuran tinggi badan, serta pencatatan tumbuh kembang anak. Selain itu, mahasiswa KKN Universitas Lampung juga melaksanakan sosialisasi pencegahan stunting yang bertujuan untuk meningkatkan pemahaman masyarakat mengenai pentingnya pemenuhan gizi sejak dini.
        Sosialisasi stunting yang disampaikan oleh mahasiswa KKN mencakup penjelasan tentang pengertian stunting, faktor penyebab, dampak jangka panjang, serta langkah-langkah pencegahan yang dapat dilakukan oleh keluarga, khususnya melalui pemberian gizi seimbang dan pola asuh yang tepat. Melalui kegiatan ini, diharapkan terjalin sinergi antara mahasiswa KKN, tenaga kesehatan, dan masyarakat dalam upaya mencegah stunting serta mewujudkan generasi Desa Rulung Sari yang sehat dan berkualitas.`
    },
    {
        id: 8,
        title: "Musyawarah Desa Penetapan APBDes Tahun Anggaran 2026",
        date: "2025-09-10",
        category: "Organisasi",
        image: "image/foto 7.jpeg",
        summary: "Pemerintah Desa Rulung Sari melaksanakan Musyawarah Desa Penetapan Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran 2026 sebagai bentuk transparansi dan partisipasi masyarakat dalam perencanaan pembangunan desa.",
        content: `Pemerintah Desa Rulung Sari melaksanakan kegiatan Musyawarah Desa Penetapan Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran 2026. Kegiatan ini dilaksanakan sebagai bagian dari proses perencanaan dan pengelolaan keuangan desa yang transparan dan akuntabel. Musyawarah desa ini dihadiri oleh perangkat desa, Badan Permusyawaratan Desa (BPD), lembaga kemasyarakatan desa, serta perwakilan masyarakat.
        Dalam musyawarah tersebut dibahas dan disepakati rancangan APBDes Tahun Anggaran 2026 yang mencakup rencana pendapatan desa, alokasi belanja desa, serta pembiayaan desa. Seluruh peserta musyawarah diberikan kesempatan untuk menyampaikan pendapat, masukan, dan saran guna memastikan anggaran yang ditetapkan sesuai dengan kebutuhan dan prioritas pembangunan Desa Rulung Sari.
        Melalui Musyawarah Desa Penetapan APBDes ini, diharapkan tercipta kesepakatan bersama yang mencerminkan aspirasi masyarakat serta mendukung pelaksanaan pembangunan desa yang berkelanjutan. Kegiatan ini juga menjadi wujud komitmen Pemerintah Desa Rulung Sari dalam mewujudkan tata kelola pemerintahan desa yang baik, transparan, dan partisipatif.`
    },
    {
        id: 9,
        title: "Kegiatan Sosialisasi IoT di SMP Harapan",
        date: "2026-01-24",
        category: "Kegiatan",
        image: "image/foto sosialisasi IoT ke SMP Harapan.jpeg",
        summary: "Mahasiswa KKN Universitas Lampung Periode 1 Tahun 2026 melaksanakan kegiatan Sosialisasi Internet of Things (IoT) di SMP Harapan sebagai upaya pengenalan teknologi kepada siswa.",
        content: `Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Lampung Periode 1 Tahun 2026 melaksanakan kegiatan Sosialisasi Internet of Things (IoT) di SMP Harapan. Kegiatan ini bertujuan untuk memperkenalkan konsep dasar teknologi IoT kepada siswa serta meningkatkan literasi teknologi di lingkungan sekolah.
        Dalam kegiatan sosialisasi ini, mahasiswa KKN menyampaikan materi mengenai pengertian Internet of Things, contoh penerapannya dalam kehidupan sehari-hari, serta manfaat teknologi IoT di berbagai bidang. Penyampaian materi dilakukan secara interaktif agar siswa lebih mudah memahami perkembangan teknologi dan penggunaannya secara positif.
        Melalui kegiatan sosialisasi IoT ini, diharapkan siswa SMP Harapan dapat menambah wawasan dan ketertarikan terhadap teknologi digital sejak dini. Kegiatan ini juga menjadi bentuk kontribusi mahasiswa KKN Universitas Lampung dalam mendukung peningkatan kualitas pendidikan dan pengetahuan teknologi di Desa Rulung Sari.`
    },
    {
        id: 10,
        title: "Kegiatan Memperingati Hari Kartini",
        date: "2025-04-21",
        category: "Sosial",
        image: "image/foto 4.jpeg",
        summary: "Perangkat Desa Rulung Sari melaksanakan kegiatan peringatan Hari Kartini sebagai bentuk penghormatan terhadap perjuangan dan peran perempuan dalam pemerintahan dan pembangunan desa.",
        content: `Dalam rangka memperingati Hari Kartini, Perangkat Desa Rulung Sari melaksanakan kegiatan peringatan Hari Kartini sebagai wujud penghormatan terhadap jasa dan perjuangan R.A. Kartini. Kegiatan ini diselenggarakan untuk menumbuhkan semangat emansipasi serta mengapresiasi peran perempuan, khususnya dalam lingkungan pemerintahan desa.
        Peringatan Hari Kartini ini menjadi momentum untuk memperkuat kebersamaan antarperangkat desa serta meningkatkan kesadaran akan pentingnya peran perempuan dalam mendukung pelayanan publik dan pembangunan desa. Kegiatan dilaksanakan dengan penuh kebersamaan dan semangat kekeluargaan.
        Melalui kegiatan peringatan Hari Kartini ini, diharapkan nilai-nilai perjuangan R.A. Kartini dapat terus diteladani dan diterapkan dalam pelaksanaan tugas pemerintahan desa, sehingga tercipta aparatur desa yang profesional, berdaya, dan berkomitmen dalam melayani masyarakat Desa Rulung Sari.`
    },
    {
        id: 11,
        title: "Kegiatan Penyaluran BLT DD Triwulan IV",
        date: "2025-12-12",
        category: "Sosial",
        image: "image/foto 5.jpeg",
        summary: "Pemerintah Desa Rulung Sari melaksanakan kegiatan Penyaluran Bantuan Langsung Tunai Dana Desa (BLT DD) Triwulan IV kepada Keluarga Penerima Manfaat sesuai ketentuan yang berlaku.",
        content: `Pemerintah Desa Rulung Sari melaksanakan kegiatan Penyaluran Bantuan Langsung Tunai Dana Desa (BLT DD) Triwulan IV sebagai bentuk dukungan pemerintah desa kepada masyarakat yang tergolong sebagai Keluarga Penerima Manfaat (KPM). Kegiatan ini dilaksanakan sesuai dengan peraturan dan ketentuan yang berlaku serta berpedoman pada prinsip transparansi dan akuntabilitas.
        Penyaluran BLT DD Triwulan IV ini bertujuan untuk membantu meringankan beban ekonomi masyarakat serta meningkatkan daya beli keluarga penerima manfaat. Proses penyaluran dilakukan secara tertib dan terorganisir dengan melibatkan perangkat desa guna memastikan bantuan diterima langsung oleh masyarakat yang berhak.
        Melalui kegiatan penyaluran BLT DD ini, Pemerintah Desa Rulung Sari berharap bantuan yang diberikan dapat dimanfaatkan dengan sebaik-baiknya oleh KPM untuk memenuhi kebutuhan pokok. Kegiatan ini juga menjadi wujud komitmen pemerintah desa dalam mendukung kesejahteraan masyarakat serta pelaksanaan program perlindungan sosial di tingkat desa.`
    }
];

// ========================================
// 🖼️ DATA GALERI DESA
// ========================================
const defaultGalleryData = [
    {
        id: 1,
        title: "Balai Desa Rulung Sari",
        image: "image/foto desa.jpeg"
    },
    {
        id: 2,
        title: "Kegiatan Posyandu Dusun 3",
        image: "image/foto posyandu.jpeg"
    },
    {
        id: 3,
        title: "Musyawarah Desa Penetapan APBDes",
        image: "image/foto 7.jpeg"
    },
    {
        id: 4,
        title: "Memperingati Hari Kartini",
        image: "image/foto 4.jpeg"
    },
    {
        id: 5,
        title: "Ngapunten Izin Healing Karang Taruna",
        image: "image/foto 10.jpeg"
    },
    {
        id: 6,
        title: "Kegiatan Kolaborasi Karang Taruna x Pasar Malam",
        image: "image/foto 11.jpeg"
    },
    {
        id: 7,
        title: "Rapat Koordinasi Bulanan Perangkat Desa",
        image: "image/foto 8.jpeg"
    },
    {
        id: 8,
        title: "Sosialisasi Calon Anggota Koperasi Desa",
        image: "image/foto 3.jpeg"
    },
    {
        id: 9,
        title: "Penyaluran BLT DD TRiwulan IV",
        image: "image/foto 5.jpeg"
    },
    {
        id: 10,
        title: "Lokakarya KKN Unila Periode 1 2026",
        image: "image/foto lokakarya.jpeg"
    },
    {
        id: 11,
        title: "Kegiatan Gotong Royong Bersama Perangkat Desa",
        image: "image/foto 9.jpeg"
    },
    {
        id: 12,
        title: "Sosialisasi IoT di SMP Harapan",
        image: "image/foto sosialisasi IoT ke SMP Harapan.jpeg"
    }
];


// ========================================
// ℹ️ INFO DESA (Hero, About, dll)
// ========================================
const defaultVillageInfo = {
    heroDesc: "Mewujudkan Desa Rulung Sari Menjadi Desa Mandiri Melalui Bidang Pertanian Dan Industri Kecil",
    aboutText: "Desa Rulung Sari merupakan Desa Pemekaran dari Desa Rulung Helok. Secara resmi Desa Rulung Sari berdiri tanggal 06 Mei 2013 sesuai dengan surat Pengesahan Desa dari Kecamatan Natar dan Kabupaten Lampung Selatan. Pada tahun 2013 penduduk Desa Rulung Sari sejumlah 1.006 KK dan sebanyak 3779 jiwa.",
    populationCount: "4.459",
    landArea: "1.195Ha"
};

// --- HELPER: Hitung checksum data untuk detect perubahan ---
function getDataChecksum(data) {
    return JSON.stringify(data).split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0).toString();
}

// Initialize data from localStorage or use default
// ✅ Saat pertama kali dijalankan, akan memuat data DEFAULT dari kode
// ✅ Data yang diubah via form akan disimpan ke localStorage
// ✅ Kalau kode diupdate, localStorage otomatis di-reset dan menampilkan data terbaru dari kode

// Hitung checksum dari default data di kode
const newsChecksum = getDataChecksum(defaultNewsData);
const galleryChecksum = getDataChecksum(defaultGalleryData);
const villageChecksum = getDataChecksum(defaultVillageInfo);

// Cek apakah ada perubahan di kode
const storedNewsChecksum = localStorage.getItem('newsChecksum');
const storedGalleryChecksum = localStorage.getItem('galleryChecksum');
const storedVillageChecksum = localStorage.getItem('villageChecksum');

// Jika checksum berbeda, data di kode sudah berubah - reset localStorage
if (storedNewsChecksum !== newsChecksum) {
    localStorage.removeItem('newsData');
    localStorage.setItem('newsChecksum', newsChecksum);
}
if (storedGalleryChecksum !== galleryChecksum) {
    localStorage.removeItem('galleryData');
    localStorage.setItem('galleryChecksum', galleryChecksum);
}
if (storedVillageChecksum !== villageChecksum) {
    localStorage.removeItem('villageInfo');
    localStorage.setItem('villageChecksum', villageChecksum);
}

// Load data dari localStorage atau gunakan default
let newsData = localStorage.getItem('newsData') ? JSON.parse(localStorage.getItem('newsData')) : defaultNewsData;
let galleryData = localStorage.getItem('galleryData') ? JSON.parse(localStorage.getItem('galleryData')) : defaultGalleryData;
let villageInfo = localStorage.getItem('villageInfo') ? JSON.parse(localStorage.getItem('villageInfo')) : defaultVillageInfo;

// Save data functions
function saveNews() {
    localStorage.setItem('newsData', JSON.stringify(newsData));
    renderPublic();
}

function saveGallery() {
    localStorage.setItem('galleryData', JSON.stringify(galleryData));
    renderPublic();
}

function saveVillageInfo() {
    localStorage.setItem('villageInfo', JSON.stringify(villageInfo));
    renderPublic();
}

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
    newsData.forEach((news, index) => {
        const row = `
            <tr class="border-b hover:bg-gray-50 transition">
                <td class="p-3 text-sm text-gray-600">${news.date}</td>
                <td class="p-3 font-semibold text-gray-800">${news.title}</td>
                <td class="p-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">${news.category}</span></td>
                <td class="p-3 text-center">
                    <button onclick="deleteNews(${index})" class="text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 p-2 rounded-full transition">
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
    galleryData.forEach((item, index) => {
        const card = `
            <div class="bg-white p-2 rounded-lg shadow border border-gray-200 relative group">
                <div class="h-32 overflow-hidden rounded mb-2">
                    <img src="${item.image}" class="w-full h-full object-cover">
                </div>
                <p class="text-xs font-bold text-gray-700 truncate mb-1">${item.title}</p>
                <button onclick="deleteGallery(${index})" class="w-full bg-red-100 text-red-600 text-xs py-1 rounded hover:bg-red-200 transition">
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
// 
// 📝 CARA POSTING BERITA DAN GALERI:
// 
// 1. Login terlebih dahulu (Username: RulungSari, Password: rulungsari21)
// 2. Klik tab "Kelola Berita" atau "Kelola Galeri"
// 3. Isi semua field yang diperlukan
// 4. Klik tombol "Posting Berita" atau "Tambah Foto"
// 5. Berita/Foto baru akan langsung muncul di halaman utama (home)
// 6. Data disimpan ke localStorage, persist walau browser ditutup
// 
// ⚠️ PENTING: 
//   - Setiap posting akan disimpan ke localStorage (browser)
//   - Klik "Reset ke Default" akan menghapus semua posting dan balik ke data kode
//   - Pastikan koneksi internet stabil saat upload gambar

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

// Updated: Add News with File Support & Detail
async function addNews(e) {
    e.preventDefault();
    
    // Debug: Log form submission
    console.log("📝 Form Submit: Posting Berita Baru");
    
    const title = document.getElementById('newsTitle').value;
    const date = document.getElementById('newsDate').value;
    const category = document.getElementById('newsCategory').value;
    const summary = document.getElementById('newsContent').value;
    const detail = document.getElementById('newsDetail').value;
    const fileInput = document.getElementById('newsImage');
    
    // Validasi
    if (!title || !date || !category || !summary || !detail) {
        showToast("❌ Harap isi semua field!", "error");
        return;
    }
    
    let image = "image/foto desa.jpeg"; // Default dari folder lokal
    
    // Jika ada file yang diupload, convert ke base64
    if (fileInput.files.length > 0) {
        try {
            console.log("📸 Mengkonversi gambar ke Base64...");
            image = await convertBase64(fileInput.files[0]);
            console.log("✅ Gambar berhasil dikonversi");
        } catch (error) {
            console.error("❌ Error membaca file:", error);
            showToast("❌ Gagal membaca file gambar", "error");
            return;
        }
    }

    const newItem = {
        id: Date.now(),
        title: title,
        date: date,
        category: category,
        summary: summary,
        content: detail,
        image: image
    };
    
    console.log("📰 Berita baru:", newItem);
    
    newsData.unshift(newItem);
    saveNews();
    
    // Reset form
    document.getElementById('add-news-form').reset();
    fileInput.value = '';
    
    renderAdminTable();
    showToast("✅ Berita berhasil ditambahkan!", "success");
    console.log("✅ Total berita sekarang:", newsData.length);
}

function deleteNews(index) {
    if(!confirm("Yakin ingin menghapus berita ini?")) return;
    
    newsData.splice(index, 1);
    saveNews();
    renderAdminTable();
    showToast("✅ Berita berhasil dihapus!", "success");
}

async function addGallery(e) {
    e.preventDefault();
    
    console.log("🖼️  Form Submit: Tambah Foto Galeri");
    
    const title = document.getElementById('galleryTitle').value;
    const fileInput = document.getElementById('galleryImage');
    
    // Validasi
    if (!title) {
        showToast("❌ Harap isi judul foto!", "error");
        return;
    }
    
    if (fileInput.files.length === 0) {
        showToast("❌ Silakan pilih file gambar!", "error");
        return;
    }

    try {
        console.log("📸 Mengkonversi gambar galeri ke Base64...");
        const image = await convertBase64(fileInput.files[0]);
        
        const newItem = {
            id: Date.now(),
            title: title,
            image: image
        };
        
        console.log("📷 Foto baru:", newItem);
        galleryData.unshift(newItem);
        saveGallery();
        
        // Reset form
        document.getElementById('add-gallery-form').reset();
        fileInput.value = '';
        
        renderAdminTable();
        showToast("✅ Foto berhasil ditambahkan ke galeri!", "success");
        console.log("✅ Total foto galeri sekarang:", galleryData.length);
    } catch (error) {
        console.error("❌ Error:", error);
        showToast("❌ Gagal menambahkan foto!", "error");
    }
}

function deleteGallery(index) {
    if(!confirm("Yakin ingin menghapus foto ini?")) return;
    
    galleryData.splice(index, 1);
    saveGallery();
    renderAdminTable();
    showToast("✅ Foto berhasil dihapus!", "success");
}

function updateVillageInfo(e) {
    e.preventDefault();
    const heroDesc = document.getElementById('editHeroDesc').value;
    const aboutText = document.getElementById('editAboutText').value;
    const populationCount = document.getElementById('editPopulation').value;
    const landArea = document.getElementById('editLand').value;
    
    villageInfo = {
        heroDesc: heroDesc,
        aboutText: aboutText,
        populationCount: populationCount,
        landArea: landArea
    };
    
    saveVillageInfo();
    renderAdminTable();
    showToast("✅ Info Desa berhasil diupdate!", "success");
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
// Saat page load, langsung tampilkan data (dari localStorage atau default)
window.addEventListener('load', function() {
    renderPublic();
});
