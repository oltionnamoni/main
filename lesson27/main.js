function showMessage(){
    alert("This message is inside the funktion");
}

showMessage();

function sum(number1,number2){
    return number1 + number2;
}

console,log(sum(25,5));

function dsfunction(){
    var localvar = "Digital School"
    alert(lovalVar);
}
dsfunction();


function toCelecius(f){
    return(5/9) * (f=32);
}
console.log("54 fahrebheit is equal to" + toCelecius(54)+"celcius");

var result=toCelecius(54);
console.log("54 fahrebheit is equal to" + toCelecius(54)+"celcius");

function toSeconds(minutes){
    return minutes * 60;
}
console.log(toseconds(60));


var car= {
    name:"Mercedes",
    color:"White",
    year:2020,
    kilometres:0,
    startEngine : function() {
        alert("testtt");
    },

    get getkilometres(){
        return this.kilometres;
    },
    set setKilometres(km){
        this.kilometres = km;
    }
};
console,log(car.getKilometers);

car.setKilometers=100;

console.log(car.getKilometers);


function Computer(name, CPU){
    this.name=name;
    this.CPU=CPU;
    this.RAM=RAM;
    this.GPU=GPU;
}
var computer1= new Computer("MacBook" , "MI 8-CORE", "8GB" , "5600m GPU");
var computer2= new Computer("dell", "MI 8-CORE", "8GB" , "5600m GPU");

