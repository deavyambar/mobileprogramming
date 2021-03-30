//No.1 - Class Animal
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }
    get name() {
        return this._name;
    }
    get legs() {
        return this._legs;
    }
    get cold_blooded() {
        return this._cold_blooded;
    }
  
  }
  var sheep = new Animal("shaun");
  console.log(sheep.name) // "shaun"
  console.log(sheep.legs) // 4
  console.log(sheep.cold_blooded) // false
  console.log('')
  
  class Ape extends Animal {
    constructor(name) {
        super(name)
        this._leg = 2
        this._sound = "Auooo"
    }
    yell() {
        console.log(this._sound)
    }
  }
  
  
  class Frog extends Animal {
    constructor(name) {
        super(name)
        this._leg = 2
        this._sound = 'Hop Hop'
    }
    jump() {
        console.log(this._sound)
    }
  }
  
  
  // Code class Ape dan class Frog di sini
  
  var sungokong = new Ape("kera Sakti")
  console.log("Kera Sakti")
  sungokong.yell() // "Auooo"
  console.log('')
  var kodok = new Frog("buduk")
  console.log("buduk")
  kodok.jump() // "hop hop"
  console.log('')
