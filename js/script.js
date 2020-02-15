function myInput(){
     
    var  birthYear= parseInt(document.getElementById("birthyear").value);
    var birthCentury = parseInt(document.getElementById("birthcentury").value);
    var birthMonth =parseInt(document.getElementById("birthmonth").value);
    var birthDate = parseInt(document.getElementById("birthdate").value);
    var generate = (((birthCentury/4)-2*birthCentury-1)+((5*birthYear/4)) + ((26*(birthMonth+1)/10))+birthDate)%7;
}