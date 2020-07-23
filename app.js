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

function BestArtist(name, album, ranking) {
  this.name = name;
  this.album = album;
  this.ranking = ranking;
  this.intro = function() {
    console.log("Hi my name is " + this.name);
  }
}

let playboi = new BestArtist('Playboi Carti', 'Die Lit', 1);
let frank = new BestArtist('Frank Ocean', 'Blonde', 2);

console.log(playboi);
console.log(playboi.name);
playboi.intro();
frank.intro();


class Car {
  constructor(year, make, model, color) {
    this.year = name;
    this.make = make;
    this.model = model;
    this.color = color;
  }

  drive(){
    console.log('Vroom');
  }
  intro() {
    console.log('This car is a ' + this.make + ' ' + this.model);
  }
}

let tesla = new Car(2020, 'Tesla', 'Model S', 'red');
console.log(tesla)
tesla.drive();
tesla.intro();

class GithubProfile{
  constructor(username, name, url) {
    this.username = username;
    this.name = name;
    this.url = url;
  }
  intro() {
    console.log(`My name is ${this.name} and my username is @${this.username}`)
  }
}

fetch('https://api.github.com/users/rohunvora')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  let githubURL = data.url;
  let githubUsername = data.login;
  let githubName = data.name;

  let rohun = new GithubProfile(githubUsername, githubName, githubURL);
  rohun.intro();
});

let isMomHappy = false;
// Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             // let reason = new Error('mom is not happy');
//             reject("Mom is not happy"); // reject
//         }
//     }
// );
let willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'iPhone',
      color: 'red'
    }
    resolve(phone);
  }
  else {
    reject('No phone');
  }
})
// console.log(willIGetNewPhone);
willIGetNewPhone.then(result => {
  console.log(result);
});
