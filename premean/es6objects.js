class Person {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`I am a fancy person named ${this.name}`)
    }
}

class MailMan extends Person{
    constructor(name,route){
        super(name)
        this._route = route
    }

    get route(){
        return this._route
    }

    set route(newroute){
        if(newroute.length > 7){
            this._route = newroute
        }
    }

    deliver(){
        console.log('headed out on my route: ' + this.route)
    }
    speak(){
        console.log('Good Morning Sir or Madaam')
        super.speak()
    }
}

var nick = new Person('nick')
var john = new Person('John')
var george = new MailMan('George','route 76')
george.route = 'route 1'
george.deliver()
george.speak()

