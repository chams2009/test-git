const pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type:`dog`, bornOn: 2016 }
];

const getAge = pet => {return new Date().getFullYear() - pet.bornOn;}

let petWithAge = pets.map (pet =>{
  pet.age=getAge(pet);
  return pet;
})
console.log(petWithAge);

let dogs = pets.filter( pet =>  (pet.type ==="dog"));
console.log(dogs, 'dogs');

let Jasper = pets.find( pet => ( pet.name === "Jasper"));
console.log(`Jasper is ${Jasper.age} years old`);
