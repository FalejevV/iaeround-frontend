export const cloudLink = "https://storage.googleapis.com/iaeround";
export const cloudImageLink = "https://storage.googleapis.com/iaeround/img";
export const cloudAvatarLink = "https://storage.googleapis.com/iaeround/avatar";
class Fetching{
    fetchAddress = true ? "https://octopus-app-rmug8.ondigitalocean.app/api" : "http://localhost:5000/api";
    

    async getAllRoutes(){
        let fetching = fetch(this.fetchAddress + "/routes", {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                },
                credentials: 'include'
            });
        return fetching;
    }


    async login(data:string[]){
        let fetching = await fetch(this.fetchAddress + "/auth/login", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            return data.status;
        });
        return fetching;
    }


    async register(data:string[]){
        let fetching = await fetch(this.fetchAddress + "/auth/register", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            return data.status;
        });
        return fetching;
    }

    async logout(){
        let fetching = await fetch(this.fetchAddress + "/auth/logout", {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        }).then(res => res.json()).then(data => {
            return data.status;
        });
        return fetching;
    }
}


export default  new Fetching();