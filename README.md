# Kidversa Landing Page

Kidversa adalah platform pendidikan yang dirancang khusus untuk pengembangan anak usia dini. Platform ini telah dipercaya oleh berbagai institusi pendidikan dan pemerintah, baik di tingkat nasional maupun internasional, termasuk kolaborasi dengan **The National Child Development Research Centre (NCDRC) Malaysia**. Landing page ini berfungsi sebagai etalase digital untuk memperkenalkan fitur, kolaborasi, dan dampak positif Kidversa dalam dunia pendidikan anak.

## 🛠️ Stack Teknologi & Versi

Halaman web ini dibangun menggunakan teknologi modern untuk memastikan performa dan pengalaman pengguna yang optimal. Berikut adalah spesifikasi versi yang digunakan untuk keperluan pengembangan dan backup:

### Backend & Framework

- **Ruby version:** `4.0.0`
- **Rails version:** `8.1.2`
- **Database:** SQLite (Development)

### Frontend & Runtime

- **Node.js version:** `v22.14.0`
- **npm version:** `10.9.2`
- **Frontend Core:** React (Vite via `vite_rails`)
- **UI Library:** Ant Design (antd)
- **State/Bridge:** Inertia.js

## 🚀 Memulai Pengembangan

Ikuti langkah-langkah berikut untuk menjalankan project di lingkungan lokal:

1. **Clone Repository:**

   ```bash
   git clone <repository-url>
   cd kidversa-landingpage
   ```

2. **Instalasi Dependencies (Ruby):**

   ```bash
   bundle install
   ```

3. **Instalasi Dependencies (Node.js):**

   ```bash
   npm install
   ```

4. **Persiapan Database:**

   ```bash
   bin/rails db:prepare
   ```

5. **Menjalankan Server:**
   Gunakan Procfile dev untuk menjalankan server Rails dan Vite secara bersamaan:
   ```bash
   bin/dev
   ```
   Aplikasi akan dapat diakses di `http://localhost:3000`.

## 📦 Informasi Backup

Pastikan konfigurasi environment Anda sesuai dengan versi yang tertera di atas untuk menghindari konflik dependensi saat memulihkan (restore) project dari backup.

---

© 2026 Kidversa. Semua hak cipta dilindungi.
