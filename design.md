# Portfolio Design System — BIKRA ABNA
> Swiss Editorial Studio × Narrative Craft × Chromatic Red Accent

---

## 1. Vision & Direction

### Inspirasi Utama
- **`graysunderland.com`**: Ketenangan editorial, tipografi percaya diri, layout open-canvas (tanpa kartu kotak seragam), showcase project berdampingan dengan narasi kuat.
- **`neutomni.com`**: Storytelling flow, craft details (ticket tear marks, micro-stamps, file format labels `PROFILE.MD`, aksen merah presisi), pacing dinamis antar section.
- **`gianlucaboccia.me`**: Fluid spacing, micro-interaction subtle, tipografi bernafas lega, transisi halus masuk halaman.

### Core Philosophy
> *"Show, Don't Box."*

Menghapus mentalitas "kartu ber-border hitam tebal / admin dashboard" dan beralih ke **High-End Editorial Studio Experience**. Konten bernafas di kanvas terbuka, dipisahkan oleh whitespace terukur dan garis hairline tipis — bukan penjara kotak.

---

## 2. Palet Warna — The Studio Triad

| Token             | Hex         | Penggunaan                                                        |
|--------------------|-------------|-------------------------------------------------------------------|
| Canvas (BG)        | `#ffffff`   | Background utama, pure crisp white                                |
| Canvas Alt         | `#f8f8f9`   | Section kontras subtle, sidebar, alternating rows                 |
| Ink (Text/Lines)   | `#09090b`   | Teks utama, heading, garis divider hairline (`border-black/10`)   |
| Ink Muted          | `#71717a`   | Teks sekunder, metadata, deskripsi, timestamp                     |
| Signal Red         | `#ff0000`   | Aksen tunggal: live dot, panah `→`, hover judul, index number     |

### Aturan Penggunaan Merah
- **BUKAN** untuk background blok besar atau border kotak.
- **HANYA** untuk titik fokus tajam: `●` live status, nomor serial `01 //`, panah navigasi `→`, hover state judul project, dan stempel/badge kecil.
- Prinsip: Merah muncul < 5% dari viewport, tapi langsung menarik mata.

---

## 3. Tipografi Stack

### Font Pairing: Formula 1 — "The Swiss Laboratory"

| Role                     | Font            | Weight / Style                         | Penggunaan                                            |
|--------------------------|-----------------|----------------------------------------|-------------------------------------------------------|
| Display / Headline       | `Uncut Sans`    | Bold–Black (700–900), `tracking-tighter`, `uppercase` | Nama besar, judul section, judul project              |
| Body / Narrative         | `Uncut Sans`    | Regular (400), `leading-relaxed`       | Paragraf deskripsi, about me, cerita project           |
| Metadata / Technical     | `Martian Mono`  | Regular (400), `uppercase`, `text-[10px]–text-xs`    | Index number, timestamp, file tags, spec labels, nav   |

### Font Pairing: Formula 2 — "The Monotype Discipline" (Alternatif)

| Role                     | Font            | Weight / Style                         |
|--------------------------|-----------------|----------------------------------------|
| Display / Headline       | `Uncut Sans`    | Black (900), `tracking-tighter`        |
| Body / Narrative         | `Uncut Sans`    | Regular (400), normal tracking          |
| Metadata / Technical     | `Uncut Sans`    | Medium (500), `uppercase`, small size   |

> Formula 2 = satu font family dieksploitasi seluruh rentang bobotnya. Sah di Swiss design.

### Aturan Tipografi
- Heading SELALU uppercase + tracking tight. Skala kontras ekstrem (judul raksasa vs metadata kecil).
- Body text rata kiri (flush left, ragged right). Tidak justify.
- Metadata selalu monospace, uppercase, letter-spacing lebar.

---

## 4. Layout Principles

### Anti-Pattern (JANGAN dilakukan)
- ❌ Grid 3 kartu kembar seragam (`grid-cols-3` dengan border tebal identik).
- ❌ Border tebal mengelilingi setiap elemen (`border-2 border-black` di mana-mana).
- ❌ Glassmorphism, ambient glow, radial blur.
- ❌ Rounded corners besar (`rounded-2xl`, `rounded-3xl`).
- ❌ Background warna-warni acak per section (kuning, biru, pink, hijau).
- ❌ Snap scroll fullscreen (`snap-y snap-mandatory`).

### Pattern yang Digunakan
- ✅ **Open Canvas**: Konten bernafas di whitespace luas. Pembatas = garis hairline tipis (`border-b border-black/10`) atau murni spacing.
- ✅ **Asymmetric Multi-Column**: Kolom tidak sama lebar. Misal: kolom narasi 60%, kolom visual 40%. Atau sebaliknya.
- ✅ **Dynamic Pacing**: Section padat (dense info) bergantian dengan section lega (breathing room). Ritme visual tidak monoton.
- ✅ **Freeform Flow**: Konten mengalir secara natural document scroll, bukan slide presentasi.
- ✅ **Scale Tension**: Teks raksasa di samping teks mikro. Visual besar di samping metadata kecil.

---

## 5. Struktur Halaman & Komponen

### A. Header / Minimalist Studio Bar

```
┌──────────────────────────────────────────────────────────┐
│ ● BIKRA ABNA          JAKARTA // UTC+7    01 02 03 04    │
│   [uncut sans]         [martian mono]     [nav links]    │
└──────────────────────────────────────────────────────────┘
```

- Sticky top, background putih bersih, **tanpa border tebal**.
- Kiri: Nama `BIKRA ABNA` font Uncut Sans bold + red dot `●` sebagai identity mark.
- Tengah: Status metadata (`JAKARTA // UTC+7`, `AVAILABLE`).
- Kanan: Link navigasi clean. Hover = underline merah atau teks berubah merah.
- Separator: Garis hairline 1px `border-b border-black/5` saja.

---

### B. Hero Section — "The Narrative Statement"

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [01 // INTRODUCTION]              ● AVAILABLE FOR 2026  │
│                                                          │
│  Frontend Engineer                                       │
│  crafting high-grade web                                 │
│  applications, reactive                                  │
│  architectures, and                                      │
│  real-time interfaces.                                   │
│                                                          │
│  Currently building core features at PT Adma Digital     │
│  Solusi — unit tests for SociaLens, responsive systems   │
│  for LPMUKP, streaming audio workflows for Sentriva.     │
│                                                          │
│                                    [DOWNLOAD CV →]       │
│                                    [VIEW TIMELINE →]     │
│                                                          │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
└──────────────────────────────────────────────────────────┘
```

- **Bukan** judul raksasa "BIKRA ABNA" yang menutupi layar seperti spanduk jalanan.
- Headline adalah **pernyataan naratif** yang kuat dan percaya diri (*Statement of Craft*).
- Sub-label kecil monospace: `[01 // INTRODUCTION]`.
- Paragraf ringkas fokus kerja saat ini.
- CTA buttons: Minimalis, teks + panah merah `→`. Bukan tombol kotak tebal.
- Ditutup separator garis putus-putus tipis (ticket tear line).

---

### C. Selected Works — "Dynamic Editorial Pacing"

**Menghapus format grid 3 kartu kotak kembar.**

#### Layout Ritme Berganti:

**Feature Project (Large Showcase):**
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [02 // SELECTED WORK]                                   │
│                                                          │
│  ┌─────────────────────┐  ┌────────────────────────────┐ │
│  │                     │  │                            │ │
│  │  01.                │  │    [ MOCKUP VISUAL ]       │ │
│  │  SENTRIVA           │  │    [ GRAYSCALE →           │ │
│  │                     │  │      HOVER: COLOR ]        │ │
│  │  Year: 2026         │  │                            │ │
│  │  Role: Frontend     │  │                            │ │
│  │  Architecture       │  │                            │ │
│  │                     │  │                            │ │
│  │  Audio streaming,   │  │                            │ │
│  │  AI summary, voice  │  │                            │ │
│  │  recording...       │  │                            │ │
│  │                     │  │                            │ │
│  │  [NEXT.JS] [REACT]  │  │                            │ │
│  │  [TYPESCRIPT]       │  │                            │ │
│  │                     │  │                            │ │
│  │  SOURCE → LIVE →    │  │                            │ │
│  │                     │  │                            │ │
│  └─────────────────────┘  └────────────────────────────┘ │
│                                                          │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
└──────────────────────────────────────────────────────────┘
```

- Split 2 kolom asimetris: narasi di kiri (40%), visual di kanan (60%).
- Bergantian: project berikutnya visual di kiri, narasi di kanan.
- Gambar: `grayscale contrast-125` default, `hover:grayscale-0` dengan transisi halus. Tanpa border frame tebal.
- Tech stack: Pills monokrom kecil (`border border-black/15 bg-transparent`).
- Link: Teks + panah merah `→` (bukan tombol kotak).

**Secondary Projects (Index Log):**
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  03. SOCIALENS             [INTERNAL]     NEXT.JS, REACT │
│  ─────────────────────────────────────────────────────── │
│  04. LPMUKP                [PUBLIC →]     NEXT.JS, TS    │
│  ─────────────────────────────────────────────────────── │
│  05. HEALTH ANALYTICS      [PUBLIC →]     PYTHON, FASTAPI│
│  ─────────────────────────────────────────────────────── │
│                                                          │
│  [VIEW FULL ARCHIVE →]                                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- Format list horizontal bergaris hairline, ala katalog pameran seni.
- Nomor serial merah, judul bold, kategori muted, tech stack di kanan.

---

### D. Craft Details & Texture (Nuansa Neutomni)

Elemen-elemen kecil yang memberi "jiwa" pada web:

1. **Ticket Tear Line Separator:**
   ```
   ─ ─ ─ ─ ─ ─ ─ ✂ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
   ```
   Garis putus-putus tipis dengan simbol gunting di antara section.

2. **File Metadata Tags:**
   ```
   PROFILE.MD    TIMELINE.LOG    SPEC_SHEET.TXT
   ```
   Label kecil monospace di pojok section seolah-olah web ini adalah filesystem/terminal.

3. **Red Micro-Accents:**
   - `●` Live dot di header.
   - `→` Panah navigasi merah di setiap link.
   - Nomor index merah: `01 //`, `02 //`, `03 //`.
   - Hover state: judul project berubah merah.

4. **Status Stamps:**
   ```
   [ STATUS: SHIPPED ]    [ ROLE: ARCHITECTURE ]    [ VER: 2.4 ]
   ```
   Badge-badge kecil yang berasa stempel arsip, bukan badge UI korporat.

---

### E. Technical Capabilities — "The Spec Sheet"

**Bukan jejeran kotak icon.**

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [03 // CAPABILITIES]                     SPEC_SHEET.TXT │
│                                                          │
│  CORE FRONTEND          STATE & REALTIME    SYSTEMS      │
│  ─────────────          ────────────────    ───────      │
│  Next.js                Zustand             FastAPI      │
│  React                  WebSockets          PostgreSQL   │
│  TypeScript             REST APIs           Docker       │
│  Tailwind CSS           Socket.io           Git          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- Ditampilkan sebagai tabel indeks terstruktur ala daftar isi buku seni atau spec sheet industri.
- Dibagi 3 kolom berdasarkan disiplin.
- Tanpa icon, tanpa kotak berwarna. Murni tipografi presisi.

---

### F. Career Timeline & Credentials

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [04 // TIMELINE]                       EXPERIENCE.LOG   │
│                                                          │
│  01 //  2024—NOW    PT ADMA DIGITAL SOLUSI               │
│                     Frontend Engineer Intern              │
│                     Production UI systems, streaming      │
│                     interfaces, unit test suites.         │
│  ────────────────────────────────────────────────────── │
│  02 //  2024        BANGKIT ACADEMY                       │
│                     Machine Learning Cohort               │
│                     FastAPI endpoints, Google Colab.      │
│  ────────────────────────────────────────────────────── │
│                                                          │
│  CERTIFICATIONS:                                          │
│  01. TensorFlow Developer Certificate         [OPEN →]   │
│  02. Google IT Automation with Python          [OPEN →]   │
│  ...                                                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- Kronologis bersih, garis hairline tipis antar entry.
- Nomor index merah di kiri (`01 //`, `02 //`).
- Sertifikasi sebagai sub-list dengan link `→`.

---

### G. Footer — Studio Sign-Off

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ● BIKRA ABNA FILQIYAST DZAKI                            │
│    DESIGNED ON SWISS EDITORIAL PRINCIPLES, 2026.          │
│                                                          │
│  GITHUB →    LINKEDIN →    CV [PDF] →                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- Minimalis. Hitam atau putih bersih. Teks monospace tipis.
- Link dengan panah merah `→`.

---

## 6. Interaction & Motion Guidelines

### Prinsip Utama
- **Tanpa GSAP / Library animasi berat** pada iterasi pertama. Fokus ke layout dan tipografi dulu.
- Animasi hanya menggunakan **CSS transitions/transforms native** (`transition-colors`, `transition-all`, `duration-300`).

### Micro-Interactions yang Diizinkan
- Hover judul project → warna berubah ke `#ff0000`.
- Hover gambar project → `grayscale-0`, opacity naik.
- Hover link → underline muncul atau panah bergeser `translate-x-1`.
- Live dot → `animate-pulse` CSS native.
- Scroll → natural browser scroll, tanpa hijack.

### Animasi Narrative Flow (Fase Lanjut)
- Setelah layout & tipografi final terkunci, baru tambahkan:
  - Fade-in on scroll (CSS `@keyframes` atau Intersection Observer ringan).
  - Staggered text reveal untuk headline.
  - Parallax subtle pada mockup gambar.

---

## 7. File & Asset Management

| Asset                  | Format    | Lokasi                                   |
|------------------------|-----------|------------------------------------------|
| Uncut Sans Variable    | `.woff2`  | `public/fonts/UncutSans/`               |
| Martian Mono           | Google    | `next/font/google` (Martian_Mono)        |
| Project Screenshots    | `.webp`   | `public/image/projects/`                 |
| CV Document            | `.pdf`    | `public/bikraabna.pdf`                   |

### Screenshot Treatment
- Semua screenshot project di-export sebagai WebP berkualitas tinggi.
- Idealnya dimasukkan ke mockup bersih via [shots.so](https://shots.so) sebelum ditaruh di web.
- Default render: `grayscale contrast-125 opacity-80`.
- Hover: `grayscale-0 opacity-100 transition-all duration-300`.

---

## 8. Execution Checklist

- [ ] Setup font stack: Uncut Sans (local) + Martian Mono (Google) di `layout.tsx` & `globals.css`.
- [ ] Rombak `Navigation.tsx`: Minimalist studio bar, tanpa border tebal.
- [ ] Rombak `LandingPage.tsx`: Narrative hero + asymmetric project showcase + spec sheet + timeline.
- [ ] Rombak `projects/page.tsx`: Editorial archive layout (bukan grid kartu kembar).
- [ ] Rombak `experience/page.tsx`: Kronologis editorial dengan index merah.
- [ ] Tambahkan craft details: Tear lines, file tags, red micro-accents.
- [ ] Pastikan semua gambar project di-grayscale dengan hover reveal.
- [ ] Test responsive (mobile, tablet, desktop).
- [ ] Bersihkan file font Clash Display lama yang tidak terpakai.
- [ ] (Fase 2) Tambahkan narrative flow animation via CSS/Intersection Observer.
