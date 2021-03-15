var nama = "Babang";
var peran = "Penyihir";

console.log("No. 1:");
if(nama == ""){
    console.log("Nama harus diisi!");
}else if(peran == ""){
    console.log("Halo " + nama + " , Pilih peranmu untuk memulai game!");
}else{
	console.log("Selamat datang di Dunia Werewolf, " + nama);
	if(peran == "Penyihir"){
	console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
	}else if(peran == "Guard"){
	console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf!");
	}else if(peran == "Werewolf"){
	console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
	}
}

var tanggal = 23; 
var bulan = 6; 
var tahun = 2018;

switch(bulan) {
  case 1:   { var bulanTeks = 'Januari'; break; }
  case 2:   { var bulanTeks = 'Februari'; break; }
  case 3:   { var bulanTeks = 'Maret'; break; }
  case 4:   { var bulanTeks = 'April'; break; }
  case 5:   { var bulanTeks = 'Mei'; break; }
  case 6:   { var bulanTeks = 'Juni'; break; }
  case 7:   { var bulanTeks = 'Juli'; break; }
  case 8:   { var bulanTeks = 'Agustus'; break; }
  case 9:   { var bulanTeks = 'September'; break; }
  case 10:   { var bulanTeks = 'Oktober'; break; }
  case 11:   { var bulanTeks = 'November'; break; }
  case 12:   { var bulanTeks = 'Desember'; break; }
  default:  { var bulanTeks = 'salah'; break; }}

console.log("\nNo. 2:"); 
if(tahun < 1900 || tahun > 2200){
	console.log("Tahun yang anda masukkan salah!");
}else if(bulanTeks == "salah"){
	console.log("Bulan yang anda masukkan salah!");
}else if(tanggal <=31){
	console.log(tanggal + " " + bulanTeks + " " + tahun);
}else{
	console.log("Tanggal yang anda masukkan salah!");
}
