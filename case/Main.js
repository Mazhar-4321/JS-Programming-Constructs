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