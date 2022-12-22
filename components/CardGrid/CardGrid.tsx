import { ReactElement, useEffect, useState } from "react";
import { IRoute } from "../../interface";
import { GridContainer, GridWrapper, LoadMoreButton } from "./CardGrid.styled";
import RouteCard from "../RouteCard/RouteCard";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { OrderBy } from "../../enum";


function CardGrid(props:{
    data:IRoute[],
    displayAmount:number,
    incrementDisplayAmountBy:number,
    filterable?: boolean,
    removePadding?: boolean,
}){
    const [routeCounter, setRouteCounter] = useState<number>(props.displayAmount);
    const [sortedRoutes, setSortedRoutes] = useState<IRoute[]>([]);


    const routeOrderBySelector = useAppSelector((state:RootState) => state.routeFiltering.orderBy);
    const routeSearchSelector = useAppSelector((state:RootState) => state.routeFiltering.search);
    const routeTagsSelector = useAppSelector((state:RootState) => state.routeFiltering.tags);
    
    function filterRoutes(){
        if(props.filterable === false){
            setSortedRoutes(props.data);
            return;
        }
        let filteredArray:IRoute[] = [];
        if(routeSearchSelector.trim() !== ""){
            filteredArray = props.data.filter((route :IRoute) => route.title.toLowerCase().includes(routeSearchSelector.toLowerCase()));
        }
        if(routeTagsSelector.length > 0){
            let arrayToFilter:IRoute[] = props.data.map(item => item);
            if(filteredArray.length > 0){
                arrayToFilter = filteredArray;
            }
            filteredArray = arrayToFilter.filter((route:IRoute) => {
                if(routeTagsSelector.every(tag => {return route.tags.includes(tag)})){
                    return route;
                }
                return undefined;
            });
        }
        
        if(routeSearchSelector !== "" || routeTagsSelector.length > 0){
            if(filteredArray.length === 0){
                setSortedRoutes([]);
                return;
            }
        }

        if(filteredArray.length === 0){
            filteredArray = props.data.map(item => item);
        }
        if(routeOrderBySelector === OrderBy.NEW){
            setSortedRoutes(filteredArray.sort((a:IRoute,b:IRoute) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }));
        }

        if(routeOrderBySelector === OrderBy.OLD){
            setSortedRoutes(filteredArray.sort((a:IRoute,b:IRoute) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            }));
        }

        if(routeOrderBySelector === OrderBy.MOST_RATED){
            setSortedRoutes(filteredArray.sort((a:IRoute,b:IRoute) => {
                return b.likes.length - a.likes.length;
            }));
        }

        if(routeOrderBySelector === OrderBy.LEAST_RATED){
            setSortedRoutes(filteredArray.sort((a:IRoute,b:IRoute) => {
                return a.likes.length - b.likes.length;
            }));
        }

        if(routeOrderBySelector === OrderBy.DISTANCE_LONG){
            setSortedRoutes(filteredArray.sort((a:IRoute,b:IRoute) => {
                return parseInt(b.distance) - parseInt(a.distance);
            }));
        }

        if(routeOrderBySelector === OrderBy.DISTANCE_SHORT){
            setSortedRoutes(filteredArray.sort((a:IRoute,b:IRoute) => {
                return parseInt(a.distance) - parseInt(a.distance);
            }));
        }

        if(routeOrderBySelector === OrderBy.TIME_LONG){
            setSortedRoutes(filteredArray.sort((a:IRoute,b:IRoute) => {
                return parseInt(b.time) - parseInt(a.time);
            }));
        }

        if(routeOrderBySelector === OrderBy.TIME_SHORT){
            setSortedRoutes(filteredArray.sort((a:IRoute,b:IRoute) => {
                return parseInt(a.time) - parseInt(b.time);
            }));
        }

        
    }


    function showRoutes(){
        return sortedRoutes.map((route, index) => {
            if((index + 1) > routeCounter){
                return undefined;
            }else{
                return <RouteCard filterable={props.filterable} data={route} key={index} />
            }
        })
    }

    useEffect(() => {
        filterRoutes()
    },[routeOrderBySelector,routeSearchSelector,routeTagsSelector, props.data])


    function showMoreRoutes(){
        if(routeCounter + props.incrementDisplayAmountBy > sortedRoutes.length){
            setRouteCounter(props.data.length);
        }else{
            setRouteCounter(prevRouteCounter => prevRouteCounter += props.incrementDisplayAmountBy);
        }
    }

    return(
        <GridWrapper>
            <GridContainer toggle={props.removePadding}>
                {showRoutes()}
            </GridContainer>
            {sortedRoutes.length > routeCounter && sortedRoutes.length > 0 && <LoadMoreButton onClick={showMoreRoutes}>Load more</LoadMoreButton>}
        </GridWrapper>
    )
}

export default CardGrid;