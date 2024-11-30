export function isUserLoggedIn(){
    const loggedInData = JSON.parse(localStorage.getItem('user'));

    if(loggedInData?.accessToken){
        return true
    }
    return false
}

export function isInRange(number, min, max){
    min = parseFloat(min);
    max = parseFloat(max);
    number = parseFloat(number);

    if(number >= min && number <= max){
        return true;
    }

    return false;
}