const val1 = Math.floor(Math.random() * 10) + 100;
const val2 = Math.floor(Math.random() * 10) + 100;
const val3 = Math.floor(Math.random() * 10) + 100;
const val4 = Math.floor(Math.random() * 10) + 100;
const val5 = Math.floor(Math.random() * 10) + 100;
console.log(Math.max(val5, Math.max(val4, Math.max(val3, Math.max(val1, val2)))))
console.log(Math.min(val5, Math.min(val4, Math.min(val3, Math.min(val1, val2)))))
console.log(5,7)
console.log(leapYear(2002))
function checkDateBetweenMarch20AndJune20(d, m) {
    if (m < 3 || m > 6) {
        return false;
    }
    if (m == 3 && d < 20) {
        return false;
    }
    if (m == 3 && d > 31) {
        return false;
    }
    if (m == 3 && (d >= 20 && d <= 31)) {
        return true;
    }
    if ((m == 4 || m == 5 || m == 6) && (d > 0 && d <= 30))
        return true;
    return false;
}
function leapYear( year){
    if(year<1582){
        return false;
    }
    else{
        if(year%400==0){
            return true;
        }else{
            if(year%4==0&&year%100==0){
                return true;
            }else{
                return false;
            }
        }
    }
}