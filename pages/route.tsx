import { useRouter } from 'next/router';
import routeData from "../routeData";
import { useEffect, useState } from 'react';
import { IRoute } from '../interface';
import { RouteContainer, TopSectionContainer } from '../styles/route.styled';
import GallerySlider from '../components/GallerySlider/GallerySlider';

function RoutePage(){
    let [routeFetch,setRouteFetch] = useState<IRoute>();
    const router = useRouter();
    const { id } = router.query;
    if(id && id.length > 0 && routeFetch === undefined){
        setRouteFetch(routeData[parseInt(id[0])]);
    }

    return(
        <>
        {routeFetch && routeFetch?.images && 
            <RouteContainer>
                <TopSectionContainer>
                    <GallerySlider images={routeFetch?.images || [""]} />
                </TopSectionContainer>
            </RouteContainer>
        }
        </>
    )
}

export default RoutePage;