import { OrderBy } from "./enum";

export interface IToggle{
    toggle?:boolean;
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
    owner_id:string,
}

export interface IRouteFiltering{
    search:string,
    tags:string[],
    orderBy:OrderBy,
}