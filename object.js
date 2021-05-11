const person = {
    speak: function() {
        console.log("My name is John Doe");
    },
    firstname: "Anders",
    lastname: "Andersson",
    pet: {
        type: "dog",
        name: "Boo"
        speak: function() {
            console.log("woof woof");
        },
        getFood: function () {
            return { type: "bone"};
        }
    }
};

console.log(person.pet.getFood().type);

console.log(person.pet.name);
console.log(person.pet);
console.log(person.pet.type);

person.speak();

console.log(person.firstname);
console.log(person.lastname);