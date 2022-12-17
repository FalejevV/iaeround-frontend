import { useState } from "react";
import { SortingButton, SortingButtonsContainer, SortingDateIndicator, SortingIndicator } from "./SortingButtons.styled";


function SortingButtons(){
    const [currentSort, setCurrentSort] = useState<number>(1);
    
    function toggleSort(sortIndex:number){
        if(currentSort === sortIndex){
            setCurrentSort(sortIndex + 1);
        }else{
            setCurrentSort(sortIndex);
        }
    }

    
    return(
        <SortingButtonsContainer>
            <SortingButton onClick={() => {toggleSort(1)}}  toggle={currentSort === 1 || currentSort === 2}>
                Date
                <SortingDateIndicator>{currentSort === 1 && "new"} {currentSort === 2 && "old"} {currentSort !== 1 && currentSort !== 2 && "new"}</SortingDateIndicator>
            </SortingButton>

            <SortingButton onClick={() => {toggleSort(5)}}  toggle={currentSort === 5 || currentSort === 6}>
                Rating
                <SortingIndicator viewBox="0 0 24 24" width="24" height="24" toggle={currentSort === 6}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortingIndicator>
            </SortingButton>

            <SortingButton onClick={() => {toggleSort(10)}} toggle={currentSort === 10 || currentSort === 11}>
                Distance
                <SortingIndicator viewBox="0 0 24 24" width="24" height="24" toggle={currentSort === 11}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortingIndicator>
            </SortingButton>

            <SortingButton onClick={() => {toggleSort(15)}} toggle={currentSort === 15 || currentSort === 16}>
                Time
                <SortingIndicator viewBox="0 0 24 24" width="24" height="24" toggle={currentSort === 16}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortingIndicator>
            </SortingButton>
        </SortingButtonsContainer>
    )
}

export default SortingButtons;