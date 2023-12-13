import { configureStore } from "@reduxjs/toolkit"
import userReduser from "./redux/userSlice"

export const store = configureStore({
    reducer:{
        auth: userReduser,
    }
    
})

 