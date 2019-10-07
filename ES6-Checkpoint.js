var pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type:`dog`, bornOn: 2016 }
];

const getAge = (pet) => {
  return new Date().getFullYear() - pet.bornOn;
}

/* for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge.push(pet);
} */
var petsWithAge = [];
pets.forEach((val, index ) => {
  var pet = pets[index];
  pet.age = getAge(pet);
  petsWithAge.push(pet);
}) 
console.log(petsWithAge);

/* 
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.type === `dog`) {
    dogs.push(pet);
  }
}  */

var dogs = [];
pets.forEach((val, index ) => {
  var pet = pets[index];
  if (pet.type === `dog`) {
    dogs.push(pet);
  }
})
console.log(dogs);

/* for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === `Jasper`) {
    jasper = pet;
  }
} */

var jasper;
pets.forEach((val,index) => {
  var pet = pets[index];
  if (pet.name === `Jasper`) {
    jasper = pet;
  }
})
console.log(`Jasper is ${jasper.age} years old`);