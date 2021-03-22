console.log("No.1:");
function arrayToObject(arr) {
  if(arr==null){
	  return "";
  }
  else{
  var now = new Date();
  var thisYear = now.getFullYear();
  var personObj = {
	  firstName: "",
      lastName: "",
      gender: "",
      age: 0,
  }
	  
  for (var i=0 ; i<arr.length ; i++){
	  personObj.firstName = arr[i][0];
	  personObj.lastName = arr[i][1];
	  personObj.gender = arr[i][2];
	  var usia = thisYear - arr[i][3];
	  if (usia < 0 || arr[i][3]==null){
		  personObj.age = "Invalid birth year";
	  }
	  else{
		  personObj.age = usia;
	  }
	  var nama = personObj.firstName +" "+ personObj.lastName;
	  console.log(i+1+". "+nama+" :", personObj);
	  }
  }
}
var people 
= [ ["Abduh", "Muhamad", "male", 1993], ["Ahmad", "Taufik", "Male", 1986] ]
arrayToObject(people);
arrayToObject([]);

var people2 = [ ["Bruce", "Banner", "male", 1975], ["Natasha",
"Romanoff", "female"] ]
arrayToObject(people2)
/*
 1. Bruce Banner: {
 firstName: "Bruce",
 lastName: "Banner",
 gender: "male",
 age: 45
 }
 2. Natasha Romanoff: {
 firstName: "Natasha",
 lastName: "Romanoff",
 gender: "female".
 age: "Invalid Birth Year"
 }
*/
var people3 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots",
"female", 2023] ]
arrayToObject(people3)
/*
 1. Tony Stark: {
 firstName: "Tony",
 lastName: "Stark",
 gender: "male",
 age: 40
 }
 2. Pepper Pots: {
 firstName: "Pepper",
 lastName: "Pots",
 gender: "female".
 age: "Invalid Birth Year"
 }
*/
// Error case
arrayToObject([]) // ""

console.log("\nNo.2:");
function shoppingTime(memberId, totalMoney) {
	var belanja=[];
	var total =0;
	var money = totalMoney;
	if(memberId=="" || memberId==null){
		return "Mohon maaf, toko X hanya berlaku untuk member saja";
	}
	else if(totalMoney<50000){
		return "Mohon maaf, uang tidak cukup";
	}
	else{
		if (money>=1500000){
			belanja.push("Sepatu Stacattu");
			money -= 1500000;
		}
		if (money>=500000){
			belanja.push("Baju Zoro");
			money -= 500000;
		}
		if (money>=250000){
			belanja.push("Baju H&N");
			money -= 250000;
		}			
		if (money>=175000){
			belanja.push("Sweater Uniklooh");
			money -= 175000;
		}
		if (money>=50000){
			belanja.push("Casing Handphone");
			money -= 50000;
		}
		var barang={
			memberId : memberId,
			money : totalMoney,
			listPurchased : belanja,
			changeMoney: money
		}
		return barang;
	}
}
 
console.log(shoppingTime('1820RzKrnWn08', 2475000));
 //{ memberId: '1820RzKrnWn08',
 // money: 2475000,
 // listPurchased:
 // [ 'Sepatu Stacattu',
 // 'Baju Zoro',
 // 'Baju H&N',
 // 'Sweater Uniklooh',
 // 'Casing Handphone' ],
 // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
// [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log("\nNo.3:");
function naikAngkot(arr) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var semua = [];
  if(arr==null || arr==""){
	  return semua;
  }
  else{
  for (var i=0 ; i<arr.length ; i++){
	var ong = (rute.indexOf(arr[i][2])-rute.indexOf(arr[i][1])) * 2000;
	semua[i] = {"penumpang" : arr[i][0], "naikDari" : arr[i][1], "tujuan" :			   arr[i][2], "bayar" : ong};
  }
  return semua;
  }
}
 
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
// { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]
