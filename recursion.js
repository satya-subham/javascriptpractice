function x(num){
    console.log("Hello World");
    if(num<10){
        return x(num+1)
    }
}
x(0);