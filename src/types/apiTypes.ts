export type DataType = {
    START: GameType[];
    ALL: GameType[];
    NEW: GameType[];
    SLOTS: GameType[];
    LIVE: GameType[];
    JACKPOTS: GameType[];
    SPORTS: GameType[];
    FAVORITES: GameType[];
    INVITE: GameType[];
    CASINO_LIVE: GameType[];
    CASHIER: GameType[];
}

export type MockData = {
    [key: string]: GameType[]
}

export type GameType = {
    id: number;
    title: string;
    favorite: boolean;
    url: string;
    gameProvider: GameProvider;
}

export type GameProvider =
    | "playTech"
    | "SkyWind Group"
    | "Pragmatic Play"
    | "Every Matrix"
    | "Evolution"
    | "Expanse"
    | "Ezugi"
    | "GameArt"
    | "Habanero"
    | "Hacksaw Gaming"
    | "Inbel Games"
    | "M Play"
    | "Net Ent"
    | "PG Slot Games"
    | "Play N Go"
    | "Play Son"
    | "Red Tiger"
    | "Relax Gaming";

export type CategoriesTypes = {
    category: string
    logo: string
}

export type ImageType = {
    src: string
}

