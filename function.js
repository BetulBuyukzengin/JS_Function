//          FUNCTIONS

function person(girl, man){
    return `Hello, ${girl} and ${man} `;
}
console.log(person("Betül","Kadir"))

/*******************************************/

var person=function(name,surname){
    return `Your's name: ${name} 
Your's surname: ${surname}`;
}
console.log(person("Aycan","Yılmaz"))

/*******************************************/
//     Fat Arrow Function (Arrow Function) ES6

var person=(girl,man)=>`Hello, ${girl} and ${man}`;
console.log(person("Seda","Mert"))

var animal=cat=>`Hi, ${cat}`;
console.log(animal("Siamese"))

/****************  ES5  *********************/
function operation(x,y){
    return x*y;
}
console.log(operation(2,4))
/***************** ES6 **********************/
var operation=(x,y)=>"x*y: "+ x*y;
console.log(operation(2,5))
