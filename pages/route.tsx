import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IProfile, IRoute } from '../interface';
import { Stat, StatSVG, RouteContainer, RouteInfo, RouteStats, RouteTitle, TopSectionContainer, StatText, RouteAbout, RouteTags, DownloadAndLikesContainer, DownloadButton, DownloadSVG, GPXTip, DownloadContainer, RouteInfoLikesSVG, RouteInfoLikesContainer, RouteInfoLikesText, SimmilarRoutesTitle, SimmilarRoutesContainer, LikeTimeAlert, RouteAthor } from '../styles/route.styled';
import GallerySlider from '../components/GallerySlider/GallerySlider';
import Tag from '../components/Tag/Tag';
import CardGrid from '../components/CardGrid/CardGrid';
import Fetching, { cloudLink } from '../Fetching';
import Cookies from 'js-cookie';
import LikeCounter from '../components/LikeCounter/LikeCounter';
import Auth from '../Auth';
import EditButton from '../components/EditButton/EditButton';
import GPXHelpWindow from '../components/GPXHelpWindow/GPXHelpWindow';

function RoutePage(props:{
    routes:IRoute[],
}){
    const [routeFetch,setRouteFetch] = useState<IRoute>();
    const [filteredLikes, setFilteredLikes] = useState<Set<string>>();
    const [simmilarRoutes,setSimmilarRoutes] = useState<IRoute[]>([]);
    const [liked,setLiked] = useState<boolean | undefined>(false);
    const [likeDebounce, setLikeDebounce] = useState<Date>(new Date());
    const [toggleGPXHelp, setToggleGPXHelp] = useState<boolean>(false);
    const [likeAlert, setLikeAlert] = useState<string>("");
    const router = useRouter();
    const { id } = router.query;
    const auth:IProfile = Auth.getAuth();
    const [author,setAuthor] = useState<string>();

    function toggleLike(){
        if(auth === undefined){
            setLikeAlert("You need to sign in to like routes");
            return;
        }
        
        if(liked !== undefined){
            let oldTime = likeDebounce.valueOf();
            let newTime = new Date().valueOf();
            if(routeFetch!== undefined && routeFetch.id && (newTime - oldTime > 2000)){
                setLikeAlert("");
                if(liked){
                    Fetching.removeLike(routeFetch.id).then(data => {
                        if(data.status === "OK"){
                            setLikeDebounce(new Date());
                            setRouteFetch(prevRoute => {
                                if(prevRoute !== undefined){
                                    console.log(data.data);
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
                    Fetching.addLike(routeFetch.id).then(data => {
                        if(data.status === "OK"){
                            setLikeDebounce(new Date());
                            setRouteFetch(prevRoute => {
                                if(prevRoute !== undefined){
                                    console.log(data.data);
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
                setLikeAlert("Please wait couple seconds");
            }
        }
    }

    useEffect(() => {
        if(toggleGPXHelp){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    },[toggleGPXHelp]);
    
    useEffect(() => {
        const IAEAuth = Cookies.get("IAEAuth");
        if(IAEAuth && IAEAuth !== "" && routeFetch){
            let authJSON = JSON.parse(IAEAuth);
            if(routeFetch.likes.includes(authJSON.id)){
                setLiked(true);
            }else{
                setLiked(false);
            }
        }else{
            setLiked(false);
        }

        if(routeFetch !== undefined){
            let likeMap = new Set(routeFetch.likes);
            console.log(likeMap);
            setFilteredLikes(likeMap);

            Fetching.getUser(routeFetch.owner_id).then(res => res.json()).then((data:IProfile) => setAuthor(data.name));
        }
    }, [routeFetch]);

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
        {toggleGPXHelp && <GPXHelpWindow setToggle={setToggleGPXHelp} />}
        {routeFetch && routeFetch?.images && 
            <RouteContainer>
                <TopSectionContainer>
                    <GallerySlider id={routeFetch.id} images={routeFetch?.images || [""]} />
                    <RouteInfo>
                        {auth !== undefined && routeFetch.owner_id === auth.id && 
                            <EditButton link={"/route-settings?id="+id}  text="Edit route"/>
                        }

                        <RouteTitle>{routeFetch.title}</RouteTitle>
                        <RouteAthor href={"/profile/" + routeFetch.owner_id}>Author: {author}</RouteAthor>
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
                            {routeFetch && routeFetch?.gpx?.trim() !== "" && 
                                 <DownloadContainer>
                                    <DownloadButton href={`${cloudLink}/gpx/${routeFetch.id}/${routeFetch.gpx}`} download>
                                        <DownloadSVG viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"/>
                                        </DownloadSVG>
                                        Download GPX
                                    </DownloadButton>
                                    <GPXTip onClick={() => setToggleGPXHelp(true)}>i</GPXTip>
                                </DownloadContainer>
                            }
                            <RouteInfoLikesContainer onClick={toggleLike}>
                                {filteredLikes !== undefined && liked !== undefined && <LikeCounter likes={filteredLikes} userLiked={liked} onClick={toggleLike} svgSize={"28px"} fontSize={"18px"}/>}
                                {likeAlert.trim() !== "" && <LikeTimeAlert>{likeAlert}</LikeTimeAlert>}
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
  