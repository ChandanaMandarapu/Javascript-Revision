// Template literals

let word1 = 'chandana';
let word2 = 'mandarapu';
let num1 = 2;
let num2 = 3;

const fullName = `${num1 + num2} ${word2}`;

console.log(fullName);

// Destructuring Objects

const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
  // console.log( player.address.city );
  
  const { name, club, address: { city } } = player;
  
  // console.log(`${name} plays for ${club}`);
  
  console.log(`${name} lives in ${city}`);
  
  const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}