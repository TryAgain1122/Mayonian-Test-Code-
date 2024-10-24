// src/store/gameSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {
  id: number;
  title: string;
  url: string;
}

interface GameState {
  favorites: Game[];
  selectedCategory: string;
  searchTerm: string;
}

const initialState: GameState = {
  favorites: [],
  selectedCategory: 'ALL',
  searchTerm: '',
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Game>) {
      const index = state.favorites.findIndex(fav => fav.id === action.payload.id);
      if (index !== -1) {
        state.favorites.splice(index, 1); // Remove from favorites
      } else {
        state.favorites.push(action.payload); // Add to favorites
      }
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { toggleFavorite, setSelectedCategory, setSearchTerm } = gameSlice.actions;

export default gameSlice.reducer;
