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

var person=(girl,man)=>`Hello, ${girl} and ${man}`
console.log(person("Seda","Mert"))
