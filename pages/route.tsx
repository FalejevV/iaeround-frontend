import { useRouter } from 'next/router';
import routeData from "../routeData";
import { useEffect, useState } from 'react';
import { IRoute } from '../interface';
import { Stat, StatSVG, RouteContainer, RouteDate, RouteInfo, RouteStats, RouteTitle, TopSectionContainer, StatText, RouteAbout, RouteTags } from '../styles/route.styled';
import GallerySlider from '../components/GallerySlider/GallerySlider';
import Tag from '../components/Tag/Tag';

function RoutePage(){
    let [routeFetch,setRouteFetch] = useState<IRoute>();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if(id){
            setRouteFetch(routeData[parseInt(id[0])-1]);
        }
    }, [id]);

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

                        <RouteTags>{routeFetch.tags.map((tag:string) => <Tag title={tag}/>)}</RouteTags>
                    </RouteInfo>
                </TopSectionContainer>
            </RouteContainer>
        }
        </>
    )
}

export default RoutePage;