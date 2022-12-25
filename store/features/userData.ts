import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProfile, IRouteFiltering } from "../../interface";



const initialState:IProfile = {
    id:"",
    login:"",
    name:"",
    about:"",
    avatar:"",
}


const userDataSlice = createSlice({
    name: "routeFiltering",
    initialState,
    reducers:{
        setUserData(state:IProfile, action:PayloadAction<IProfile>){
            state.id = action.payload.id;
            state.login = action.payload.login;
            state.name = action.payload.name;
            state.about = action.payload.about;
            state.avatar = action.payload.avatar;
        }
    }
});


export default userDataSlice.reducer;


export const {setUserData} = userDataSlice.actions