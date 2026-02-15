import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSenateMembersApi, fetchSenateMemberByIdApi } from "../../api/studentsApi.js";

export const fetchSenateMembers = createAsyncThunk(
    "students/fetchAll", 
    async () => {
        return await fetchSenateMembersApi();
    }
);

export const fetchSenateMemberById = createAsyncThunk(
    "students/fetchById",  // Исправлено: "stusents" -> "students"
    async (id) => {
        return await fetchSenateMemberByIdApi(id);
    }
);

const studentsSlice = createSlice({
    name: "students",
    initialState: {
        items: [],
        selectedMember: null,
        status: "idle",
        error: null
    },
    reducers: {
        clearSelectedMember(state) {
            state.selectedMember = null;
        },
    },
    extraReducers: (builder) => {
        builder 
            // Обработка fetchSenateMembers
            .addCase(fetchSenateMembers.pending, (state) => {
                state.status = "loading";
            }) 
            .addCase(fetchSenateMembers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;  // items для списка
            })
            .addCase(fetchSenateMembers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;     
            })
            
            // Обработка fetchSenateMemberById
            .addCase(fetchSenateMemberById.pending, (state) => {
                state.status = "loading";
            }) 
            .addCase(fetchSenateMemberById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedMember = action.payload;  // selectedMember для деталей
            })
            .addCase(fetchSenateMemberById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;     
            });
    }
}); 

export const { clearSelectedMember } = studentsSlice.actions;
export default studentsSlice.reducer;