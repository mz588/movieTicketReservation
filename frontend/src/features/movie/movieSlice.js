import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: null,
  playing: null,
  coming: null,
  // original: null,
  // trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.all = action.payload.all;
      state.playing = action.payload.playing;
      state.coming = action.payload.coming;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectAll = (state) => state.movie.all;
export const selectPlaying = (state) => state.movie.playing;
export const selectComing = (state) => state.movie.coming;
// export const selectOriginal = (state) => state.movie.original;
// export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
