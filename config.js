const CONFIG = {

  // ── SANDBOX MODE ─────────────────────────────────────────
  // true  → mode demo/visual, tidak ada operasi nyata ke GitHub
  // false → mode real-time, semua operasi terhubung ke GitHub
  sandbox_mode: false,

  // Kredensial untuk mode sandbox (demo login)
  sandbox_credentials: {
    member: { username: "member_demo",    password: "member123" },
    developer: { username: "dev_demo",    password: "dev123" }
  },

  // ── GITHUB CONFIG (real mode) ────────────────────────────
  github: {
    owner: "Endraxss00111",          // ganti dengan username GitHub pemilik repo
    repo:  "database-naxa-x",                // ganti dengan nama repository
    branch: "main",                         // branch default (main/master)
    paths: {
      login: "/login.json",             // file users & roles
      tokens: "/token.json"             // file token bot
    }
  },

  // ── SITE INFORMATION ─────────────────────────────────────
  site: {
    name:    "NAXA-X",
    tagline: "BOT MANAGEMENT NEXUS",
    version: "1.0.0",
    owner:   "ENDRAXSS"              // nama creator (ditampilkan di Thanks To)
  },

  // ── ROLE-BASED AVATARS (wajib diisi) ─────────────────────
  // URL gambar yang akan ditampilkan di sidebar user card
  role_avatars: {
    developer: "https://ar-hosting.pages.dev/1775201875305.jpg",
    member:    "https://ar-hosting.pages.dev/1775201875905.jpg"
  }

};

// ── FORMAT FILE login.json DI GITHUB ─────────────────────────
// Contoh isi:
/* {
  "users": [
     { "username": "admin",  "password": "pass123",  "role": "developer" },
    { "username": "budi",   "password": "budi456",  "role": "member"    }
  ]
 }

/ ── FORMAT FILE token.json DI GITHUB ─────────────────────────
/* {
   "tokens": [
     { "token": "123456:ABC...", "owner": "budi", "added": "2024-01-01" }
   ]
 }