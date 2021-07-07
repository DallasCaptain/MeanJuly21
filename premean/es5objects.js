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
    this.speak = function(){
        console.log(`Hello my name is ${this.name}`)
    }
}
var nick = new Person('nick')
var john = new Person('John')
nick.speak()
john.speak()
john.__proto__.newattr = 'hello'
console.log(john.__proto__)
console.log(nick.newattr)
console.log(Person.prototype)