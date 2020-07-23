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
