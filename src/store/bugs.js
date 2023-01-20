import { createSlice } from "@reduxjs/toolkit"

let lastId = 0;
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugRemove: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs.splice(index, 1);
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        }

    }
})
console.log(slice)

export const { bugAdded, bugResolved, bugRemove } = slice.actions;
export default slice.reducer;







// Traditional way of Writing Redux-toolkit

// ActionCreators

// export const bugAdded = createAction("BUG_ADDING");
// export const bugRemove = createAction("BUG_REMOVE")
// export const bugResolved = createAction("BUG_RESOLVED")


// //  Reducers 

// let lastId = 0;

// createReducer([], {
//     // Key value
//     // ACtion function name

//     [bugAdded.type]: (bugs, action) => {
//         bugs.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         });
//     },


//     [bugResolved.type]: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id)
//         bugs.splice(index, 1);
//     },

//     [bugRemove.type]: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id);
//         bugs[index].resolved = true;
//     }

// })
