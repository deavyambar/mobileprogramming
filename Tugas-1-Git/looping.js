console.log("A.:");
console.log("LOOPING PERTAMA");
var i = 2;
while(i <= 20) { 
  console.log(i+' - I love coding'); 
  i+=2; 
}

console.log("\nB.:");
var i = 20;
while(i > 0) { 
  console.log(i+' - I will become a mobile developer'); 
  i-=2; 
}

console.log("\nB.:");
for(var i = 1; i <= 20; i++) {
  if(i%2==0){
	  console.log(i + '- Berkualitas');
  }else if(i%3==0){
	  console.log(i + '- I Love Coding');
  }else{
	  console.log(i + '- Santai');
  }
} 

console.log("\nC.:");
var pp1 = '';
for(var i = 1; i <= 4; i++) {
	pp1 = '';
  for(var j = 1; j <= 8; j++) {
	pp1 += '#';
  }
  console.log(pp1);
} 

console.log("\nD.:");
var pp1 = '';
for(var i = 1; i <= 7; i++) {
	pp1 = '';
  for(var j = 1; j <= i; j++) {
	pp1 += '#';
  }
  console.log(pp1);
} 

console.log("\nE.:");
pp1 = '';
for(var i = 1; i <= 8; i++) {
	pp1 = '';
  for(var j = 1; j <= 8; j++) {
	if(i%2==0){
		if(j%2==0){
			pp1 += ' ';
		}else{
			pp1 += '#';
		}
	}else{
		if(j%2==0){
			pp1 += '#';
		}else{
			pp1 += ' ';
	}
  }
}
  console.log(pp1);
} 
