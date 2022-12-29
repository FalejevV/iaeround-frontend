import { useRouter } from "next/router";
import Fetching from "../Fetching";
import { IRoute } from "../interface";



function RouteSettings(props:{
    route:IRoute,
    auth:any
}){
    console.log(props);
    return(
        <>
            
        </>
    )

}

export default RouteSettings;


export async function getServerSideProps(context: { query: { id: any; }; }) {
    let id = context.query.id;
    if(id !== undefined && id && id !== ""){
        let authFetch = await Fetching.checkAuth();
        return{
            props: {
                route: null,
                auth:authFetch
            },
        }
    }
    return{
        props: {
            route: null,
            auth:"-1"
        },
    }
}