console.log("No.1:");
function teriak() {
  return "Halo Humanika!\n";
}
console.log(teriak());

console.log("No.2:");
function kalikan(x,y) {
  return x*y;
}
 
var num1 = 20;
var num2 = 5;
 
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log("\nNo.3:");
function introduce(name,age,address,hobby) {
  return "Nama saya "+ name + ", umur saya " + age + " tahun, alamat saya di " + address + " ,dan saya punya hobby yaitu " + hobby + "!";
}
 
var name = "Deavy";
var age = 23;
var address = "Perum Ciganea Indah Blok D9";
var hobby = "Aerobik";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
