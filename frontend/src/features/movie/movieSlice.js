import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      state.playing = action.payload.playing;
      state.coming = action.payload.coming;
      // state.original = action.payload.original;
      // state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectPlaying = (state) => state.movie.playing;
export const selectComing = (state) => state.movie.coming;
// export const selectOriginal = (state) => state.movie.original;
// export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
