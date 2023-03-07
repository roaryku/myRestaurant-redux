import { createSlice } from '@reduxjs/toolkit'


/* 8 Step - 1 import createSlice from WEBSITE, 2 - const, name, initialState */

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {

        /* when upload the page we want upload the category of ALL */

        selectedCategory: "ALL"
    },
    reducers: {
        /* change the name from changeByAmount to filterCategory, everything else stay the same */
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})


/* const getSelectedCategory - we use later : NEXT STEP MOVE TO Filter
Here we change state - in different document will say how to change state */

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { filterCategory } = dishesSlice.actions
export default dishesSlice.reducer