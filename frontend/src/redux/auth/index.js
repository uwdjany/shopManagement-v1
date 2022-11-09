import {createSlice} from "@reduxjs/toolkit";

const authSclice = createSlice({
    name:"authentication",
    initialState:{token:"",user:{name:""},isFetching:false,},
    reducers:{
        login(state,action){
            state.token = action.payload?.data?.token;
            state.user = action.payload?.data?.user;
        },
        setIsFetching(state,action){
            state.isFetching = action.payload
        },


    }

});

export const authActions = authSclice.actions;

export default authSclice.reducer;

