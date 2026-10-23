/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "gallery"       → Polaroid photo stack (list of photos + captions)
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Sayang",                 // Ganti dengan nama/panggilan dia
  photo: "./img/foto4.jpg",       // Foto bulat di bagian "profile"
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Haii",
      subtitle: "Ada sesuatu kecil buat kamu nih...",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Hari ini ulang tahun kamu!! :D",
    },
    {
      type: "chatbox",
      message:
        "Selamat ulang tahun, sayangku! Semoga panjang umur, sehat selalu, makin dimudahkan kuliahnya, dan semua yang kamu semogakan tercapai satu-satu.",
      buttonText: "Kirim",
    },
    {
      type: "ideas",
      lines: [
        "Tadinya aku cuma mau kirim chat itu.",
        "Tapi nggak jadi.",
        "Aku pengen bikin sesuatu yang <strong>spesial</strong>.",
        "Soalnya,",
        "Kamu itu spesial <span>:)</span>",
      ],
      bigLetters: "JADI",
    },
    {
      type: "gallery",
      title: "Momen-momen favoritku 💕",
      hold: 2.6,                  // Detik tiap foto tampil
      photos: [
        { src: "./img/foto4.jpg", caption: "Senyum yang paling aku suka" },
        { src: "./img/foto2.jpg", caption: "Partner jas biru 💙" },
        { src: "./img/foto3.jpg", caption: "Malam-malam berdua" },
        { src: "./img/foto7.jpg", caption: "Pagi cerah di Ampera" },
        { src: "./img/foto1.jpg", caption: "Pose andalan ☝️" },
        { src: "./img/foto5.jpg", caption: "Noleh dikit, cantiknya kebangetan" },
        { src: "./img/foto6.jpg", caption: "Tempat ternyaman ❤️" },
      ],
    },
    {
      type: "quote",
      text: "Semakin kamu mensyukuri dan merayakan hidupmu, semakin banyak hal dalam hidup yang bisa dirayakan.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Selamat Ulang Tahun!",
      wishText: "Makasih udah jadi bagian terbaik di hari-hariku. Sayang kamu ❤️",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Udah selesai. Sekarang kabarin aku ya, kamu suka nggak?",
      replayText: "Atau klik di sini kalau mau nonton lagi.",
    },
  ],
};
