import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('news/fetch', async (query) => {

    // const apiKey = process.env.REACT_APP_API_KEY

    try {
        // const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2024-03-01&sortBy=publishedAt&apiKey=${apiKey}`)
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2024-03-01&sortBy=publishedAt&apiKey=f854849b64f342a8ac4a71fa7913834c`)

        console.log('API Key:', apiKey);

        const jsonData = await response.json();

        return jsonData.articles;

    } catch (error) {
        console.log(error.message);
    }
})

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState: {
        news: [],
        status: "idle",
        error: null,
    },
    reducers: {
        loadNews: (state, action) => {
            state.news = action.payload
        }
    },
    extraReducers: function (builder) {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchData.fulfilled, (state, action) => {
            state.news = action.payload
            state.status = 'success'
        }).addCase(fetchData.rejected, (state, action) => {
            state.status = 'faild'
            state.error = action.error.message;
        })
    }
})

export const { loadNews } = newsSlice.actions

export default newsSlice.reducer;