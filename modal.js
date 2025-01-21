$(document).ready(function() {
    $('#languageModal').modal('show');
});

// Fungsi untuk menerjemahkan teks
var kamus = {
    "hello": "halo",
    "goodbye": "selamat tinggal",
    "thank you": "terima kasih",
    "Best Sellers": "Terlaris",
    "Gift Ideas": "Ide Hadiah",
    "New Releases": "Terbaru",
    "Today's Deals": "Promo Sekarang!",
    "Costumer Service": "Hubungi CS",
    "Grab Now": "Dapatkan Sekarang",
};

function translate(text, lang) {
    if (lang === 'in') {
        return kamus[text.toLowerCase()] || text; // Menggunakan kamus untuk terjemahan
    } else if (lang === 'en') {
        return Object.keys(kamus).find(key => kamus[key] === text) || text; // Balikkan terjemahan jika ada
    }
    return text; // Kembalikan teks asli jika bahasa tidak dikenali
}

function autoTranslate(lang) {
    var texts = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li");
    texts.forEach(function(text) {
        var originalText = text.textContent.trim();
        var translatedText = translate(originalText, lang);
        text.textContent = translatedText;
    });
    $('#languageModal').modal('hide'); // menutup modal setelah diklik
}
