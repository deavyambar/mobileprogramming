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
  
//No.2 - Function to class
class Clock {

    constructor({template})
    {
      this.template = template;
    }
  
    render()
    {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    start()
    {
      this.timer = setInterval(this.render.bind(this), 1000)
    }
  
    stop()
    {
      clearInterval(this.timer);
    }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start()
  
