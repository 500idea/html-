// function addsum(num){
//     let add = 0;
//     for(let i in num){
//         add = add + num[i];
//     }
//     return add;
// }
// var a = [1,2,3,4];
// var b = addsum(a);
// console.log(b);


var myFunc = makeFunc();
myFunc();

function makeFunc() {
    var name = "Mozilla";
    var namearray = Array.from(name);
    function displayName() {
        console.log(namearray);
    }
    return displayName;
}

