// non primitive -> array, object,function made from primitive types
// fun defination use function keyword
function sol(){
    console.log("pepcoding")
}
// fun call to run 
sol();
//even we can pass variable,string,array anything also
sol(10);
sol("hello")
sol([1,2,3,4])
// to receive all this in sol function we use param where param means any type of parameter
function acceptall(param)
{
    console.log(param)
}
acceptall(10)
acceptall("hey")
acceptall([1,2,3,4])
// so here no return type defined required here ,can do anything with param keyword


// Variables which are defined outside of a function block have Global scope.
//Variables which are declared anywhere without the var/let keyword are automatically created in the global scope 


