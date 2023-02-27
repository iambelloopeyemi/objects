/** 1. Using the constructor method, create an InstagramPost() constructor function
that takes the properties below as arguments:
 * Handle of author
 * content
 * An image link posted by the author of the post
 * Number of views
 * Number of likes
*/

function InstagramPost(
  handleOfAuthor,
  content,
  imageLink,
  numberOfViews,
  numberOfLikes
) {
  this.handleOfAuthor = handleOfAuthor;
  this.content = content;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}

/* 2. Create 2 Instagram post objects from the constructor function you created 
above
 */

const firstPost = new InstagramPost(
  "Opeyemi Bello",
  "Matriculation",
  "matriculation.bit.ly",
  "5,000,000",
  "10,000,000"
);
const secondPost = new InstagramPost(
  "Opeyemi Bello",
  "Graduation",
  "graduation.bit.ly",
  "10,000,000",
  "20,000,000"
);

console.log(firstPost);
console.log(secondPost);

/** 3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in
Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following
scores in his combination:
 * ENG - 70
 * GOVT - 85
 * LIT - 82
 * CRK - 94
*/

/* 3a. Using the factory method, implement a createPerson() factory function that 
takes name, age and location as arguments. Afterwards, create an object 
representing Musa from the factory function. 
*/

function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

/* 3b. Also, implement a factory function createJambScores() that takes eng, govt, lit, 
crk as arguments. Then create an object representing Musa’s JAMB scores. 
Add the object as a property to Musa object you created above in (a) above
 */

function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}

musa["results"] = createJambScores("70", "85", "82", "94");

console.log(musa);

/* 4. What are the different ways you can clone an object? Give examples for each 
of them
*/

// Option 1 - Using Object.assign()

const eplWinnerHistory1 = {
  winnerIn2021: "Liverpool",
};

console.log(eplWinnerHistory1);

const eplWinnerHistory2 = Object.assign({}, eplWinnerHistory1);
eplWinnerHistory2.winnerIn2020 = "Man city";

console.log(eplWinnerHistory2);

// Option 2 - Using spread syntax i.e, {...}

const eplWinnerHistory3 = { ...eplWinnerHistory1 };
eplWinnerHistory3.winnerIn2019 = "Man city";

console.log(eplWinnerHistory3);

// Option 3 - Using the method JSON.parse(JSON.stringify())

const eplWinnerHistory4 = JSON.parse(JSON.stringify(eplWinnerHistory1));
eplWinnerHistory4.winnerIn2018 = "Man city";

console.log(eplWinnerHistory4);

/* 5. As Nigeria goes to the polls, here is an object representing some 
of the Presidential Candidates:
*/

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

/*
Using any of the enumeration methods taught in class (for…in  or for..of), log 
out each of the presidential candidates in this format:
 * ’Omoyele Sowore is the presidential candidate of AAC’
*/

for (const key in presidentialCandidates) {
  console.log(
    `${presidentialCandidates[key]} Sowore is the presidential candidate of ${key}`
  );
}

for (let key of Object.keys(presidentialCandidates)) {
  console.log(
    `${presidentialCandidates[key]} Sowore is the presidential candidate of ${key}`
  );
}
