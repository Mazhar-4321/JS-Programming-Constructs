function numberInWords( n){
    let s="";
    switch(n){
        case 0:s="Zero";break;
        case 1:s="One";break;
        case 2:s="Two";break;
        case 3:s="Three";break;
        case 4:s="Four";break;
        case 5:s="Five";break;
        case 6:s="Six";break;
        case 7:s="Seven";break;
        case 8:s="Eight";break;
        case 9:s="Nine";break;
        default:s="Invalid";
    }
    console.log(s);
}
function monthNameOfANumber( n){
    switch (n){
        case 1 : return "January";
        case 2 : return "Februaru";
        case 3 : return "March";
        case 4 : return "April";
        case 5 : return "May";
        case 6 : return "June";
        case 7 : return "July";
        case 8 : return "August";
        case 9 : return "September";
        case 10 : return "October";
        case 11 : return "November";
        case 12 : return "December";
        default:return "Invalid Number";
    }
}
function getCalendar(){
    return new Date();
}