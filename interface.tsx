import { OrderBy } from "./enum";

export interface IToggle{
    toggle?:boolean,
    selected?: boolean,
    success?:boolean,
}

export interface IRoute{
    id:string,
    title:string,
    distance:string,
    time:string,
    tags:string[],
    likes:string[],
    gpx:string,
    images:string[],
    date:string,
    owner_id:string,
    about:string,
}

export interface IRouteFiltering{
    search:string,
    tags:string[],
    orderBy:OrderBy,
}

export interface ICounter{
    count:number,
}

export interface IAuthForm{
    username:{
        value:string;
    },
    password:{
        value:string;
    },
    repassword:{
        value:string;
    },
    email:{
        value:string;
    }
}

export interface IProfile{
    id:string,
    login:string,
    name:string,
    about:string,
    avatar:string,
}

export interface ICreateRouteData{
    title:string,
    distance:number,
    time:number,
    about:string,
    gpx:File | string,
    images:File[],
    tags:string[],
    thumbnail:Blob
}

export interface IFullProfile{
    id:string,
    login:string,
    name:string,
    about:string,
    avatar:string,
    email:string,
}

export interface ILoginData{
    login:string,
    password:string,
}

export interface IRegisterData{
    login:string,
    password:string,
    rpassword:string,
    email:string,
}

export interface ISize{
    size:string
}

export interface ITag{
    title:string
}