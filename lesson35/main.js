function search(){
    var input,filter, ul, li, a, i, textValue;
    input = document.getElementByld("myInput");
    filter= input.value.toUpperCase();
    ul =document.getElementByld("myList");
    li =ul.getElementsByTagName("li");
    for(i-0; 1< li.length; i++){
        a=li[i];
        txtValue=a.textContent;
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display="block";
        }else{
            li[i].style.display="none";
        }
    }
}