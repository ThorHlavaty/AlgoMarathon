function leapYear(year) {
    if (year % 4 === 0){
        return true
    }
    else if (year === 0){
        return true
    }
    else {
        return false
    }
}