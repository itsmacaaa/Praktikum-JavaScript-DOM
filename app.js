console.log("Bismillah Praktikum Dimulai");

// Aktivitas 1 DOM SELECTION / Seleksi Elemen
// Kenapa kita harus seleksi? karena "menangkap" atau ambil id/class
// Mengambil elemen HTML tersebut lalu disimpan di variabel JavaScript

// 1. Mengambil elemen judul utama & sub judul
// document.getElementById("..") mengambil berdasarkan atribud Id.

const Judul_Utama = document.getElementById("judul-utama"); // menangkap: <h1 id="judul-utama">

// document.querySelector ("#..")
// tanda # artinya ID

const Sub_Judul = document.querySelector("#sub-judul"); // menangkap: <h1 id="#sub-judul">

// 2. Mengambil Elemen pada Kartu 1 (Kartu Manipulasi Teks & Style)
const Teks_Preview = document.getElementById("teks-preview");
const Box_Preview = document.getElementById("box-preview");
const Card_Manipulasi = document.getElementById("card-manipulasi");

// 3. Mengambil Elemen Tombol-tombol aksi pada kartu 1

const BTN_Ubah_Teks = document.getElementById("btn-ubah-teks");
const BTN_Toggle_Warna = document.getElementById("btn-toggle-warna");
const BTN_Reset = document.getElementById("btn-reset");

// 4. Mengambil Elemen pada kartu 2 (Fitur Catatan Dinamis / To Do List Sederhana)

const Input_Catatan = document.getElementById("input-catatan");
const BTN_Tambah = document.getElementById("btn-tambah");
const Daftar_Catatan = document.getElementById("daftar-catatan");
const Jumlah_Catatan = document.getElementById("jumlah-catatan");
const Pesan_Kosong = document.getElementById("pesan-kosong");

// Aktivitas Ke 2 Manipulasi Teks & Style (Card 1)
// addEventListener("click", function() {...}) artinya adalah Tolong dengarkan dulu / tunggu
// sampai di klik user. Jika di klik jalankan perintah didalam function

// A. Mengubah Teks & Warna secara langsung

BTN_Ubah_Teks.addEventListener("click", function() {
    // .innertext = mengganti atau mengisi secara langsung teks yang ada didalam elemen HTML
    Teks_Preview.innerText = "Keren! Teks Ini Berhasil Diubah Pake DOM";

    //.style.color = mengubah warna teks secara langsung (Inline Style)
    Teks_Preview.style.color = "#f8c5d5ff";

    // console.log = mencetak pesan di console browser
    console.log("[DOM] Teks Preview telah di perbaharui!");
});

// B. Manipulasi Class CSS Menggunakan classList.togle()

BTN_Toggle_Warna.addEventListener("click", function() {
    // .classList.toogle("nama-class") = fitur saklar otomatis (ON/OFF)
    Box_Preview.classList.toggle("active-mode");
    Card_Manipulasi.classList.toggle("highlight");

    console.log("DOM Berhasil di Switch!");
});

// C. Mengembalikan (Reset) Teks ke kondisi semula

BTN_Reset.addEventListener("click", function () {
    // 1. Kembalikan teks semula teks asli
    Teks_Preview.innerText = "Halo! Teks ini siap diubah oleh JavaScript";

    // 2. Kosongkan warna agar kembali ke warna CSS bawaan
    Teks_Preview.style.color = "";

    // 3. Hapus Class khusus untuk menggunakan .class.List.remove("")
    Box_Preview.classList.remove("active-mode");
    Card_Manipulasi.classList.remove("highlight");

    console.log("DOM tampilan di reset");
});

// Aktivitas 3 & 4 : Elemen Dinamis & Event Handling (TO-DO List Sederhana)
// Di Aktivitas ini kita belajar elemen HTML baru (<li>) secara otomatis dalam JavaScript
// mengisi teksnya, memberi tombol hapus, lalu menmpelkan jumlah catatan

// Langkah 1 : Membuat Variabel Penampung Angka Jumlah Catatan
// "let" digunaksn untuk nilai variabel yang akan berubah ubah untuk bisa bertambah dan bisa berkurang (counting)

let Total_Catatan = 0;

// Langkah 2 : Fungsi Update Angka Counter & Pesan Status

function Perbaharui_Jumlah() {
    // Masukan Angka Total catatan terbaru ke dalam tag <span id="jumlah-catatan">
    Jumlah_Catatan.innerText = Total_Catatan;
    // Conditional STtenent berupa apakah catatanya itu kosong/ 0?
    if (Total_Catatan === 0) {
        // Jika 0: Hapus class "hidden" supaya teks "Belum ada catatan" muncul ke layar
        Pesan_Kosong.classList.remove("hidden"); 
    } else {
        // Jika 0: Tambahkan class "hidden" agar teks "belum ada catatan" tersembunyi
        Pesan_Kosong.classList.add("hidden");
    }
}

// Langkah 3 : Fungsi Utama Logika Tambah Ctatn Baru

function Tambah_Catatan() {
    // 3.1 inputCatatan.value fungsi nya untuk mengambil teks yang diketik oleh user
    // .trim() = menghapus spasi diawal dan diakhir
    const Isi_Teks = Input_Catatan.value.trim();

    // 3.2 Validasi input : Jika isi teks kosong  maka tamplkan alert
    if (Isi_Teks === "") {
        alert("Catatan anda tidak boleh kosong!");
        return; 
    }

    // 3.3 document.createElement("li") -> membuat memori  di JavaScript secara dinamis
    const Li_Baru = document.createElement("li");
    Li_Baru.className = "note-item"; // menambahkan pada tag li

    // 3.4 .innerHTML = mengisi struktur didalam <li> dengan teks catatan dan tombol hapus
    // Tanda backtick (`)
    Li_Baru.innerHTML = `<span>${Isi_Teks}</span> <button class="btn-hapus">Hapus</button>`;

    // 3.5 Menambahkan Telinga / Event Listener Untuk Tombol hapus pada catatan dinamis
    // liBaru.querySelector(".btn-hapus") = mengambil tombolber class "btn-hapus" khusus yang ada di li
    const BTN_Hapus = Li_Baru.querySelector(".btn-hapus");
    BTN_Hapus.addEventListener("click", function() {
        Li_Baru.remove(); // Menghapus elemen list dari layar HTML
        Total_Catatan--; // totalCatatan dikurangi sebanyak 1x
        Perbaharui_Jumlah(); //Panggil fungsi Perbaharui_Jumlah untuk update angka dilayar
        console.log(`DOM Catatan "${Isi_Teks}" dihapus.` );
    });

    //3.6 appendChild = memasukkan elemen li kedalam wadah <ul id="daftar-catatan">
    Daftar_Catatan.appendChild(Li_Baru);

    //3.7 Mengosongkan kembali isi kolom input (inputCatatan.value = "") supaya bisa diketik lagi
    Input_Catatan.value = "";

    //3.7 totalCatatan++ artinya tambah nilai catatan sebanyak 1, lalu update angka ke layar
    Total_Catatan++;
    Perbaharui_Jumlah();

    console.log(`DOM Catatan baru ditambahkan: ${Isi_Teks}`);

}

// Langkah 4 : Event Listener Klik Tombol + "Tambah"
// Ketika tombol "+ Tambah " di klik oleh user, maka jalankan fungsi tambah catatan()
BTN_Tambah.addEventListener("click", function () {
    Tambah_Catatan();
});

// Langkah 5 : Event Listener Keyboard "Enter" pada kolom input
// Ketika user mengetik di kolom input dan melepas tombol keyboard ('Event keyup');
Input_Catatan.addEventListener("keyup", function (event) {
    // periksa apakah tombol keyboard yang ditekan user adalah enter?
    if (event.key === "Enter") {
        Tambah_Catatan(); // jika ya, jalankan fungsi tambahcatatan()\
    }
});