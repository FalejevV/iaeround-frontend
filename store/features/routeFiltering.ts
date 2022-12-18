import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { IRouteFiltering } from "../../interface";
import { RootState } from "../store";
import { OrderBy } from "../../enum";


const initialState:IRouteFiltering = {
    search:"",
    tags:[],
    orderBy:OrderBy.NEW
}
const routeFilteringSlice = createSlice({
    name: "routeFiltering",
    initialState,
    reducers:{
        setSearch(state:IRouteFiltering, action:PayloadAction<string>){
            state.search = action.payload;
        },
        addTag(state:IRouteFiltering, action:PayloadAction<string>){
            if(!state.tags.includes(action.payload)){
                state.tags.push(action.payload);
            }
        },
        removeTag(state:IRouteFiltering,action:PayloadAction<string>){
            state.tags = state.tags.filter((tag:string) => tag !== action.payload);
        },
        setOrderBy(state:IRouteFiltering, action:PayloadAction<OrderBy>){
            state.orderBy = action.payload;
        }
    }
});

export default routeFilteringSlice.reducer;

export const {setSearch, addTag, removeTag, setOrderBy} = routeFilteringSlice.actions