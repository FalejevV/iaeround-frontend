import { ReactElement, useEffect, useState } from "react";
import { IRoute } from "../../interface";
import { GridContainer, GridWrapper, LoadMoreButton } from "./CardGrid.styled";
import RouteCard from "../RouteCard/RouteCard";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";


function CardGrid(props:{
    data:IRoute[],
    displayAmount:number,
    incrementDisplayAmountBy:number,
    filterable?: boolean;
}){
    const [routeCounter, setRouteCounter] = useState<number>(props.displayAmount);
    const [sortedRoutes, setSortedRoutes] = useState<IRoute[]>(props.data);

    const routeOrderBySelector = useAppSelector((state:RootState) => state.routeFiltering.orderBy);
    const routeSearchSelector = useAppSelector((state:RootState) => state.routeFiltering.search);
    const routeTagsSelector = useAppSelector((state:RootState) => state.routeFiltering.tags);

    console.log(routeOrderBySelector);
    console.log(routeSearchSelector);
    console.log(routeTagsSelector);

    function sortRoutes(){
        let filteredRoutesResult:IRoute[] = [];

        if(routeSearchSelector.trim() !== ""){
            filteredRoutesResult = props.data.filter((route:IRoute) => route.title.includes(routeSearchSelector.trim()));
        }else{
            filteredRoutesResult = props.data;
        }

        if(routeTagsSelector.length > 0){
            filteredRoutesResult = filteredRoutesResult.filter((route:IRoute) => {
                let tagsOK = true;
                routeTagsSelector.forEach(tag => {
                    if(!route.tags.includes(tag)){
                        tagsOK = false;
                    }
                })
                if(tagsOK){
                    return route;
                }
            })
        }

        setSortedRoutes(filteredRoutesResult);
    }

    function showRoutes(){
        return sortedRoutes.map((route, index) => {
            if((index + 1) > routeCounter){
                return undefined;
            }else{
                return <RouteCard data={route} key={index} />
            }
        })
    }

    useEffect(() => {
        sortRoutes()
    },[routeOrderBySelector,routeSearchSelector,routeTagsSelector])

    function showMoreRoutes(){
        if(routeCounter + props.incrementDisplayAmountBy > sortedRoutes.length){
            setRouteCounter(props.data.length);
        }else{
            setRouteCounter(prevRouteCounter => prevRouteCounter += props.incrementDisplayAmountBy);
        }
    }

    return(
        <GridWrapper>
            <GridContainer>
                {showRoutes()}
            </GridContainer>
            {sortedRoutes.length > routeCounter && sortedRoutes.length > 0 && <LoadMoreButton onClick={showMoreRoutes}>Load more</LoadMoreButton>}
        </GridWrapper>
    )
}

export default CardGrid;