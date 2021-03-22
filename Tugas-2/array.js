console.log("No.1:");
function range(startNum, finishNum){
	var ar =[];
	if(startNum==null || finishNum==null){
		return "-1";
	}
	else{
	   if(startNum<finishNum){
		   for(var i = startNum; i <= finishNum; i++) {
			   ar.push(i);
		   }
	   }else{
		   for(var i = startNum; i >= finishNum; i--) {
			   ar.push(i);
		   }
	   }
	   return ar;
	}
} 

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

console.log("\nJawaban Soal No.2:"); 
function rangeWithStep(startNum, finishNum, step) {
	var ar =[];
	if(startNum==null || finishNum==null){
		return "-1";
	}
	else{
	   if(startNum<finishNum){
		   for(var i = startNum; i <= finishNum; i+=step) {
			   ar.push(i);
		   }
	   }else{
		   for(var i = startNum; i >= finishNum; i-=step) {
			   ar.push(i);
		   }
	   }
	   return ar;
	}
} 

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

console.log("\nNo.3:");
 function sum(startNum, finishNum, step) {
	var ar = 0;
	if(startNum == null && finishNum == null){
		return 0;
	}
	else if(startNum==null){
		return finishNum;
	}
	else if(finishNum==null){
		return startNum;
	}
	else{
		if(step == null){
			step = 1;
		}
		if(startNum<finishNum){
		   for(var i = startNum; i <= finishNum; i+=step) {
			   ar += i;
		   }
	   }
	   else{
		   for(var i = startNum; i >= finishNum; i-=step) {
			   ar += i;
			   }
		   }
	   return ar;
	}
}
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("\nNo.4:");
function dataHandling(data){	
	for(var i=0; i<data.length; i++){
		console.log("Nomor ID: " + data[i][0]);
		console.log("Nama Lengkap: " + data[i][1]);
		console.log("TTL: " + data[i][2] + ", " + data[i][3]);
		console.log("Hobi: " + data[i][4] + "\n");
	}
}
var input = [
                ["0001", "Deavy Ambar Permatasari", "Purwakarta", "09/06/1997", "Aerobik"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 
dataHandling(input);

console.log("\nNo.5:");
function balikKata(data){
	var hasil="";
	for(var i=data.length-1; i>=0; i--){
		hasil += data[i];
	}
	return hasil;
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("Informatika")) // akitamrofnI
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Humanikers")) // srekinamuH ma I 

console.log("\nNo.6:");
function dataHandling2(data){
	data.splice(1, 1, data[1]+"Permatasari");
	data.splice(2, 1, "Provinsi " + data[2]);
	data.splice(4, 1, "Wanita", "SMAN 3 Purwakarta");
	console.log(data);
	
	var ttl = String(data.slice(3,4));
	var bulan = ttl.split("/");
	switch(bulan[1]) {
	  case '01':   { var bulanTeks = 'Januari'; break; }
	  case '02':   { var bulanTeks = 'Februari'; break; }
	  case '03':   { var bulanTeks = 'Maret'; break; }
	  case '04':   { var bulanTeks = 'April'; break; }
	  case '05':   { var bulanTeks = 'Mei'; break; }
	  case '06':   { var bulanTeks = 'Juni'; break; }
	  case '07':   { var bulanTeks = 'Juli'; break; }
	  case '08':   { var bulanTeks = 'Agustus'; break; }
	  case '09':   { var bulanTeks = 'September'; break; }
	  case '10':   { var bulanTeks = 'Oktober'; break; }
	  case '11':   { var bulanTeks = 'November'; break; }
	  case '12':   { var bulanTeks = 'Desember'; break; }
	  default:  { var bulanTeks = 'salah'; break; }
	}
	console.log(bulanTeks);
	
	console.log(bulan.sort(function(value1,value2){return value2-value1}));
	
	var bulan = ttl.split("/");
	console.log(bulan.join("-"));
	
	var nama = String(data.slice(1,2));
	console.log(nama.slice(0,30));
}
var input = ["0001", "Deavy Ambar ", "Jawa Barat", "09/06/1997", "Aerobik"];
dataHandling2(input);
