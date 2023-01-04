import { ILoginData, IRegisterData } from "./interface";

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

    async getOneRoute(id:string){
        let fetching = fetch(this.fetchAddress + "/route/"+id, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        return fetching;
    }

    async getMyProfile(){
        let fetching = fetch(this.fetchAddress + "/userme", {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        return fetching;
    }

    async login(data:ILoginData){
        let fetching = await fetch(this.fetchAddress + "/auth/login", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            return {
                status:data.status,
                user:data.user
            };
        });
        return fetching;
    }


    async register(data:IRegisterData){
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

    async addLike(postID:string){
        let likeFetch =  await fetch(this.fetchAddress + "/route/routelike", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                action:"ADD",
                id:postID,
            })
        }).then(res => res.json()).then(data => {return data});
        return likeFetch
    }

    async removeLike(postID:string){
        return await fetch(this.fetchAddress + "/route/routelike", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                action:"REMOVE",
                id:postID,
            })
        }).then(res => res.json());
    }

    async checkAuth(){
        let fetching = await fetch(this.fetchAddress + "/auth/token-check", {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        }).then(res => res.json()).then(data => {
            return data.id;
        });
        return fetching;
    }

    async getTags(){
        let fetching = fetch(this.fetchAddress + "/tags", {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        return fetching;
    }

    async getUser(id:string){
        let fetching = fetch(this.fetchAddress + "/user/"+id, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        return fetching;
    }

    async updateRoute(data:{
        id:string,
        title:string,
        distance:string,
        time:string,
        about:string,
        tags:string[],
    }){
        let fetching = fetch(this.fetchAddress + "/route", {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body:JSON.stringify(data)
        });
        return fetching;
    }

    async removeRoute(id:string){
        let fetching = fetch(this.fetchAddress + "/route/"+id, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        return fetching;
    }
}


export default  new Fetching();