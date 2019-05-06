/* 

Higher Order Function ==>
    # filter();
    # map();
    # reduce();
    # sort();

Curtecy : FunFunFunction.
*/


/* 
    Filter Function ==>
*/
// Traditional way using loop
var animals = [
    {name:'Tommy' , specis:'Dog'},
    {name:'Pussy' , specis:'Cat'},
    {name:'Flying Bird' , specis:'Pigeon'},
    {name:'Horn Fish' , specis:'Fish'},
    {name:'Shark' , specis:'Fish'},
    {name:'Dove' , specis:'Bird'},
    {name:'Cocatails' , specis:'Bird'}
];
var newAnimal = [];
for (var i = 0; i<animals.length; i++){
    if(animals[i].name === "Shark") {
        newAnimal.push(animals[i]);
    }
};
console.log(newAnimal);

// using ==> filter function <==

var anotherContainer = animals.filter(function(animalName){
    return animalName.name === "Dove";
});
console.log(anotherContainer);
