function waktu(angka, pilihan) {
    var waktu = new Date(angka);
    var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var tahun = waktu.getFullYear();
    var jam = "0" + waktu.getHours();
    var menit = "0" +waktu.getMinutes();
    var detik = "0" +waktu.getSeconds();
    var tanggal = waktu.getDate();
    var result = [];
    result[0] = jam.substr(-2) + ":" + menit.substr(-2) + ":" + detik.substr(-2) + " | " + hari[waktu.getDay()] + ", " + tanggal + " " + bulan[waktu.getMonth()] + " " + tahun; //13:15:07 | Minggu, 9 Mei 2021
    result[1] = jam.substr(-2) + ":" + menit.substr(-2) + ":" + detik.substr(-2) + " " + hari[waktu.getDay()] + ", " + tanggal + " " + bulan[waktu.getMonth()] + " " + tahun; //13:15:07 Minggu, 9 Mei 2021
    result[2] = jam.substr(-2) + ":" + menit.substr(-2) + ":" + detik.substr(-2); //13:15:07
    result[3] = jam.substr(-2) + ":" + menit.substr(-2); //13:15
    result[4] = hari[waktu.getDay()] + ", " + tanggal + " " + bulan[waktu.getMonth()] + " " + tahun; //Minggu, 9 Mei 2021
    result[5] = hari[waktu.getDay()]; //Minggu
    result[6] = tanggal; //9.0
    result[7] = bulan[waktu.getMonth()]; //Mei
    result[8] = tahun; //2021.0
    return result[pilihan];
}