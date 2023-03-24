
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { Action } from "@remix-run/router"
import axios from "axios"

export const fetchDashboardList = createAsyncThunk("admin/dashboard-list",async({limit,currentpage})=>{
const response = await axios.get(`https://dummyjson.com/products/?limit=${limit}&currentpage=${currentpage}`)

return response.data
})

const initialState = {
    dashboardList : [],
    count : null
}


const DashboardListSlice = createSlice({
    name:"admin",
    initialState:initialState,

    extraReducers:{

[fetchDashboardList.pending] : (state) =>{
    console.log("pending")
},

[fetchDashboardList.fulfilled] :(state,action)=>{
    state.dashboardList = action.payload
    state.count = action.payload.total

},

[fetchDashboardList.rejected] :(state,action)=>{
  console.log("rejected")
},
}
})

export default  DashboardListSlice.reducer