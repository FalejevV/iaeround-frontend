import { FormEvent, useRef } from "react";
import { SearchContainer, SearchIcon, SearchInputField } from "./SearchInput.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { setSearch } from "../../store/features/routeFiltering";


function SearchInput(){
    const inputRef = useRef(null);

    const routeSearchSelector = useAppSelector((state:RootState) => state.routeFiltering.search);
    const dispatch = useAppDispatch();''


    function hideKeyboard(){
        var field = document.createElement('input');
        field.setAttribute('type', 'text');
        document.body.appendChild(field);
        
        setTimeout(function() {
            field.focus();
            setTimeout(function() {
                field.setAttribute('style', 'display:none;');
            }, 50);
        }, 50);
    }

    function searchClick(){
        if(inputRef.current){
            let inputField:HTMLInputElement = inputRef.current
            if(inputField.value.trim() === ""){
                inputField.focus();
            }else{
                dispatch(setSearch(inputField.value));
                hideKeyboard();
            }
        }
    }

    function formSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        let target:HTMLFormElement = e.currentTarget;
        let searchInput = target.elements[0] as HTMLInputElement;
        dispatch(setSearch(searchInput.value));
        hideKeyboard();
    }
    return(
        <SearchContainer onSubmit={(e) => formSubmit(e)}>
            <SearchIcon onClick={() => searchClick()} viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
            </SearchIcon>
            <SearchInputField name="search" ref={inputRef} type="text"/>
        </SearchContainer>
    )
}

export default SearchInput;