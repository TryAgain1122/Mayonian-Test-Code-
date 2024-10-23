import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {
  id: number;
  title: string;
  category: string;
  provider: string;
  imageUrl: string;
}

interface GamesState {
  games: Game[];
  filteredGames: Game[];
}

const initialState: GamesState = {
  games: [],
  filteredGames: [],
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
      state.filteredGames = action.payload;
    },
    filterGames: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      state.filteredGames = state.games.filter((game) =>
        game.title.toLowerCase().includes(query)
      );
    },
  },
});

export const { setGames, filterGames } = gamesSlice.actions;
export default gamesSlice.reducer;
