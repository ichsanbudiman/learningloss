export function DataHolderQuestioner(jenjang){
    let data = new Map();
    data.set("ma", [
        {
            questionCategory: 'A. Kondisi Siswa Keluarga/Lingkungan Belajar',
            questions: [
                {
                    no: 1,
                    questionType: 'radio',
                    question: 'Jenis Kelamin',
                    options: ['Perempuan', 'Laki-laki']},
                {
                    no: 2,
                    question: 'Asal Provinsi',
                    questionType: 'combobox',
                    options: [
                        "Aceh",
                        "Bali",
                        "Banten",
                        "Bengkulu",
                        "DKI Yogyakarta",
                        "DKI Jakarta",
                        "Gorontalo",
                        "Jambi",
                        "Jawa Barat",
                        "Jawa Tengah",
                        "Jawa Timur",
                        "Kalimantan Barat",
                        "Kalimantan Selatan",
                        "Kalimantan Tengah",
                        "Kalimantan Timur",
                        "Kalimantan Utara",
                        "Kepulauan Bangka Belitung",
                        "Kepulauan Riau",
                        "Lampung",
                        "Maluku",
                        "Maluku Utara",
                        "Nusa Tenggara Barat",
                        "Nusa Tenggara Timur",
                        "Papua",
                        "Papua Barat",
                        "Riau",
                        "Sulawesi Barat",
                        "Sulawesi Selatan",
                        "Sulawesi Tengah",
                        "Sulawesi Tenggara",
                        "Sulawesi Utara",
                        "Sumatera Barat",
                        "Sumatera Selatan",
                        "Sumatera Utara"
                    ]
                },
                {
                    no: 3,
                    question: 'Disabilitas',
                    questionType: 'radio',
                    options: ['Tidak ada disabilitas', 'Disabilitas Fisik', 'Disabilitas non-fisik']
                },
                {
                    no: 4,
                    question: 'Kondisi Orang Tua',
                    questionType: 'radio',
                    options: ['Lengkap', 'Yatim', 'Piatu', 'Yatim Piatu']},
                {
                    no: 5,
                    questionType: 'radio',
                    question: 'Kualifikasi pendidikan Ibu', options: ['SD', 'SMP', 'SMA', 'Perguruan Tinggi']},
                {
                    no: 6,
                    questionType: 'radio',
                    question: 'Pengeluaran bulanan', options: ['< 2jt Rupiah', '2-4jt Rupiah', '> 4jt Rupiah']},
                {
                    no: 7,
                    questionType: 'radio',
                    question: 'Ketersediaan Internet di rumah', options: ['Tersedia', 'Tidak Tersedia']},
                {
                    no: 8,
                    questionType: 'radio',
                    question: 'Ketersediaan buku teks/ buku paket', options: ['Tersedia', 'Tidak Tersedia']},
                {
                    no: 9,
                    questionType: 'radio',
                    question: 'Ketersediaan Ponsel Pintar', options: ['Tersedia', 'Tidak Tersedia']},
                {
                    no: 10,
                    questionType: 'radio',
                    question: 'Ketersediaan Komputer/ Laptop', options: ['Tersedia', 'Tidak Tersedia']},
                {
                    no: 11,
                    questionType: 'radio',
                    question: 'Usia Orang Tua Menikah', options: ['Usia Dewasa', 'Usia Dini']}]
        },
        {
            questionCategory: 'B. Fasilitas Pembelajaran dari Sekolah',
            questions: [
                {
                    no: 12,
                    questionType: 'radio',
                    question: 'Adakah dukungan kuota internet dari sekolah?', options: ['Ada', 'Tidak Ada']},
                {
                    no: 13,
                    questionType: 'radio',
                    question: 'Adakah materi/ konten pelajaran yang disediakan secara online?',
                    options: ['Ada', 'Tidak Ada']
                }]
        },
        {
            questionCategory: 'C. Evaluasi Ketercapaian Mata Pelajaran Al-Qur\'an Hadis',
            questions: [
                {
                    no: 15,
                    questionType: 'radio',
                    question: 'Dasar-dasar ilmu al-Qur\'an meliputi: AlQur\'an dan wahyu menurut para ulama\', sejarah penurunan dan penulisan Al-Qur\'an, bukti-bukti keautentikan Al-Qur\'an, kemukjizatan Al-Qur\'an, pokok-pokok isi Al-Qur\'an, struktur ayat dan surat dalam Al-Qur\'an. Ayat yang memerintahkan untuk mentauhidkan Allah dan berbuat baik adalah…\n Ayat yang memerintahkan untuk mentauhidkan Allah dan berbuat baik adalah…',
                    options: ['Q.S. At-Tahrim: 6', 'Q.S. Taha: 132, An-Nisa 36', 'Q.S. Hud: 117-119']
                },
                {
                    no: 16,
                    questionType: 'radio',
                    question: 'Dasar-dasar ilmu al-hadits meliputi: perihal hadis, sunah, khabar dan atsar (macam-macam sunnah), perkembangan hadis, unsur-unsur hadis, fungsi hadis terhadap Al-Qur\'an, pembagian hadis dari segi kuantitas dan pembagian hadis dari segi kualitasnya, biografi tokohtokoh hadis dan kitabnya\nBerikut adalah perawi hadis, kecuali:',
                    options: ["Imam Muslim", "Imam Abu Dawud", "Imam Ibnu Tirmidzi", "Imam An-Nasa'i"]
                },
                {
                    no: 17,
                    questionType: 'radio',
                    question: '"Tema-tema yang ditinjau dari perspektif al-Qur\'an dan Hadis, yaitu: \n' +
                        '- Manusia dan tugasnya sebagai khalifah di bumi. \n' +
                        '- Demokrasi dan musyawarah mufakat. \n' +
                        '- Keikhlasan dalam beribadah.\n' +
                        ' - Nikmat Allah dan cara mensyukurinya. \n' +
                        '- Perintah menjaga kelestarian lingkungan hidup. \n' +
                        '- Pola hidup sederhana dan perintah menyantuni para duafa. \n' +
                        '- Berkompetisi dalam kebaikan. \n' +
                        '- Amar ma`ruf nahi munkar. \n' +
                        '- Ujian dan cobaan manusia. \n' +
                        '- Tanggung jawab manusia terhadap keluarga dan masyarakat. \n' +
                        '- Berlaku adil dan jujur. \n' +
                        '- Toleransi dan etika pergaulan. \n' +
                        '- Etos kerja. \n' +
                        '- Makanan yang halal dan baik. \n' +
                        '- Ilmu pengetahuan dan teknologi.\nHadis berikut berisi tentang… dan diriwayatkan oleh...َدَّثَنَا هِشَامُ بْنُ عَمَّارٍ حَدَّثَنَا حَفْصُ بْنُ سُلَيْمَانَ حَدَّثَنَا كَثِيرُ بْنُ شِنْظِيرٍ عَنْ مُحَمَّدِ بْنِ سِيرِينَ عَنْ أَنَسِ بْنِ مَالِكٍ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ وَوَاضِعُ الْعِلْمِ عِنْدَ غَيْرِ أَهْلِهِ كَمُقَلِّدِ الْخَنَازِيرِ الْجَوْهَرَ وَاللُّؤْلُؤَ وَالذَّهَبَ"',
                    options: ["Kewajiban menuntut ilmu oleh Ibnu Majah", "kewajiban menghormati orang tua oleh Imam Bukhari", "Kewajiban menyampaikan ilmu oleh Imam Bukhari", "Berbuat baik kepada orang tua oleh Bukhari dan Muslim"]
                }]
        },
        {
            questionCategory: 'D. Evaluasi Ketercapaian Mata Pelajaran Aqidah Akhlaq',
            questions: [
                {
                    no: 18,
                    questionType: 'radio',
                    question: 'Aspek akidah terdiri atas: prinsip-prinsip akidah dan metode peningkatannya, ' +
                        'alAsma\' al-Husna (al-Kariim, al-Mu\'min, alWakiil, al-Matiin, al-Jaami`, ' +
                        'al-Hafiidz, al-Rofii\', al-Wahhaab, al-Rakiib, al-Mubdi\', al-Muhyi, ' +
                        'al-Hayyu,al-Qoyyuum, alAakhir, al-Mujiib, dan al-Awwal, alRozaaq, ' +
                        'al-Malik, al-Hasiib, al-Hadi, alKhalik dan al-Hakim), Islam washatiyah ' +
                        '(moderat) dan ciri-ciri pemahaman Islam radikal, sikap tasamuh (toleransi), ' +
                        'musawah (persaamaan) derajat, tawasuth (moderat), dan ukhuwwah (persaudaraan), ' +
                        'kematian, ciri-ciri, husnul dan su\'ul khotimah, serta alam barzah, ' +
                        'nafsu syahwat dan ghadlab; serta cara menundukkannya melalui mujaahadah dan ' +
                        'riyaadhah, aliran-aliran Kalam dalam peristiwa Tahkiim, aliran-aliran ilmu Kalam: ' +
                        'Khawarij, Syiah, Murji-ah, Jabariyah, Qodariyah, Mu\'ta7ilah, Ahlussunnah wal ' +
                        'Jama\'ah (Asy-ariyah dan Maturidiyah), ajaran taswauf; syariat, thariqat, ' +
                        'hakikat dan ma\'rifat\nAliran kalam ini pertama yang muncul dalam sejarah Islam ' +
                        'pada abad ke-1 H. Aliran ini mengacu kepada sekelompok orang yang memilih keluar ' +
                        'dari kelompok Ali bin Abi Thalib karena ketidaksetujuan terhadap tahkim atau ' +
                        'perundingan damai yang disepakati Ali dengan pihak Muawiyah. Mereka menuduh kedua ' +
                        'belah pihak sebagai orang-orang yang tidak beriman dan kafir karena mengambil ' +
                        'keputusan tidak berdasarkan Alquran. Bagi kaum ini, yang berhak memutuskan perkara ' +
                        'hanyalah Allah SWT. Apakah nama aliran ilmu kalam ini?',
                    options: ["Syiah", "Qodariyah", "Khawarij", "Jabariyah"]
                },
                {
                    no: 19,
                    questionType: 'radio',
                    question: 'Aspek akhlak terpuji meliputi: hikmah, iffah, syaja`ah dan `adalah, pergaulan remaja, ' +
                        'bekerja keras, kolaboratif, fastabiqul khairat, optimis, dinamis, kreatif, dan inovatif, ' +
                        'akhlak mulia dalam berorganisasi dan bekerja. \nRiwayat Abu Dawud menuliskan, dari Abu Hurairah ' +
                        'bahwa Nabi shallallahu \'alaihi wasallam bersabda: "Seorang laki-laki itu bergantung dengan agama ' +
                        'teman gaulnya, maka hendaklah salah seorang melihat siapa yang menjadi teman gaulnya". ' +
                        'Hadis ini menyampaikan salah satu kunci pertemanan, yang maknanya adalah menjaga pertemanan dengan...'
                    ,
                    options: ["Memilih teman yang seagama, memilih teman yang selalu mengajak ke arah kebaikan", "memilih teman yang bisa diandalkan", "memilih teman yang baik dan pengertian"]
                },
                {
                    no: 20,
                    questionType: 'radio',
                    question: 'Aspek akhlak tercela meliputi: licik, tamak, zhalim, diskriminasi, israf, tabzir, dan bakhil, ' +
                        'dosa-dosa besar (membunuh, liwath, LGBT, meminum khomar, judi, mencuri, durhaka kepada ' +
                        'orang tua, meninggalkan sholat, memakan harta anak yatim, dan korupsi), nifaq, keras hati, ' +
                        'dan ghadab (pemarah), fitnah, berita bohong (hoaks), namimah, tajassus dan ghibah\nSuatu hari Anda mengetahui fakta bawa sahabat Anda adalah seorang LGBT. Bagaimana sikap Anda?',
                    options: ["Mengindari sahabat Anda", "Tetap bersahabat dan toleransi terhadap perbedaan", "Tetap bersahabat dan berusaha menasehati", "Membatasi diri bergaul dengannya."]
                },
                {
                    no: 21,
                    questionType: 'radio',
                    question: 'Aspek adab meliputi: adab mengunjungi orang sakit, manfaat berpakaian, berhias, ' +
                        'perjalanan, bertamu, dan menerima tamu, bergaul dengan sebaya, yang lebih tua, ' +
                        'yang lebih muda dan lawan jenis.\nBerikut adalah adab berhias bagi wanita menurut Islam, kecuali:'
                    ,
                    options: ["Mentato tubuhnya, menghilangkan sebagian atau seluruh alisnya, dan mengikir sela-sela giginya",
                        "Tidak menyambung rambut dan menyemir rambut menjadi warna hitam.",
                        "Memanjangkan kuku dan mewarnai kuku dengan pewarna yang tidak menghalangi masuknya air",
                        "Tidak menyerupai laki-laki"]
                },
                {
                    no: 22,
                    questionType: 'radio',
                    question: 'Aspek Kisah meliputi: keteladan sifat utama Putri Rasulullah, Fatimatuzzahra ra. dan Uways ' +
                        'al-Qarni, sahabat Abdurrahman bin Auf dan Abu Dzar alGifari r.a., tokoh utama dan inti ajaran ' +
                        'tasawuf (Imam Junaid al-Baghdadi, Rabiah al-Adawiyah, alGhazali, Syekh Abdul Qadir al-Jailani), ' +
                        'kesufian Imam Hanafi, Imam Malik, Imam AsySyafei dan Imam Ahmad bin Hanbal, keteladanan Kyai Kholil ' +
                        'al-Bangkalani, Kyai Hasyim Asy\'ari, dan Kyai Ahmad Dahlan.\nBerikut adalah tokoh utama dan inti ajaran tasawuf, kecuali:',
                    options: ["Imam Junaid al-Baghdadi", "Rabiah al-Adawiyah", "alGhazali", "Syekh Abdul Qadir al-Jailani", "Abu Dzar al Gifari"]
                }]
        },
        {
            questionCategory: 'E. Evaluasi Ketercapaian Mata Pelajaran Fiqih',
            questions: [
                {
                    no: 23,
                    questionType: 'radio',
                    question: 'Kajian tentang prinsip-prinsip ibadah dan syari\'at dalam Islam; konsep fikih dan sejarah perkembangannya, ketentuan pemulasaraan jena7ah, ketentuan zakat dan perundang-undangan tentang pengelolaan zakat, haji dan umrah, kurban dan akikah;\nApakah hukum asuransi menurut Islam?',
                    options: ["Dilarang karena bertentangan dengan hukum Islam", "Diperbolehkan selama dikelola sesuai hukum Islam", "Diwajibkan karena bertujuan untuk kesejahteraan", "Lebih baik dihindari karena lebih banyak madharat-nya"]
                },
                {
                    no: 24,
                    questionType: 'radio',
                    question: 'Hukum Islam konsep akad kepemilikan harta benda, dan -ihyaaul mawaat, jual beli, khiyaar, salam, dan hajr, musaaqah, muzaara\'ah, mukhaabarah, mudlaarabah, muraabahah, syirkah, syuf\'ah, wakaalah, shulh, dlamaan dan kafaalah; nafaqah, shadaqah, hibah, hadiah dan wakaf; hukum riba, bank, dan asuransi; jinaayaat, huduud, larangan bughaat; peradilan Islam dan hikmahnya\nApakah pengertian jinayat?',
                    options: ["Suatu hukum terhadap bentuk perbuatan kejahatan yang berkaitan dengan pembunuhan, perzinahan, menuduh zina, pencurian",
                        "Sanksi yang sudah ditentukan beratnya oleh Allah untuk setiap tindakan kemaksiatan, sehingga dapat dijadikan pengingat bagi manusia agar tidak melakukannya",
                        "gerombolan (pemberontak) yang menentang kekuasaan negeri dengan kekrasan senjata, baik karena salah pengertian ataupun bukan. Tindakan ini dilakukan untuk menghalang-halangi, atau keluar dari imam yang sah tanpa alasan yang benar.",
                        "sesuatu yang erat kaitannya dengan aktivitas jual beli dalam ajaran Islam"]
                },
                {
                    no: 25,
                    questionType: 'radio',
                    question: 'Hukum Islam tentang ketentuan perkawinan dalam hukum Islam dan perundang-undangan;' +
                        ' ketentuan talak dan rujuk dan akibat hukum yang menyertainya; ketentuan hukum waris dan wasiat; ' +
                        'konsep ushul fikih; muttafaq dan mukhtalaf; konsep ijtihad dan bermadzhab dalam pelkasanaan ' +
                        'hukum Islam; konsep tentang al-haakim, alhukmu, al-mahkuum fiih, dan al-mahkuum \' alaih; ' +
                        'al-qawaaidul khamsah; kaidah \'amr dan nahi; `aam dan khaash; takhshiish dan mukhasshish,' +
                        ' mujmal dan mu bayyan; muraadif dan musytarak; muthlaq dan muqayyad; dhaahir dan ta\'wiil; ' +
                        'manthuuq dan mafhuum.\nSeseorang meninggal dan meninggalkan ayah, ibu, istri, dan satu anak ' +
                        'laki-laki dan dua anak perempuan. Berapakah bagian warisan untuk ayah dan ibu?',
                    options: ["1/8", "1/6", "1/4", "1/3"]
                }]
        },
        {
            questionCategory: 'F. Evaluasi Ketercapaian Mata Pelajaran Sejarah Kebudayaan Islam',
            questions: [
                {
                    no: 26,
                    questionType: 'radio',
                    question: 'Dakwah Nabi Muhammad saw. pada periode Makkah dan periode Madinah.\nBerikut adalah strategi dakwah Rasullullah SAW pada periode Madinah:'
                    ,
                    options: ["Berdakwah secara sembunyi-sembunyi", "berdakwah secara terang-terangan", "membina hubungan antara kaum muslim dan non-muslim", "mempersaudarakan kaum yahudi dan nasrani"]
                },
                {
                    no: 27,
                    questionType: 'radio',
                    question: 'Kepemimpinan umat setelah Rasulullah saw. wafat.\nDaulah Abbasiyah berhasil membawa Islam di puncak kejayaan baik dari sisi sosial, budaya, pemerintahan, politik dan menjadi pusat dari pengetahuan dunia. Namun, ada faktor-faktor yang menyebabkan Daulah Abbasiyah mengalami kemunduran, kecuali:',
                    options: ["a. Luas dari wilayah kekuasan Daulah Abbasiyah, sementara itu komunikasi dari pusat dengan daerah-daerah sulit untuk dilakukan",
                        "Adanya fokus menyelesaikan persoalan politik dibandingkan pembinaan peradaban sekaligus kebudayaan Islam",
                        "Adanya profesionalisasi pada angkatan bersenjata, maka ketergantungan pada khalifah pun kian tinggi",
                        "Keuangan negara dinilai sangat sulit, sebab biaya yang dikeluarkan saat itu untuk tentara bayaran cukup besar"]
                },
                {
                    no: 28,
                    questionType: 'radio',
                    question: 'Perkembangan Islam periode kiasik/zaman keemasan (pada tahun 650-1250 M)\nPada masa perkembangan Islam periode  keemasan (650-1250 M), muncul ulama-ulama besar di bidang fiqih antara lain: ',
                    options: ["Imam Bukhari", "Imam Muslim", "Imam Abu Dawud", "Imam Abu Hanifah"]
                },
                {
                    no: 29,
                    questionType: 'radio',
                    question: 'Perkembangan Islam pada abad pertengahan/zaman kemunduran (1250 M-1800 M).\nIslam mengalami masa kemunduran (1250 M-1800 M), berikut yang bukan ciri-ciri masa kemunduran Islam:',
                    options: ["Perbedaan Sunni dan Syi'ah semakin nyata",
                        "Dunia Islam terbagi menjadi Arab dan Persia",
                        "Dunia Islam terbagi menjadi Persia dan Turki",
                        "Muncul tiga kerajaan besar sebagai akhir masa kemunduran, yakni Utsmani di Turki, Safawi di Persia dan Mughal di India"]
                },
                {
                    no: 30,
                    questionType: 'radio',
                    question: 'Perkembangan Islam pada masa modern/zaman kebangkitan (1800 Msekarang).\nMuhammad Ali Pasya adalah salah satu tokoh pembaharuan Islam di masa modern atau zaman kebangkitan, pemikirannya adalah:',
                    options: ["a. Tahuid, dan mendukung sistem pendidikan diubah dengan sistem yang dinamis dan kreatif, Syirik dibersihkan.",
                        "Membangun kekuatan militer untuk muslim yang kuat, meningkatkan pendidikan muslim.",
                        "pentingnya kemajuan ekonomi, dari pertanian karena dikelola dalam negara yang mengakibatkan kesejahteraan ekonomi",
                        "Mengajarkan patriotisme untuk membangun masyarakat yang memiliki perdaban"]
                },
                {
                    no: 31,
                    questionType: 'radio',
                    question: 'Perkembangan Islam di Indonesia dan di dunia.\nBerikut yang bukan tokoh-tokoh pembaharuan Islam di Indonesia:',
                    options: ["Syaikh Ahmad Syurkati", "Ahmad Dahlan", "Muhammad Hasyim Asy'ari", "Hassan Ahmad"]
                }
            ]
        }
    ]);

    return data[jenjang]
}