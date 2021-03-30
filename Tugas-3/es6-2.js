const newFunction = (firstName, lastName) => {
    return{
		fullName(){
			return console.log(firstName + " " + lastName);
		}
	}
}
 
//Driver Code 
newFunction("William", "Imoh").fullName();
