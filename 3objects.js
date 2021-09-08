// objects in python called dictionary
// objects in java called hash map but in java it is static
// object -> is group of key or  value pair

//declare object
let obj ={  }

//how define values in object 
//key : value -> method to write value in a object
// if key ke samne value hai then called property  key: value -> property
//if key ke samne function hai then called method  key :func -> method

let captain ={
    name : "Steve",
    lastname : "Rogers" ,
    address : {                //here object ke andar object -> cap is a object which
        city :"Manhatten" ,                  // has some properties name,lastnamme etc
        state : "New York"                  //cap object ke andar address object.
    } ,
    age : 145 ,
    isAvenger : true ,
    movies :["First avanger", "winter solier", "civil war"] ,

    sayhi : function () {                   //this a function sayhi inside object cap
        console.log("cap is alive")
    }



}
// get from object
// how to access these key and values, method of a object
// call by object name + dot operator + key
console.log(captain.name)
console.log(captain.address.city)
console.log(captain.movies[1])
captain.sayhi();

console.log("captain :", captain) // how to get all data of a object

// SET or Update any key's value 
// or to add new key

captain.age =155            // changes age
captain.isAvenger = false
captain.friends =["Tony Stark","Bruce Banner","Thor"] //add new key
console.log(captain.xyz)     // there is no key like this so in that case we get o/p as UNDEFINED
console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
console.log("captain :", captain)  // getting object after changes

// delete a key or value
delete captain.address              // delete address key from object
console.log("captain :",captain)    // this method show all data of object captain


/*Sometimes it is useful to check if the property of a given object exists or not. 
We can use the .hasOwnProperty(propname) method of objects to determine if that object has the 
given property name. .hasOwnProperty() returns true or false if the property is found or not.*/
console.log( captain.hasOwnProperty("gender"));  // this will return false

// we have two more method to get all data of object one by one by using for loop
//method 1->
for(let key in captain){
    console.log(key ,":",captain[key])    
}

// method 2
let newkey ="age"
console.log(captain[newkey]) // by this method we can get any key,values of object
console.log(captain.age) 
//diff bw above 2 console statement is use of [] square bracket in console 1 statement is sq bracket replaces value with variable inside it & then search it
//where as console 2 statement uses . dot operator that takes age as value & search directly
console.log(captain["age"]) //

// above all 3 console statement print same same output 
//only you have to know all getting methods

// do object questions from sheet they are very imp