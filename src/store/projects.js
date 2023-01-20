
import { createSlice } from '@reduxjs/toolkit';

let lastId = 1;

const slice = createSlice({
    name: 'Projects',
    initialState: [],
    reducers: {
        projectAdded: (projects, action) => {
            projects.push({
                id: lastId,
                description: 'Project' + lastId++
            })
        },
        projectRemove: (projects, action) => {
            const index = projects.findIndex(project => project.id === action.payload.id);
            projects.splice(index, 1)
        }
    }
})

export const { projectAdded, projectRemove } = slice.actions;
export default slice.reducer;