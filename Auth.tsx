import Cookies from 'js-cookie';


class Auth{
    getAuth(){
        let authCookie = Cookies.get("IAEAuth");
        if(authCookie){
            return JSON.parse(authCookie);
        }
    }
}


export default new Auth();