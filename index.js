// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// 1 pass, 8 to go

function destructivelyAppendCat() {
    cats.push("Ralph");
}
// 2 pass, 7 to go

function destructivelyPrependCat() {
    cats.unshift("Bob");
}
// 3 down, 6 left

function destructivelyRemoveLastCat() {
    cats.pop();
}
// 4 pass, 5 to go

function destructivelyRemoveFirstCat() {
    cats.shift();
}
// 5 down, 4 left

function appendCat(name) {
 //   cats.push(name);
 return [...cats, name];
 }
 // 6 down, 3 left

function prependCat(name) {
    return [name, ...cats];
}
//7 down, 2 left

function removeLastCat() {
    return cats.slice(0, cats.length-1);
}
//8 down

function removeFirstCat() {
    return cats.slice(1);
}
//done