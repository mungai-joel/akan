function input(){
     
    var  birthYear= parseInt(document.getElementById("birthyear").value);
    
    var birthCentury = parseInt(document.getElementById("birthcentury").value);
    
    var birthMonth =parseInt(document.getElementById("birthmonth").value);
    
    var birthDate = parseInt(document.getElementById("birthdate").value);
    
    var generate = parseInt(((birthCentury/4)-2*birthCentury-1)+((5*birthYear/4)) + ((26*(birthMonth+1)/10))+birthDate)%7;
    
    var gender1 = document.getElementById("gender");
    
    var gender2 = document.getElementById("gender1");
    
    var maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
    var femaleNames =["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    
    var day = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];
    
    var dateofbirth = Math.floor(generate);

    var listofDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    console.log(dayofbirth);
    //var leapyear = ((birthyear % 4) && (birthyear % 100) || !(birthyear % 400));
    
    
    var mName = maleNames[dayofbirth - 1];
        var days = day[dayofbirth - 1];


    var fName = femaleNames[dayofbirth - 1];
        var days =day[dayofbirth - 1];


    if (gender1.checked === true) {



        document.getElementById("result").innerHTML(" Since you were born on " + days + " Your name is " + mName);
     
           }
    else if (gender2.checked === true) {
     
     
        document.getElementById("result").innerHTML=(" Since you were born on " + days + " Your name is " + fName);
           };
     
             if(birthMonth == 1 || birthMonth > 2){
                 if(birthDate > listofDays[birthMonth - 1]){
                    alert('invalid date');
                     return false;
                 };
             };
     
             if (birthMonth == 2){
                 var leapyear = false;
                 if ((!(birthYear % 4) && birthYear % 100) || !(birthYear % 400)){
                     leapyear = true;
                 }
                 if ((leapyear == true) && (birthDate > 29)){
                     alert('invalid date format');
                     return false;
                 }
             }
     
         };
     
     
};