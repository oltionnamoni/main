var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti_id");

button.onclick= function(){
    text.innerHTML = input.value;
}

//var text= "The best school in the world is Digital School";
//var result = text.search("Digital School");
//document.getElementById("result1").innerHTML.result;


//var text= "The best school in the world is Digital School";
//var result = text.(/Digital School/);
//document.getElementById("result2").innerHTML=result;


//var text= "The best school in the world is Digital School";
//var result = text.(/Digital School/,"Another School");
//document.getElementById("result2").innerHTML=result;

//var text= "abcdef";
//var regex=new RegExp('abc');
//document.getElementById("result4").innerHTML=regex.test(text);

//var text ="My school is the best school in the world";
//var regex= /school/g;
//document.getElementById("result5").innerHTML=text.match(regex);

//var text="Digital school is the best school in the world"
//var regex= /i/g;
//document.getElementById("result6").innerHTML=text.matches(regex);

//var text="Digital school is the best school in the world"
// var regex= /[abc]/g;
//document.getElementById("result7").innerHTML=text.match(regex);

//var text="Digital school is the best school in the world"
//var regex= /[0-9]/g;
//document.getElementById("result9").innerHTML=text.match(regex);

//var text="Digital school is the best school in the world";
//var regex= /(top|best|school)/g;
//document.getelementByld("result9").innerHTML=text.match(regex);

//var text="100 percent";
//varregex=/\d/g;
//document.getElementById("result10").innerHTML=text.match(regex);

//var text="My school is the best school in the world";
//var regex=/\d/g;
//document.getElementById("result11").innerHTML=text.match(regex);


//var text="hey, hi, hiii";
//var regex=/h1?/g;
//document.getElementById("result14").innerHTML=text.match(regex);

//var text="hello, helloo, hellooo";
//var regex=/o{3}/g;
//document.getElementById("result15").innerHTML=text.match(regex);

var text="hello,helloo, hellooo";
var regex=/o{3}/g;
document.getElementById("result16").innerHTML=text.match(regex);

var text="bestfriend, boyfriend, girlfriend";
var regex=/end$/g;
document.getElementById("result17").innerHTML=text.match(regex); 