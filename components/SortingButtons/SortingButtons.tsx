import { useState } from "react";
import { SortingButton, SortingButtonsContainer, SortingDateIndicator, SortingIndicator } from "./SortingButtons.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { OrderBy } from "../../enum";
import { setOrderBy } from "../../store/features/routeFiltering";


function SortingButtons(){
    const routeOrderBySelector = useAppSelector((state:RootState) => state.routeFiltering.orderBy);
    const dispatch = useAppDispatch();
    function toggleSort(sortIndex:number){
        if(routeOrderBySelector === sortIndex){
            dispatch(setOrderBy(sortIndex + 1));
        }else{
            dispatch(setOrderBy(sortIndex));
        }
    }

    
    return(
        <SortingButtonsContainer>
            <SortingButton onClick={() => {toggleSort(OrderBy.NEW)}}  toggle={routeOrderBySelector === OrderBy.NEW || routeOrderBySelector === OrderBy.OLD}>
                Date
                <SortingDateIndicator>{routeOrderBySelector === OrderBy.NEW && "new"} {routeOrderBySelector === OrderBy.OLD && "old"} {routeOrderBySelector !== OrderBy.NEW && routeOrderBySelector !== OrderBy.OLD && "new"}</SortingDateIndicator>
            </SortingButton>

            <SortingButton onClick={() => {toggleSort(OrderBy.MOST_RATED)}}  toggle={routeOrderBySelector === OrderBy.MOST_RATED || routeOrderBySelector === OrderBy.LEAST_RATED}>
                Rating
                <SortingIndicator viewBox="0 0 24 24" width="24" height="24" toggle={routeOrderBySelector === OrderBy.LEAST_RATED}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortingIndicator>
            </SortingButton>

            <SortingButton onClick={() => {toggleSort(OrderBy.DISTANCE_LONG)}} toggle={routeOrderBySelector === OrderBy.DISTANCE_LONG || routeOrderBySelector === OrderBy.DISTANCE_SHORT}>
                Distance
                <SortingIndicator viewBox="0 0 24 24" width="24" height="24" toggle={routeOrderBySelector === OrderBy.DISTANCE_SHORT}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortingIndicator>
            </SortingButton>

            <SortingButton onClick={() => {toggleSort(OrderBy.TIME_LONG)}} toggle={routeOrderBySelector === OrderBy.TIME_LONG || routeOrderBySelector === OrderBy.TIME_SHORT}>
                Time
                <SortingIndicator viewBox="0 0 24 24" width="24" height="24" toggle={routeOrderBySelector === OrderBy.TIME_SHORT}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortingIndicator>
            </SortingButton>
        </SortingButtonsContainer>
    )
}

export default SortingButtons;