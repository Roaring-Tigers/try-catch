
try{
    a = 10
    console.log(a)
}
catch(err){
    // console.log(err.stack)
    // console.log(err.name)
    console.log(err.message)
}
finally{
    console.log("Finally block executed")
}