# 📰 BeritaHub - Portal Berita Indonesia

Portal berita modern dengan fitur lengkap, dibangun menggunakan HTML5, CSS3, dan JavaScript murni tanpa framework apapun.

## ✨ Fitur Utama

- 🌙 **Dark Mode** - Tema gelap dengan penyimpanan preferensi
- 🔍 **Real-time Search** - Pencarian berita secara instant
- 📱 **Mobile-Friendly** - Responsive design untuk semua ukuran layar
- ⚡ **Fast & Lightweight** - Tanpa dependency eksternal
- 🎨 **Modern UI** - Design profesional seperti portal berita besar
- ⌨️ **Keyboard Shortcuts** - Kontrol dengan keyboard
- 🎬 **Smooth Animations** - Transisi yang mulus dan menarik

## 🚀 Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/ielniel/blogger-portal-berita.git
cd blogger-portal-berita
```

### 2. Buka di Browser
Cukup buka file `index.html` di browser favorit Anda:
- Double-click `index.html`, atau
- Gunakan Live Server di VS Code

### 3. Nikmati Portal Berita!
- Jelajahi berbagai kategori berita
- Gunakan search untuk mencari berita spesifik
- Toggle dark mode dengan tombol bulan/matahari

## ⌨️ Keyboard Shortcuts

| Shortcut | Fungsi |
|----------|--------|
| `Ctrl + K` atau `Cmd + K` | Fokus ke search bar |
| `Ctrl + D` atau `Cmd + D` | Toggle dark mode |

## 📁 Struktur File

```
blogger-portal-berita/
├── index.html          # Halaman utama
├── styles.css          # Styling dan responsive design
├── script.js           # JavaScript functionality
└── README.md           # Dokumentasi
```

## 🎨 Customization

### Mengubah Warna Utama

Edit variabel di bagian `:root` di `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Warna biru utama */
    --secondary-color: #1e40af;    /* Warna biru gelap */
    --accent-color: #f59e0b;       /* Warna accent (oranye) */
}
```

### Menambah Kategori Berita Baru

1. Tambah link di navigation bar (index.html)
2. Buat section baru dengan struktur yang sama:
```html
<section id="nama-kategori" class="category-section">
    <div class="container">
        <h2 class="section-title">📌 Nama Kategori</h2>
        <div class="news-grid">
            <!-- Tambahkan news cards di sini -->
        </div>
    </div>
</section>
```

### Mengganti Gambar

Semua gambar saat ini menggunakan placeholder dari `placeholder.com`. Ganti URL gambar sesuai kebutuhan:

```html
<!-- Sebelum -->
<img src="https://via.placeholder.com/400x250?text=Berita" alt="">

<!-- Sesudah -->
<img src="path/to/your/image.jpg" alt="">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px ke atas
- **Tablet**: 768px - 1199px
- **Mobile**: 640px - 767px
- **Small Mobile**: Di bawah 640px

## 🌟 Fitur yang Bisa Dikembangkan

- [ ] Koneksi API untuk berita real-time
- [ ] Sistem komentar
- [ ] User authentication
- [ ] Halaman detail berita lengkap
- [ ] Sistem rekomendasi berita
- [ ] Sharing ke media sosial
- [ ] Progressive Web App (PWA)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Lisensi

Proyek ini bebas digunakan untuk keperluan personal dan komersial.

## 👨‍💻 Author

Dibuat dengan ❤️ oleh Ielniel

## 🤝 Kontribusi

Silakan buat pull request untuk perbaikan atau fitur baru!

---

**Nikmati menggunakan BeritaHub! Jika ada pertanyaan atau saran, silakan buat issue.** 🚀
