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
    
    var day = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"]
    
    var dateofbirth = Math.floor(generate);
        
        alert("its " + dateofbirth);
    
    var mName = maleNames[dateofbirth - 1];
        var days = day[dateofbirth - 1];


    var fName = femaleNames[dateofbirth - 1];
        var days =[dateofbirth - 1];
}