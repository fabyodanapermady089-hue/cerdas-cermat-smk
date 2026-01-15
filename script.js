// DATA SOAL LENGKAP (TKJ & RPL)
const quizData = {
    "TKJ": {
        "10": [
            { q: "Alat untuk menyambung kabel UTP ke RJ-45 adalah...", a: ["Tang Crimping", "Solder", "Obeng", "Tang Potong"], c: 0 },
            { q: "Urutan kabel T568B, kabel nomor 1 adalah warna...", a: ["Putih Hijau", "Putih Oranye", "Hijau", "Oranye"], c: 1 },
            { q: "Otak dari sebuah komputer disebut...", a: ["RAM", "Harddisk", "CPU", "Monitor"], c: 2 },
            { q: "Satuan kecepatan internet adalah...", a: ["Mbps", "Mhz", "Byte", "Volt"], c: 0 },
            { q: "Perangkat input untuk mengetik adalah...", a: ["Mouse", "Keyboard", "Scanner", "Printer"], c: 1 },
            { q: "RAM berfungsi untuk menyimpan data secara...", a: ["Permanen", "Sementara", "Terhapus", "Lama"], c: 1 },
            { q: "Jenis memori yang datanya tidak hilang saat mati adalah...", a: ["RAM", "ROM", "VGA", "Cache"], c: 1 },
            { q: "Sistem operasi buatan Microsoft adalah...", a: ["Linux", "macOS", "Windows", "Android"], c: 2 },
            { q: "Alat untuk mengetes kabel LAN adalah...", a: ["LAN Tester", "Multimeter", "Splicer", "OPM"], c: 0 },
            { q: "Singkatan dari PC adalah...", a: ["Personal Computer", "Laptop", "Server", "Mainframe"], c: 0 }
        ],
        "11": [
            { q: "Perangkat penghubung dua jaringan berbeda adalah...", a: ["Switch", "Hub", "Router", "Modem"], c: 2 },
            { q: "IP Address 192.168.1.1 termasuk dalam kelas...", a: ["Kelas A", "Kelas B", "Kelas C", "Kelas D"], c: 2 },
            { q: "Subnet mask /24 sama dengan...", a: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.254"], c: 0 },
            { q: "Layanan pengubah nama domain ke IP adalah...", a: ["DHCP", "DNS", "FTP", "HTTP"], c: 1 },
            { q: "Perangkat penyebar sinyal Wi-Fi adalah...", a: ["Antena", "Access Point", "Switch", "Server"], c: 1 },
            { q: "Protokol transfer file adalah...", a: ["HTTP", "SMTP", "FTP", "SSH"], c: 2 },
            { q: "Topologi jaringan berbentuk bintang disebut...", a: ["Bus", "Ring", "Star", "Mesh"], c: 2 },
            { q: "Jumlah kabel di dalam kabel UTP adalah...", a: ["4", "6", "8", "10"], c: 2 },
            { q: "Perangkat Layer 2 (Data Link) adalah...", a: ["Hub", "Switch", "Router", "Repeater"], c: 1 },
            { q: "IP untuk jaringan internal disebut...", a: ["IP Public", "IP Private", "IP Static", "IP Dynamic"], c: 1 }
        ],
        "12": [
            { q: "Fiber optik mengirim data menggunakan...", a: ["Listrik", "Cahaya", "Suara", "Magnet"], c: 1 },
            { q: "Alat penyambung kabel fiber optik adalah...", a: ["Tang", "Splicer", "Stripper", "OTDR"], c: 1 },
            { q: "OS Jaringan yang bersifat open source adalah...", a: ["Windows Server", "Linux Debian", "macOS", "Cisco IOS"], c: 1 },
            { q: "Remote server teks yang aman menggunakan...", a: ["Telnet", "SSH", "HTTP", "FTP"], c: 1 },
            { q: "Kepanjangan VLAN adalah...", a: ["Virtual LAN", "Video LAN", "Voice LAN", "Visual LAN"], c: 0 },
            { q: "Alat pengukur redaman fiber optik adalah...", a: ["Multimeter", "OTDR", "Tang", "Solder"], c: 1 },
            { q: "Pembatas akses jaringan disebut...", a: ["Antivirus", "Firewall", "Spyware", "Malware"], c: 1 },
            { q: "Bagian terdalam fiber optik disebut...", a: ["Cladding", "Coating", "Core", "Buffer"], c: 2 },
            { q: "Mikrotik populer untuk sekolah adalah...", a: ["RB941 (hap lite)", "Cisco", "TP-Link", "Huawei"], c: 0 },
            { q: "Protokol penerima email adalah...", a: ["SMTP", "POP3", "HTTP", "FTP"], c: 1 }
        ]
    },
    "RPL": {
        "10": [
            { q: "Tag HTML untuk judul paling besar adalah...", a: ["<h6>", "<head>", "<h1>", "<title>"], c: 2 },
            { q: "Simbol flowchart untuk 'Keputusan' adalah...", a: ["Persegi", "Jajar Genjang", "Belah Ketupat", "Oval"], c: 2 },
            { q: "Bahasa dasar pembuat struktur web adalah...", a: ["Swift", "Java", "PHP", "HTML"], c: 3 },
            { q: "Simbol flowchart mulai/selesai adalah...", a: ["Oval", "Persegi", "Panah", "Segitiga"], c: 0 },
            { q: "Penyimpan banyak nilai dalam satu variabel disebut...", a: ["String", "Integer", "Array", "Boolean"], c: 2 },
            { q: "Aplikasi pembuka website disebut...", a: ["Word", "Browser", "Excel", "Photoshop"], c: 1 },
            { q: "Kepanjangan HTML adalah...", a: ["Hyper Tool", "Hyper Text", "High Text", "Hyper Main"], c: 1 },
            { q: "Langkah logis penyelesaian masalah disebut...", a: ["Program", "Variabel", "Algoritma", "Flowchart"], c: 2 },
            { q: "Tipe data untuk tulisan adalah...", a: ["Integer", "Float", "String", "Boolean"], c: 2 },
            { q: "Editor koding populer dari Microsoft adalah...", a: ["Notepad", "Sublime", "VS Code", "Atom"], c: 2 }
        ],
        "11": [
            { q: "Perintah SQL untuk mengambil data adalah...", a: ["INSERT", "UPDATE", "DELETE", "SELECT"], c: 3 },
            { q: "Tipe data angka bulat adalah...", a: ["String", "Float", "Integer", "Boolean"], c: 2 },
            { q: "Property CSS untuk warna teks adalah...", a: ["font-color", "color", "text-style", "bg"], c: 1 },
            { q: "Kepanjangan PHP adalah...", a: ["Home Page", "Personal Hypertext", "Hypertext Preprocessor", "Pretty Page"], c: 2 },
            { q: "Database pendamping PHP yang populer adalah...", a: ["Oracle", "SQL Server", "MySQL", "Access"], c: 2 },
            { q: "Simbol ID dalam CSS adalah...", a: [".", "#", "*", "@"], c: 1 },
            { q: "Perintah SQL menambah data adalah...", a: ["CREATE", "ADD", "INSERT", "SELECT"], c: 2 },
            { q: "Bagian web yang dilihat user disebut...", a: ["Backend", "Frontend", "Database", "Server"], c: 1 },
            { q: "Fungsi JS untuk pop-up pesan adalah...", a: ["print()", "alert()", "msg()", "show()"], c: 1 },
            { q: "Tag HTML untuk link adalah...", a: ["<link>", "<href>", "<a>", "<url>"], c: 2 }
        ],
        "12": [
            { q: "Arsitektur pemisah tampilan dan logika adalah...", a: ["MVC", "P2P", "Client-Server", "Monolith"], c: 0 },
            { q: "Framework PHP dengan konsep MVC adalah...", a: ["React", "Laravel", "NodeJS", "Bootstrap"], c: 1 },
            { q: "Tanda akhir baris di JS/PHP adalah...", a: [":", ".", ";", "!"], c: 2 },
            { q: "Framework CSS untuk desain cepat adalah...", a: ["Laravel", "CodeIgniter", "Bootstrap", "MySQL"], c: 2 },
            { q: "Tipe data true atau false adalah...", a: ["String", "Integer", "Boolean", "Float"], c: 2 },
            { q: "Aplikasi pengelola database web adalah...", a: ["XAMPP", "phpMyAdmin", "Composer", "Git"], c: 1 },
            { q: "Perintah Git mengirim perubahan ke cloud adalah...", a: ["Pull", "Commit", "Push", "Clone"], c: 2 },
            { q: "Proses perbaikan error koding disebut...", a: ["Editing", "Running", "Debugging", "Writing"], c: 2 },
            { q: "Bahasa pengatur gaya web adalah...", a: ["HTML", "PHP", "CSS", "SQL"], c: 2 },
            { q: "Konsep pemrograman berorientasi objek adalah...", a: ["OOP", "Structured", "Procedural", "Functional"], c: 0 }
        ]
    }
};

// FIREBASE CONFIG
const firebaseConfig = {
    databaseURL: "https://cerdas-cermat-smk-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let currentQuestionIndex = 0;
let score = 0;
let selectedJurusan = "";
let selectedKelas = "";
let roomCode = "";
let role = "";

// FUNGSI UNTUK MODE BELAJAR (SOLO)
function startSolo() {
    selectedJurusan = document.getElementById("jurusan-select").value;
    selectedKelas = document.getElementById("kelas-select").value;

    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("game-area").classList.remove("hide");
    loadQuestion();
}

// FUNGSI UNTUK MODE BATTLE
function initBattle(isOwner) {
    selectedJurusan = document.getElementById("jurusan-select").value;
    selectedKelas = document.getElementById("kelas-select").value;
    roomCode = document.getElementById("room-id").value.toUpperCase();

    if (!roomCode) return alert("Masukkan Kode Room!");

    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("game-area").classList.remove("hide");
    document.getElementById("battle-stats").classList.remove("hide");

    if (isOwner) {
        role = 'p1';
        database.ref('rooms/' + roomCode).set({
            jurusan: selectedJurusan,
            kelas: selectedKelas,
            p1: { score: 0 },
            status: "waiting"
        });
    } else {
        role = 'p2';
        database.ref('rooms/' + roomCode).update({
            p2: { score: 0 },
            status: "playing"
        });
    }
    listenToBattle();
}

function listenToBattle() {
    const ref = database.ref('rooms/' + roomCode);
    ref.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data.status === "playing") {
            selectedJurusan = data.jurusan;
            selectedKelas = data.kelas;
            loadQuestion();
        }
        if (data.p1) document.getElementById("my-live-score").innerText = role === 'p1' ? data.p1.score : data.p2.score;
        if (data.p2) document.getElementById("opp-live-score").innerText = role === 'p1' ? data.p2.score : data.p1.score;
    });
}

function loadQuestion() {
    const questions = quizData[selectedJurusan] ? quizData[selectedJurusan][selectedKelas] : null;
    
    if (!questions) {
        alert("Soal untuk jurusan ini sedang dalam pengembangan!");
        location.reload();
        return;
    }

    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        document.getElementById("question-text").innerText = q.q;
        const ansList = document.getElementById("ans-list");
        ansList.innerHTML = "";

        q.a.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.className = "btn";
            btn.style.width = "100%";
            btn.style.marginBottom = "10px";
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(i);
            ansList.appendChild(btn);
        });
    } else {
        showResult();
    }
}

function checkAnswer(idx) {
    const questions = quizData[selectedJurusan][selectedKelas];
    if (idx === questions[currentQuestionIndex].c) {
        score += 10;
    }
    currentQuestionIndex++;
    
    if (roomCode) {
        database.ref('rooms/' + roomCode + '/' + role).update({ score: score });
    }
    
    loadQuestion();
}

function showResult() {
    document.getElementById("game-area").classList.add("hide");
    document.getElementById("result-screen").classList.remove("hide");
    document.getElementById("total-score").innerText = score;
}

function toggleGuide() {
    document.getElementById("guide-modal").classList.toggle("hide");
}
