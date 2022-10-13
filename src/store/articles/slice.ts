import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../constants";
import { Article, ArticleState } from "./types";

const initialState: ArticleState = {
    articles: [],
    loading: false,
    error: '',
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticles: (state, action: PayloadAction<Article[]>) => {
            state.articles = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = '';
        });
        builder.addCase(
            fetchData.fulfilled, 
            (state, action: PayloadAction<Article[]>) => {
                state.articles = action.payload;
                state.loading = false;
        });
        builder.addCase(
            fetchData.rejected, 
            (state, action: {error: any}) => {
                state.error = action.error.message;
                state.loading = false;
        });
    },
});

export const fetchData = createAsyncThunk(
    'articles/fetchArticles', 
    async () => {
        const response = await fetch(`${api}/v3/articles`);
        return response.json();
    }
);

export const {} = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;