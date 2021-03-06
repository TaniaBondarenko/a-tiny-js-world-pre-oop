/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const inhabitants = [];
inhabitants.push({
  species: 'cat',
  name: 'Toby',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'Meow! Feed me!',
  friends: "no one"
});

  inhabitants.push({
    species: 'dog',
    name: 'Rex',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Woof-woof!',
    friends: ""
  });

inhabitants.push( {
  species: 'human',
  name: 'Bill',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'Hi!',
  friends: ""
});

inhabitants.push( {
  species: 'human',
  name: 'Beverly',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: "What a nice day!",
  friends: ""
});

inhabitants.push( {
  species: 'cat-Woman',
  name: 'Maggie',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: inhabitants[0].saying,
  friends: ""
});

inhabitants[1].friends+=`${inhabitants[2].name}, ${inhabitants[3].name}`;
inhabitants[2].friends += `${inhabitants[3].name}, ${inhabitants[0].name} - a ${inhabitants[0].species}`;
inhabitants[3].friends += `${inhabitants[1].name} - a ${inhabitants[1].species}`;
inhabitants[4].friends += `${inhabitants[0].name} - a ${inhabitants[0].species}`;

inhabitants.forEach(myFoo);
function myFoo(obj) {
  print(`${obj.species}; ${obj.name}; ${obj.gender}; ${obj.legs}; ${obj.hands}; ${obj.saying}; ${obj.friends}`);
};




// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


