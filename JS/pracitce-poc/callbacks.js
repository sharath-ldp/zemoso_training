//synchronous example for call-back

// I am making myForEach using a call back 'cb'
const names = ['Sharath', 'Lavanya', 'SriVyshnavi']
const myForEach = (names,cb)=>{
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        cb(element)
    }
}

myForEach(names,(name)=>{
    console.log(name)
})

//asynchronous example for call-back

setTimeout(()=>console.log("I am visibile after 5000 milli seconds"),5000)
