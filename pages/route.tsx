import { useRouter } from 'next/router';
import routeData from "../routeData";
import { useEffect, useState } from 'react';
import { IRoute } from '../interface';
import { Stat, StatSVG, RouteContainer, RouteDate, RouteInfo, RouteStats, RouteTitle, TopSectionContainer, StatText, RouteAbout, RouteTags, DownloadAndLikesContainer, DownloadButton, DownloadSVG, GPXTip, DownloadContainer, RouteInfoLikesSVG, RouteInfoLikesContainer, RouteInfoLikesText, LikeFillPath, SimmilarRoutesTitle } from '../styles/route.styled';
import GallerySlider from '../components/GallerySlider/GallerySlider';
import Tag from '../components/Tag/Tag';
import CardGrid from '../components/CardGrid/CardGrid';

function RoutePage(){
    const [routeFetch,setRouteFetch] = useState<IRoute>();
    const [userLiked, setUserLiked] = useState<boolean>(false);
    const [simmilarRoutes,setSimmilarRoutes] = useState<IRoute[]>([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if(id){
            setRouteFetch(routeData[parseInt(id[0])-1]);
        }
    }, [id]);

    function toggleLike(){
        if(routeFetch && routeFetch.id){
            setUserLiked(prev=> !prev);
        }
    }

    useEffect(() => {
        if(routeFetch && routeFetch.tags){
            findSimmilarRoutes();
        }
    },[routeFetch, id]);

    function findSimmilarRoutes(){
        if(routeFetch && routeFetch.tags){
            let routeHaveMultipleSameTags:IRoute[] = []
            
            routeData.forEach((route:IRoute) => {
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
            console.log(routeHaveMultipleSameTags);
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
                    <GallerySlider images={routeFetch?.images || [""]} />
                    <RouteInfo>
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
                                <RouteInfoLikesSVG viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0H24V24H0z"></path><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                    <LikeFillPath toggle={userLiked} d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"/>
                                </RouteInfoLikesSVG>
                                <RouteInfoLikesText>{routeFetch.likes.length}</RouteInfoLikesText>
                            </RouteInfoLikesContainer>
                        </DownloadAndLikesContainer>
                    </RouteInfo>
                </TopSectionContainer>

                <SimmilarRoutesTitle>You may also like</SimmilarRoutesTitle>
                {simmilarRoutes.length > 0 ? 
                    <CardGrid data={simmilarRoutes} displayAmount={3} filterable={false} incrementDisplayAmountBy={3} removePadding={true} />
                    :
                    <SimmilarRoutesTitle>Nothing :/</SimmilarRoutesTitle>
                }
            </RouteContainer>
        }
        </>
    )
}

export default RoutePage;