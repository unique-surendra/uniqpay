import { createSlice} from "@reduxjs/toolkit"
 
const initialState = {
    name:"surendra"
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducer:{

        login:(state,action)=>{
            state.name = action.payload
        }
            
            
    }
    

})



const {login} = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer

