export default function MyList() {
    const bands = [
      {
        id: 1,
        nama_penyanyi: "Ariel Noah",
        nama_lagu: "Separuh Aku",
        nama_band: "Noah",
        gambar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHKCXiLjQivQt5PnlYzYjLses5ihGJ8ThlPEYOVMw9zZKQ6wI8",
      },
      {
        id: 2,
        nama_penyanyi: "Geisha",
        nama_lagu: "Lumpuhkan Ingatanku",
        nama_band: "Geisha",
        gambar: "https://musica.id/wordpress/wp-content/uploads/2023/12/Geisha-Foto-Promo-square.jpg",
      },
      {
        id: 3,
        nama_penyanyi: "Vierra",
        nama_lagu: "Terlalu Lama",
        nama_band: "Vierratale",
        gambar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQAM-kZzDzpnbhgEm-3DEli3_qvHCuDmeOPFlrKTm3edntIAtJ",
      },
      {
        id: 4,
        nama_penyanyi: "Nisa Sabyan",
        nama_lagu: "Deen Assalam",
        nama_band: "Sabyan Gambus",
        gambar: "https://akcdn.detik.net.id/visual/2021/02/26/nissa-sabyan_11.jpeg?w=480&q=90",
      },
      {
        id: 5,
        nama_penyanyi: "Wali",
        nama_lagu: "Tobat Maksiat",
        nama_band: "Wali Band",
        gambar: "https://upload.wikimedia.org/wikipedia/jv/1/17/Wali_band.jpg",
      },
      {
        id: 6,
        nama_penyanyi: "Armada",
        nama_lagu: "Asal Kau Bahagia",
        nama_band: "Armada",
        gambar: "https://cdn.antaranews.com/cache/1200x800/2021/03/03/Screenshot_2021-03-03-17-24-18-14_copy_1080x720.jpg",
      },
    ];
  
    const showAlert = (band) => {
      alert(
        `Nama Penyanyi: ${band.nama_penyanyi}\nNama Band: ${band.nama_band}\nJudul Lagu: ${band.nama_lagu}`
      );
    };
  
    const like = (event, band) => {
      alert(`Saya Menyukai Band ${band.nama_band}`);
    };
  
    const comment = (band) => {
      const comment = prompt(
        `Masukkan Komentar Anda Tentang ${band.nama_band} : `,
      );
      alert(`Komentar Anda: ${comment}\n\nTerima Kasih Telah Memberikan Tanggapan`);
    };
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
        {bands.map((band) => (
          <div
            key={band.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={band.gambar}
              alt={band.nama_lagu}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{band.nama_lagu}</h2>
              <p className="text-gray-600 mb-4">{band.nama_band}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={(e) => like(e, band)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                >
                  Suka
                </button>
                <button
                  onClick={() => showAlert(band)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Informasi
                </button>
                <button
                  onClick={() => comment(band)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                >
                  Komentar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  