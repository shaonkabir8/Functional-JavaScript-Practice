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
    {name:'Tommy' ,      species:'Dog'},
    {name:'Pussy' ,      species:'Cat'},
    {name:'Flying Bird', species:'Pigeon'},
    {name:'Horn Fish' ,  species:'Fish'},
    {name:'Shark' ,      species:'Fish'},
    {name:'Dove' ,       species:'Bird'},
    {name:'Cocatails' ,  species:'Bird'}
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



/* 
    Map Function ==>
*/
// copying the exist array to avoid conflect with others.
var animalsArr = animals.slice(0);

// If we just need the names of this arr - animals,
var mapFunctionExample = [];
for (var i = 0; i<animalsArr.length; i++){
    mapFunctionExample.push(animalsArr[i].name);
};
console.log(mapFunctionExample);
console.log(animalsArr)

// using Map Function ==>
var mapFunctionContainer = animalsArr.map(function(animalsArrName){
    return animalsArrName.name;
});
console.log(mapFunctionContainer);
