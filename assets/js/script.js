const navItemGenerasi = document.querySelector('.nav-item-generasi');
const dropdown = document.querySelector('.dropdown');
const navLink = navItemGenerasi.querySelector('a');

// Tampilkan dropdown saat mouse masuk (desktop dengan hover)
navItemGenerasi.addEventListener('mouseenter', () => {
    if (window.matchMedia('(hover: hover)').matches) {
        dropdown.classList.add('active');
    }
});

// Sembunyikan dropdown saat mouse keluar (desktop dengan hover)
navItemGenerasi.addEventListener('mouseleave', () => {
    if (window.matchMedia('(hover: hover)').matches) {
        dropdown.classList.remove('active');
    }
});

// Toggle dropdown saat klik pada perangkat sentuh / mobile
navLink.addEventListener('click', (e) => {
    if (window.matchMedia('(hover: none)').matches) {
        e.preventDefault(); // jangan langsung melompat ke #generasi
        dropdown.classList.toggle('active');
    }
});

// Tutup dropdown ketika klik di luar
document.addEventListener('click', (e) => {
    if (!navItemGenerasi.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Tutup dengan tombol Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dropdown.classList.remove('active');
    }
});