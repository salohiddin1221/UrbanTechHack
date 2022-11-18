import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active:false
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
     open: (state)=>{
       state.active = true
     },
     close: (state)=>{
        state.active = false
    }
  },
})
 
export const {open, close } = sidebarSlice.actions

export default sidebarSlice.reducer