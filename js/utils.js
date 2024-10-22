export function isUserLoggedIn(){
    const loggedInData = JSON.parse(localStorage.getItem('user'));

    if(loggedInData?.accessToken){
        return true
    }
    return false
}