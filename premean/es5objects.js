var person = {name:'bob'}

//factory objects

function peopleFactory(name){
    return {name:name}
}
var carl = peopleFactory('carl')
console.log(person,carl)

//functional objects

function Person(name){
    this.name = name
}
var nick = new Person('nick')
console.log(nick)