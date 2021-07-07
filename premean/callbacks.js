function first(cb){
    console.log('i am first')
    // generates a 7
    result = 7
    return cb(result)   
}

function second(num){
    console.log('i am second')
    console.log('i am a callback')
    console.log('i was passed', num)
}

first(second)
