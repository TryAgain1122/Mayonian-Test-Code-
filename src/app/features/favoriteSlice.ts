import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockData } from '../../api/gamesApi';

export interface Game {
  id: number;
  title: string;
  favorite: boolean;
  url: string;
  gameProvider: string;
  category: string; // Ensure this is included
}

interface GamesState {
  games: Game[];
  filteredGames: Game[];
  favorites: Game[];
}

const initialState: GamesState = {
  games: mockData,
  filteredGames: mockData,
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
      state.filteredGames = action.payload;
    },
    filterGames: (state, action: PayloadAction<string>) => {
      const category = action.payload;

      if (category === 'All') {
        state.filteredGames = state.games;
      } else {
        state.filteredGames = state.games.filter(game => game.category === category)
      }
    },
    addFavorite: (state, action: PayloadAction<number>) => {
      const game = state.games.find((game) => game.id === action.payload);
      if (game && !state.favorites.some((fav) => fav.id === game.id)) {
        state.favorites.push(game);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((game) => game.id !== action.payload);
    },
  },
});

export const { setGames, filterGames, addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
