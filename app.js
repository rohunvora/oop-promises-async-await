// Object Oriented Programming

const dog = {
  name: true,
  goodBoy: true,
  gender: "girl"
};

const dogTwo = {
  name: "Rocco",
  color: "brown"
}

dogTwo.__proto__ = dog;

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodboy);


// Make two objects one object needs to inherit from the object

const dogThree = {
  name: "Rufus",
  color: "green"
}

const dogFour = {

}

dogFour.__proto__ = dogThree;

// Constructor Functions
function User(name) {
  this.name = name;
}

let adam = User('Adam');
let pete = new User('Pete');
console.log(adam);

function NBAPlayer(name, team, threePointShooter) {
  this.name = name;
  this.team = team;
  this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
console.log(steph);
console.log(steph.name);


function Artist(name) {
  this.name = name;
}

function bestArtist(name, album, ranking) {
  this.name = name;
  this.album = album;
  this.ranking = ranking;
}

let playboi = new bestArtist('Playboi Carti', 'Die Lit', 1);
let frank = Artist('Frank Ocean', 'Blonde', 2);

console.log(playboi);
console.log(playboi.name);
