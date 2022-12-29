import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IProfile, IRoute } from '../interface';
import { Stat, StatSVG, RouteContainer, RouteInfo, RouteStats, RouteTitle, TopSectionContainer, StatText, RouteAbout, RouteTags, DownloadAndLikesContainer, DownloadButton, DownloadSVG, GPXTip, DownloadContainer, RouteInfoLikesSVG, RouteInfoLikesContainer, RouteInfoLikesText, SimmilarRoutesTitle, SimmilarRoutesContainer, LikeTimeAlert, EditRouteContainer, EditRouteSVG, EditRouteText } from '../styles/route.styled';
import GallerySlider from '../components/GallerySlider/GallerySlider';
import Tag from '../components/Tag/Tag';
import CardGrid from '../components/CardGrid/CardGrid';
import Fetching from '../Fetching';
import Cookies from 'js-cookie';
import LikeCounter from '../components/LikeCounter/LikeCounter';
import Auth from '../Auth';

function RoutePage(props:{
    routes:IRoute[],
}){
    const [routeFetch,setRouteFetch] = useState<IRoute>();
    const [filteredLikes, setFilteredLikes] = useState<Set<string>>();
    const [simmilarRoutes,setSimmilarRoutes] = useState<IRoute[]>([]);
    const [liked,setLiked] = useState<boolean | undefined>();
    const [likeDebounce, setLikeDebounce] = useState<Date>(new Date());
    const [likeAlert, setLikeAlert] = useState<boolean>(false);
    const router = useRouter();
    const { id } = router.query;
    const auth:IProfile = Auth.getAuth();

    function toggleLike(){
        if(liked !== undefined){
            let oldTime = likeDebounce.valueOf();
            let newTime = new Date().valueOf();
            if(routeFetch!== undefined && routeFetch.id && (newTime - oldTime > 2000)){
                setLikeAlert(false);
                if(liked){
                    Fetching.removeLike(routeFetch.id).then(data => {
                        if(data.status === "OK"){
                            setLikeDebounce(new Date());
                            setRouteFetch(prevRoute => {
                                if(prevRoute !== undefined){
                                    return ({
                                        ...prevRoute,
                                        likes:data.data
                                    })
                                }
                                return undefined;
                            });
                            }
                        }
                    );
                }else{
                    console.log("LIKE");
                    Fetching.addLike(routeFetch.id).then(data => {
                        if(data.status === "OK"){
                            setLikeDebounce(new Date());
                            setRouteFetch(prevRoute => {
                                if(prevRoute !== undefined){
                                    return ({
                                        ...prevRoute,
                                        likes:data.data
                                    })
                                }
                                return undefined;
                            });
                            }
                        }
                    );
                }
            }else{
                setLikeAlert(true);
            }
        }
    }

    useEffect(() => {
        const IAEAuth = Cookies.get("IAEAuth");
        if(IAEAuth && IAEAuth !== "" && routeFetch){
            let authJSON = JSON.parse(IAEAuth);
            if(routeFetch.likes.includes(authJSON.id)){
                setLiked(true);
            }else{
                setLiked(false);
            }
        }

        if(routeFetch !== undefined){
            let likeMap = new Set(routeFetch.likes);
            setFilteredLikes(likeMap);
        }

    }, [routeFetch])

    useEffect(() => {
        if(props.routes.length > 0){
            setRouteFetch(() => {
                let searchRoute = props.routes.filter((route:IRoute) => route.id === id);
                if(searchRoute){
                    return searchRoute[0];
                }
            });
        }
    }, [id]);

    useEffect(() => {
        if(routeFetch && routeFetch.tags){
            findSimmilarRoutes();
        }
    },[routeFetch, id]);

    function getRoutes(){
        if(simmilarRoutes.length > 0){
            return <CardGrid data={simmilarRoutes} displayAmount={3} incrementDisplayAmountBy={3} filterable={false} removePadding={true} />
        }else{
            return <p>Nothing found</p>
        }
    }

    function findSimmilarRoutes(){
        if(routeFetch && routeFetch.tags && props.routes && props.routes.length > 0){
            let routeHaveMultipleSameTags:IRoute[] = []
            
            props.routes.forEach((route:IRoute) => {
                let tagsCounter = 0;
                routeFetch.tags.forEach(tag => {
                    if(route.tags.includes(tag)){
                        tagsCounter += 1;
                    }
                })
                if(tagsCounter >= 2 && route.id !== routeFetch.id){
                    routeHaveMultipleSameTags.push(route);
                }
            });
            if(routeHaveMultipleSameTags.length === 0){
                setSimmilarRoutes([]);
            }else{
                setSimmilarRoutes(routeHaveMultipleSameTags);
            }
        }
    }

    return(
        <>
        {routeFetch && routeFetch?.images && 
            <RouteContainer>
                <TopSectionContainer>
                    <GallerySlider id={routeFetch.id} images={routeFetch?.images || [""]} />
                    <RouteInfo>
                        {routeFetch.owner_id === auth.id && 
                            <EditRouteContainer href={"/route-settings?id="+id}>
                                <EditRouteText>Edit route</EditRouteText>
                                    <EditRouteSVG viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"/><path d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                </EditRouteSVG>
                            </EditRouteContainer>
                        }

                        <RouteTitle>{routeFetch.title}</RouteTitle>
                        <RouteStats>
                            <Stat>
                                <StatSVG viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 1 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5-4-5h3zm15-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                </StatSVG>
                                <StatText>{routeFetch.distance}km</StatText>
                            </Stat>

                            <Stat>
                                <StatSVG viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"></path>
                                </StatSVG>
                                <StatText>{routeFetch.time}min</StatText>
                            </Stat>
                        </RouteStats>

                        <RouteAbout>{routeFetch.about}</RouteAbout>

                        <RouteTags>{routeFetch.tags.map((tag:string, index:number) => <Tag key={index} title={tag}/>)}</RouteTags>

                        <DownloadAndLikesContainer>
                            <DownloadContainer>
                                <DownloadButton>
                                    <DownloadSVG viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"/>
                                    </DownloadSVG>
                                    Download GPX
                                </DownloadButton>
                                <GPXTip>i</GPXTip>
                            </DownloadContainer>
                            <RouteInfoLikesContainer onClick={toggleLike}>
                                {filteredLikes !== undefined && liked !== undefined && <LikeCounter likes={filteredLikes} userLiked={liked} onClick={toggleLike} svgSize={"28px"} fontSize={"18px"}/>}
                                {likeAlert && <LikeTimeAlert>Please wait couple seconds :P</LikeTimeAlert>}
                            </RouteInfoLikesContainer>
                        </DownloadAndLikesContainer>
                    </RouteInfo>
                </TopSectionContainer>

                <SimmilarRoutesContainer>
                    <SimmilarRoutesTitle>You may also like</SimmilarRoutesTitle>
                    {getRoutes()}
                </SimmilarRoutesContainer>
            </RouteContainer>
        }
        </>
    )
}

export default RoutePage;



export async function getServerSideProps() {
    let fetch = await Fetching.getAllRoutes().then(res => res.json());
    return {
      props: {
        routes: fetch.data,
      },
    }
}
  