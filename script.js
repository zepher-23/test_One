// let array = [1,2,3,4,5]

// // for(let i=0;i<array.length;i++){
// //     console.log(array[i])
// // }

// let newArray = array.map(function (item){
//     return item * 2
// })

// // array.forEach(function(item){
// //     console.log(item*2)
// // })


// // let filtered = array.filter(function (item){return item == 2})
// // console.log(filtered);

// // array.push(6)

// let sum = array.reduce(function (accumulator, initialValue){
//     return accumulator + initialValue
// },2);



// var accumulator = 2
// for(i=0;i<array.length;i++){
//     accumulator = accumulator + array[i];
// }

// console.log(sum)
// // let popped = array.pop()
// // console.log(popped)






//Objects -----------------

//primitive data types
//number, string, boolean, null, undefined

//spcl primitive
//symbol - used to identify object values

//non

//object: {} empty object
//array
//functions
//dates
//regEx



let object = {
    name : "John",
    age : 35,
    isMarried : false,
    children : ["Mike","Sara"],
    job :{ 
        title :"Software Engineer",
        company : "Google"
    }
}



let bag = {
    space:'5 liters',
    items:[ 'laptop','phone','charger'],
    addItem: function(item){
        this.items.push(item)
    }
}


bag.addItem('Power Bank')
console.log(bag);




