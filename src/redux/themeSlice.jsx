import { createSlice} from "@reduxjs/toolkit"
 
const initialState = {
    color:"bg-white"
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducer:{

        changetheme:(state)=>{
            state.color = color ==="bg-white"?    color="bg-black" : color="bg-white" 
           
        }
            
            
    }
    

})



const {changetheme} = themeSlice.actions

const userReducer = themeSlice.reducer

export default userReducer

