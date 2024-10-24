
// Carousel Images
export type ImageType = {
    src: string
}

export const CarouselImages: ImageType[] = [
    { src: '/Images/casino1.jpg' },
    { src: '/Images/casino2.jpg' },
    { src: '/Images/casino3.jpg' }
]
export const defaultColors = {
    "defaultBlue": "#00A6FF",
    "defaultGray": "#888888",
    "defaultYellow": "#FFD600",
}


// export type GameProviderLogo = {
//     title: GameProvider;
//     logoUrl: string
// }

// export type GameType = {
//     id:number;
//     title: string;
//     url: string;
//     favorite: boolean;
//     gameProvider: GameProvider;
// }


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

export const CategoriesLabels: CategoriesTypes[] = [
    { category: "START", logo: '/Images/fire.png' },
    { category: "NEW", logo: '/Images/new.png' },
    { category: "SLOTS", logo: '/Images/gaming.png' },
    { category: "LIVE", logo: '/Images/new.png' },
    { category: "JACKPOTS", logo: '/Images/jackpot.png'},
    { category: "SPORTS", logo: '/Images/football.png' },
    { category: "FAVORITES", logo: '/Images/favorite.png' },
    { category: "INVITE", logo: '/Images/add-user.png' },
    { category: "CASINO LIVE", logo: '/Images/spade-token.png' },
    { category: "CASHIER", logo: '/Images/wallet.png' },
]


export type GameType = {
    id: number;
    title: string;
    favorite: boolean;
    url: string;
    gameProvider: GameProvider;
}

export type MockData = {
    [key: string]: GameType[]
}

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
export type CategoryKey = keyof DataType
export const mockData: MockData = {
    START: [
        {
            id: 1,
            title: "Sugar Rush",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f76c/26f0/f87d86737579f23495c713ff46b6646b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ofq6XGSYfEllbgOUDuRQQhVb87pmfKGHjP2DTe0AeLYwq84nzqbEKoIAX5fSbPy40ZhKV3UJhtO3Uqp71T4TIm0palO6AwzJkwWdRSZ3eXouTRwHSjCBS1fOdrYri7emtA9i21GD-Y6-p-jczUofwdBZ1vq7hfsL37JK8i4crZUdHhAX6rsKY65Vyunf1TtfJ4OIQy1pJGZ1uaHvLQyDxp~lrsX-dfPr3GJOVrQguuXt8vn~z7qPyOvFBaa5veK6cEw8FptwDc4xWIIRU-Z~zc9IdYTAT0TdAy1w1r5LCrK1RmsXQxXce4oJN~nRGblCjMPxLz6XOnGJYs7Jc--Tag__",
            gameProvider: "Pragmatic Play"
        },
        {
            id: 2,
            title: "Shrolin Crew",
            favorite: true,
            url: "https://s3-alpha-sig.figma.com/img/b81a/6736/e6e59d2dc70c4bcc83e4572cd6796551?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OrrjCT1z7O~hXXcMR1IPtZ-TyNpy~UV14RtlDiQhjxXUQUxBl4uH414hKoAianJcaNqxRLGfmvM~RoCLnHg5BytYvXGYhCpY~5PbMv9ziTFKuYpwiULSnG4EELvO-gWNWjv0lk7qdtzgijtmFgoQeVjH5qSp6VIn8ch6-jv2652preBMdNmwgRLWbd9sKwdZzEu2v6OLji7MB0PyUEhbCUBQ1~HzaVDdSY0CCPZ847~3-vb2PziXmjp8W0GfZwqtrBBXCXalh2CSp32QSsOhjWUUPsLTSEn47bAyFUIUuqyC~ADPWtvoYb72jQ9g3KG2zoistquUd2pdPDbFJNtt5w__",
            gameProvider: "Expanse"
        },
        {
            id: 3,
            title: "Big Bad Wolf",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f527/9f8e/b0aa093c55b0e6ad7c104dcf1c909678?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmApCROR32H3mBgIXd9PJeV0BdkOlP-FqcSuRvH~OU2tMGDdEwMLSmQa0wcaAipZ5VDb6af2XBfQ4AyLavnjZVs~BriztNnVVTk0bYjJ7nOexPbAoxXjSoKNVJmUcjBPHGH9oEWHCh3xyQr2QeoMd30MFuBr43bjU0E~0jF1Bja8Hdv7qdEenibuIl1kveIybqVwen2oGkPnBdZD2kA3jf0uOToa0vli~yCv~adAZ84rjUeRyS9fUWeVgntrcf2W3j1umky-9FJPtjA5-SODWqx~kkKE81R8qvydrJOyu3r31ehUdvlkWKkQb3EdfoMeIV1BmlAtm7sTXDI9pJIXIA__",
            gameProvider: "playTech"
        },
        {
            id: 4,
            title: "Book of Egypt",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/1134/d3a9/a7cded82bd00720e16cfd3aa34af2cd9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G04x9YhomGoh4JN-84zj-aQwGhRfgfuaUro6-XIQ5qSCiHttxFr3DWPQnN1UImuIt6Lg6hIeGxUIGWe7MDqTXgzLUZKyTCSSvclWWZ6ot3usf7QpCvgOb7EoMLQNsWIiGajmuEJd~XBTN4oaCwucb-ZwObnh6yktoN3flVudf9kT4FsGzUe4yCXCykMh6Q4ToJHIWkrgpejzcXg7PUxLanL3v2ovd1UbgaZrQf7upy7saf7R-MZ9nk0nK-S540VFDAwcCo6qnh66HRt3avruZpZp6QJ44ZdDOu~VQd9sh7m5EDJefF7SZbpHsUnnswW-oZX-PCPauRpAhnJlPWAWOA__",
            gameProvider: "Expanse"
        },
        {
            id: 5,
            title: "Pirates Power",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/4e09/5048/244b12031799c25318a09a6bc12208a0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPwD6AlX6MR~Hj0ICweXs~SAO0rowvNL0KzaPpTwzSmAHZxSbvG4V2DmIQzzA-XzFAKW-StuTKprvMSN9HX8v5C0bAJNTTS37~p8pjfJ6BSyBiOWbhFdx7~0wbap4qGFQjcAqERdDBmzwK8R7htoOUjcuy~Lhl0iX6EVaZ3Y7q2CR8xIJenxo90PWbhPrMJ25PuZ9o1RuBpC-Secj0WvWRRdS2OQ~WDCraEUV6uro5QXQsSuZxE90Pe2kYU1wjQ9VM516j3T9LM7z2MbDvYBCJzqCQkVKBWlXQPWa-xrwW~XZnmenTgOfxn8FUOxiGdqrt16impdpy8XXJFA6Y~ERg__",
            gameProvider: "Expanse"
        },
        {
            id: 6,
            title: "Crocodile Blitz",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/e52c/b553/8577a76420a441f020f285da17038e22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmPMxPwZcC~Q4yyOsfWlwP9qj8CWRIQw1wNWGtzt2eiRsGkgkXuf8pLoeqX5hm0lTpG3eFmlj5pWootg6hrr7Eg5IOJFrHEMb7lIDwwIV37WijvOkk98ISusZWWIP5454eJDpyccs~T-~8IeJQlPHrRkIOQdNnnYe-pOcSYFMiNxnr2iYHrs3BRI8Sb~cHgeK4AsGlvsvHnNVmU2ZCLpw3i~PRfAiqFYP6UFGlV3~d9quvWS9DZCHmab7fKO0pYvoEkfiamFUtLC9nx4W8DkwFJ4yZPPth~UieRv5WEwpqOKMXhTE9iQdLndvFU8Y89ebtXZ4LYYd5quc33y-2~b~w__",
            gameProvider: "playTech"
        },
        {
            id: 7,
            title: "Anaconda Wild 2 Powerplay Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/af91/ac86/2201b4340247c159e95931a9624bdaa8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ELS42OwmbQ9CfzgFxH189TI6pb8SZw68nuBH1mWq18uVnHAjuAos4kWfxnHX9VoAinhYDaYRDf7P-7~JeMlcK45YmeNwCKg7o5XdMPDvoJBSZLuNFHk3LC8zRZzEMPsjmnsDBNkoXgGGmmVLp-eyZpbExtvuTF52ECxKrbpVtmzIIMDBS8CF8K642mhGmP64tnNyi~mnLDc4QyEVnyvH07ROi4y-qCEahgh8Zb9xEaWIO-Dvhonjw9lPW0VwVm-pLowqzhKZhR14Vv88kESpDc4GssgY3yAXfTwErWgtKk~31ARPdXMzfO1OgOHdKddp9~dkjlOzRN7DeJfJqIGqpA__",
            gameProvider: "playTech"
        },
        {
            id: 8,
            title: "Maya Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f07a/29dd/76c5a89b0e4bedaedb79ccb142b277da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DxdImV-HgAQ-I2DVfU2iO7RtGwG0uxh9rrekX6qsXm3E8xzURGB2ZO4Ud9kd2LrHq~CQuQWk~OclcOX4~DYS~W9huofDxfZW4A5tvryjWh8x9cT4cG8uMhSmqwsHoOmZX8p40H002J3Zx-tDZ~EB~G1q6WSASKK2Po4NHhC901b3Z-66LKgAv0qLOUYb41QA34eabX0nQAC4Ly3VKYearGfTzbt0gWeDdmlfwzCEoBhaPnt-EYP-qpKjfIwrcEoUGXRd520BTNnQSIMICUpHOW0jx5-00BdwaU4KZQiV7vSHljDP3mEWUTD-2cnHzCB5PZwQ9vR6KumnnO4hbPfIbA__",
            gameProvider: "SkyWind Group"
        },
        {
            id: 9,
            title: "Beach Life",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/ae1d/de5e/4cbe514d7290012d92746d46d0898c0c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W94kpV9tNfOMPjxZcbjjS6VN1m~xAg~Qa7bgGAvMqmiHLbVN1GdvQ0Pe7xClSe40iCvq7xiVOkBMyhR17NnkAyBEH0HNebWRVDEM80Xw35bLdZ1rtkmGNh84HKIPAWBNc8Ox0hJEYh6bwZM9FdA36CU012DfAvtLcbmWJ9HHBkRNYU22LvLF1a5Q7xP1FMFGYl1jZ1LCoM~JZL6yZleLcfJmVJqkUsHrR0ybTKJv8lWafO6LBimTUgcRsjRHrR7UiNDeacs3-tTp1dae5q6W37wbJb3fWI3p74opHzYseTx0H5mxFqq4-P2k0AVI2KMhOpLXwRz62nAAdl6De5v3qQ__",
            gameProvider: "playTech"
        },
        {
            id: 10,
            title: "Inca Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/e7a8/50ca/5bc266ff0244df61dbf9c741324bf587?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSmIatlv67wg93U3Zs29qkqZKbf5ZJQxp8EK~kxIg2kUtXKYW-yHLbNZGOLnztt317zk0Ii3z3b2pN~cwc1lNSCKetX-hKVxqHndOCEZLP9HRSVNA3JF9bhdJD2SCGvxZtdbbbmAE2LtB4syXzLLgE3kcjEnSDHphob-FnL4fTU4Ykj3~iD6s~-daGE6KVTnvZzOGbon9X4LPBfow2FzMO0OPZm9oxnBPyq6wt5IfAmaVQf2rzZjtfIsEVKa-50tXr0W0tJDU8AdLM0CAZupw55YpXY2l-VDBD6~JLWpz-nbw~HzlmpncPhFXr6LshK-OYeNiEhzSNrVSUYerfAPtw__",
            gameProvider: "SkyWind Group"
        },
        
        {
            id: 11,
            title: "Pride of Persia",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/ab8b/8632/27d10987732b3f468fee35df08c78a16?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIpWI4ORc0fcCJQN7sDNT2BoQxn5CrIGVhf9rq3YRwLSB4-kCwOa7XfEC6Ni42ynn0VYUU~PdMDLRVfDMgFNQD5WwSeuFmvAai5t2p3A2rxS7ptNjwcu0lgouT0Wr9ua-ijhjyU21-qKmh3lmBnFe5PD3gdnP3QgVn0qj3-Q2tebIg2P4LPkbyvnJvz5Mi3tde1FrnLEw7~SFuVXAkybFoMeB7z3anJoBquA-~PsWtX8-az4d4vKAwGjjlFB2a2D~6jHxPvCn5B5uv7t2TwilQe45HgfLfZhLLi4LjphXK9TUEU6iWWu83z-9-EQiZ0EgxbxNXZSB-8zdgeDnDz1eA__",
            gameProvider: "playTech"
        },
        {
            id: 12,
            title: "Azteca Bonus Lines Power",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/a0b7/5bcd/39d39fe4e6324ca2d2138dc2509853ef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WM14xIBN8~ysl16Ro87A-ZVnuz5Lhur2BdOXOn9mZNJSjQhZeyQ1~joJKiGbIz6xgi0Cn1k1jByYZTT~0gIwIQmlBkQNhoM4DR9Q3yz0M7IYY3oy02tQNo6WTWD0TDuqJzqFWbb6aJJ6Fk3KammvlQK0QTCbPG7CuMwZ9DaNU2D17vIlzMJ-uJRFsatc89Z4MKFhwVwTuElmxbJmf34OiqON6BwxEvys8bueDLBthPqUP36Wk7EpXLS-fEx4CQN9-EJ0tYyL1V8K3-3zIXIoHqfCOAr3ILeb5Dr4E1J7G6bjT31Z3y02SL--3jtglUghqLInVKxw4Vp8T-UGrSrAJw__",
            gameProvider: "playTech"
        },
    ],
    ALL: [
        {
            id: 1,
            title: "Sugar Rush",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f76c/26f0/f87d86737579f23495c713ff46b6646b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ofq6XGSYfEllbgOUDuRQQhVb87pmfKGHjP2DTe0AeLYwq84nzqbEKoIAX5fSbPy40ZhKV3UJhtO3Uqp71T4TIm0palO6AwzJkwWdRSZ3eXouTRwHSjCBS1fOdrYri7emtA9i21GD-Y6-p-jczUofwdBZ1vq7hfsL37JK8i4crZUdHhAX6rsKY65Vyunf1TtfJ4OIQy1pJGZ1uaHvLQyDxp~lrsX-dfPr3GJOVrQguuXt8vn~z7qPyOvFBaa5veK6cEw8FptwDc4xWIIRU-Z~zc9IdYTAT0TdAy1w1r5LCrK1RmsXQxXce4oJN~nRGblCjMPxLz6XOnGJYs7Jc--Tag__",
            gameProvider: "Pragmatic Play"
        },
        {
            id: 2,
            title: "Shrolin Crew",
            favorite: true,
            url: "https://s3-alpha-sig.figma.com/img/b81a/6736/e6e59d2dc70c4bcc83e4572cd6796551?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OrrjCT1z7O~hXXcMR1IPtZ-TyNpy~UV14RtlDiQhjxXUQUxBl4uH414hKoAianJcaNqxRLGfmvM~RoCLnHg5BytYvXGYhCpY~5PbMv9ziTFKuYpwiULSnG4EELvO-gWNWjv0lk7qdtzgijtmFgoQeVjH5qSp6VIn8ch6-jv2652preBMdNmwgRLWbd9sKwdZzEu2v6OLji7MB0PyUEhbCUBQ1~HzaVDdSY0CCPZ847~3-vb2PziXmjp8W0GfZwqtrBBXCXalh2CSp32QSsOhjWUUPsLTSEn47bAyFUIUuqyC~ADPWtvoYb72jQ9g3KG2zoistquUd2pdPDbFJNtt5w__",
            gameProvider: "Expanse"
        },
        {
            id: 3,
            title: "Big Bad Wolf",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f527/9f8e/b0aa093c55b0e6ad7c104dcf1c909678?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmApCROR32H3mBgIXd9PJeV0BdkOlP-FqcSuRvH~OU2tMGDdEwMLSmQa0wcaAipZ5VDb6af2XBfQ4AyLavnjZVs~BriztNnVVTk0bYjJ7nOexPbAoxXjSoKNVJmUcjBPHGH9oEWHCh3xyQr2QeoMd30MFuBr43bjU0E~0jF1Bja8Hdv7qdEenibuIl1kveIybqVwen2oGkPnBdZD2kA3jf0uOToa0vli~yCv~adAZ84rjUeRyS9fUWeVgntrcf2W3j1umky-9FJPtjA5-SODWqx~kkKE81R8qvydrJOyu3r31ehUdvlkWKkQb3EdfoMeIV1BmlAtm7sTXDI9pJIXIA__",
            gameProvider: "playTech"
        },
        {
            id: 4,
            title: "Book of Egypt",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/1134/d3a9/a7cded82bd00720e16cfd3aa34af2cd9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G04x9YhomGoh4JN-84zj-aQwGhRfgfuaUro6-XIQ5qSCiHttxFr3DWPQnN1UImuIt6Lg6hIeGxUIGWe7MDqTXgzLUZKyTCSSvclWWZ6ot3usf7QpCvgOb7EoMLQNsWIiGajmuEJd~XBTN4oaCwucb-ZwObnh6yktoN3flVudf9kT4FsGzUe4yCXCykMh6Q4ToJHIWkrgpejzcXg7PUxLanL3v2ovd1UbgaZrQf7upy7saf7R-MZ9nk0nK-S540VFDAwcCo6qnh66HRt3avruZpZp6QJ44ZdDOu~VQd9sh7m5EDJefF7SZbpHsUnnswW-oZX-PCPauRpAhnJlPWAWOA__",
            gameProvider: "Expanse"
        },
        {
            id: 5,
            title: "Pirates Power",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/4e09/5048/244b12031799c25318a09a6bc12208a0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPwD6AlX6MR~Hj0ICweXs~SAO0rowvNL0KzaPpTwzSmAHZxSbvG4V2DmIQzzA-XzFAKW-StuTKprvMSN9HX8v5C0bAJNTTS37~p8pjfJ6BSyBiOWbhFdx7~0wbap4qGFQjcAqERdDBmzwK8R7htoOUjcuy~Lhl0iX6EVaZ3Y7q2CR8xIJenxo90PWbhPrMJ25PuZ9o1RuBpC-Secj0WvWRRdS2OQ~WDCraEUV6uro5QXQsSuZxE90Pe2kYU1wjQ9VM516j3T9LM7z2MbDvYBCJzqCQkVKBWlXQPWa-xrwW~XZnmenTgOfxn8FUOxiGdqrt16impdpy8XXJFA6Y~ERg__",
            gameProvider: "Expanse"
        },
        {
            id: 6,
            title: "Crocodile Blitz",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/e52c/b553/8577a76420a441f020f285da17038e22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmPMxPwZcC~Q4yyOsfWlwP9qj8CWRIQw1wNWGtzt2eiRsGkgkXuf8pLoeqX5hm0lTpG3eFmlj5pWootg6hrr7Eg5IOJFrHEMb7lIDwwIV37WijvOkk98ISusZWWIP5454eJDpyccs~T-~8IeJQlPHrRkIOQdNnnYe-pOcSYFMiNxnr2iYHrs3BRI8Sb~cHgeK4AsGlvsvHnNVmU2ZCLpw3i~PRfAiqFYP6UFGlV3~d9quvWS9DZCHmab7fKO0pYvoEkfiamFUtLC9nx4W8DkwFJ4yZPPth~UieRv5WEwpqOKMXhTE9iQdLndvFU8Y89ebtXZ4LYYd5quc33y-2~b~w__",
            gameProvider: "playTech"
        },
        {
            id: 7,
            title: "Anaconda Wild 2 Powerplay Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/af91/ac86/2201b4340247c159e95931a9624bdaa8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ELS42OwmbQ9CfzgFxH189TI6pb8SZw68nuBH1mWq18uVnHAjuAos4kWfxnHX9VoAinhYDaYRDf7P-7~JeMlcK45YmeNwCKg7o5XdMPDvoJBSZLuNFHk3LC8zRZzEMPsjmnsDBNkoXgGGmmVLp-eyZpbExtvuTF52ECxKrbpVtmzIIMDBS8CF8K642mhGmP64tnNyi~mnLDc4QyEVnyvH07ROi4y-qCEahgh8Zb9xEaWIO-Dvhonjw9lPW0VwVm-pLowqzhKZhR14Vv88kESpDc4GssgY3yAXfTwErWgtKk~31ARPdXMzfO1OgOHdKddp9~dkjlOzRN7DeJfJqIGqpA__",
            gameProvider: "playTech"
        },
        {
            id: 8,
            title: "Maya Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f07a/29dd/76c5a89b0e4bedaedb79ccb142b277da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DxdImV-HgAQ-I2DVfU2iO7RtGwG0uxh9rrekX6qsXm3E8xzURGB2ZO4Ud9kd2LrHq~CQuQWk~OclcOX4~DYS~W9huofDxfZW4A5tvryjWh8x9cT4cG8uMhSmqwsHoOmZX8p40H002J3Zx-tDZ~EB~G1q6WSASKK2Po4NHhC901b3Z-66LKgAv0qLOUYb41QA34eabX0nQAC4Ly3VKYearGfTzbt0gWeDdmlfwzCEoBhaPnt-EYP-qpKjfIwrcEoUGXRd520BTNnQSIMICUpHOW0jx5-00BdwaU4KZQiV7vSHljDP3mEWUTD-2cnHzCB5PZwQ9vR6KumnnO4hbPfIbA__",
            gameProvider: "SkyWind Group"
        },
        {
            id: 9,
            title: "Beach Life",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/ae1d/de5e/4cbe514d7290012d92746d46d0898c0c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W94kpV9tNfOMPjxZcbjjS6VN1m~xAg~Qa7bgGAvMqmiHLbVN1GdvQ0Pe7xClSe40iCvq7xiVOkBMyhR17NnkAyBEH0HNebWRVDEM80Xw35bLdZ1rtkmGNh84HKIPAWBNc8Ox0hJEYh6bwZM9FdA36CU012DfAvtLcbmWJ9HHBkRNYU22LvLF1a5Q7xP1FMFGYl1jZ1LCoM~JZL6yZleLcfJmVJqkUsHrR0ybTKJv8lWafO6LBimTUgcRsjRHrR7UiNDeacs3-tTp1dae5q6W37wbJb3fWI3p74opHzYseTx0H5mxFqq4-P2k0AVI2KMhOpLXwRz62nAAdl6De5v3qQ__",
            gameProvider: "playTech"
        },
        {
            id: 10,
            title: "Inca Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/e7a8/50ca/5bc266ff0244df61dbf9c741324bf587?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSmIatlv67wg93U3Zs29qkqZKbf5ZJQxp8EK~kxIg2kUtXKYW-yHLbNZGOLnztt317zk0Ii3z3b2pN~cwc1lNSCKetX-hKVxqHndOCEZLP9HRSVNA3JF9bhdJD2SCGvxZtdbbbmAE2LtB4syXzLLgE3kcjEnSDHphob-FnL4fTU4Ykj3~iD6s~-daGE6KVTnvZzOGbon9X4LPBfow2FzMO0OPZm9oxnBPyq6wt5IfAmaVQf2rzZjtfIsEVKa-50tXr0W0tJDU8AdLM0CAZupw55YpXY2l-VDBD6~JLWpz-nbw~HzlmpncPhFXr6LshK-OYeNiEhzSNrVSUYerfAPtw__",
            gameProvider: "SkyWind Group"
        },
        
        {
            id: 11,
            title: "Pride of Persia",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/ab8b/8632/27d10987732b3f468fee35df08c78a16?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIpWI4ORc0fcCJQN7sDNT2BoQxn5CrIGVhf9rq3YRwLSB4-kCwOa7XfEC6Ni42ynn0VYUU~PdMDLRVfDMgFNQD5WwSeuFmvAai5t2p3A2rxS7ptNjwcu0lgouT0Wr9ua-ijhjyU21-qKmh3lmBnFe5PD3gdnP3QgVn0qj3-Q2tebIg2P4LPkbyvnJvz5Mi3tde1FrnLEw7~SFuVXAkybFoMeB7z3anJoBquA-~PsWtX8-az4d4vKAwGjjlFB2a2D~6jHxPvCn5B5uv7t2TwilQe45HgfLfZhLLi4LjphXK9TUEU6iWWu83z-9-EQiZ0EgxbxNXZSB-8zdgeDnDz1eA__",
            gameProvider: "playTech"
        },
        {
            id: 12,
            title: "Azteca Bonus Lines Power",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/a0b7/5bcd/39d39fe4e6324ca2d2138dc2509853ef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WM14xIBN8~ysl16Ro87A-ZVnuz5Lhur2BdOXOn9mZNJSjQhZeyQ1~joJKiGbIz6xgi0Cn1k1jByYZTT~0gIwIQmlBkQNhoM4DR9Q3yz0M7IYY3oy02tQNo6WTWD0TDuqJzqFWbb6aJJ6Fk3KammvlQK0QTCbPG7CuMwZ9DaNU2D17vIlzMJ-uJRFsatc89Z4MKFhwVwTuElmxbJmf34OiqON6BwxEvys8bueDLBthPqUP36Wk7EpXLS-fEx4CQN9-EJ0tYyL1V8K3-3zIXIoHqfCOAr3ILeb5Dr4E1J7G6bjT31Z3y02SL--3jtglUghqLInVKxw4Vp8T-UGrSrAJw__",
            gameProvider: "playTech"
        },
    ],
    NEW: [],
    SLOTS: [
        {
            id: 1,
            title: "Sugar Rush",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f76c/26f0/f87d86737579f23495c713ff46b6646b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ofq6XGSYfEllbgOUDuRQQhVb87pmfKGHjP2DTe0AeLYwq84nzqbEKoIAX5fSbPy40ZhKV3UJhtO3Uqp71T4TIm0palO6AwzJkwWdRSZ3eXouTRwHSjCBS1fOdrYri7emtA9i21GD-Y6-p-jczUofwdBZ1vq7hfsL37JK8i4crZUdHhAX6rsKY65Vyunf1TtfJ4OIQy1pJGZ1uaHvLQyDxp~lrsX-dfPr3GJOVrQguuXt8vn~z7qPyOvFBaa5veK6cEw8FptwDc4xWIIRU-Z~zc9IdYTAT0TdAy1w1r5LCrK1RmsXQxXce4oJN~nRGblCjMPxLz6XOnGJYs7Jc--Tag__",
            gameProvider: "Pragmatic Play"
        },
        {
            id: 2,
            title: "Shrolin Crew",
            favorite: true,
            url: "https://s3-alpha-sig.figma.com/img/b81a/6736/e6e59d2dc70c4bcc83e4572cd6796551?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OrrjCT1z7O~hXXcMR1IPtZ-TyNpy~UV14RtlDiQhjxXUQUxBl4uH414hKoAianJcaNqxRLGfmvM~RoCLnHg5BytYvXGYhCpY~5PbMv9ziTFKuYpwiULSnG4EELvO-gWNWjv0lk7qdtzgijtmFgoQeVjH5qSp6VIn8ch6-jv2652preBMdNmwgRLWbd9sKwdZzEu2v6OLji7MB0PyUEhbCUBQ1~HzaVDdSY0CCPZ847~3-vb2PziXmjp8W0GfZwqtrBBXCXalh2CSp32QSsOhjWUUPsLTSEn47bAyFUIUuqyC~ADPWtvoYb72jQ9g3KG2zoistquUd2pdPDbFJNtt5w__",
            gameProvider: "Expanse"
        },
        {
            id: 3,
            title: "Big Bad Wolf",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f527/9f8e/b0aa093c55b0e6ad7c104dcf1c909678?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmApCROR32H3mBgIXd9PJeV0BdkOlP-FqcSuRvH~OU2tMGDdEwMLSmQa0wcaAipZ5VDb6af2XBfQ4AyLavnjZVs~BriztNnVVTk0bYjJ7nOexPbAoxXjSoKNVJmUcjBPHGH9oEWHCh3xyQr2QeoMd30MFuBr43bjU0E~0jF1Bja8Hdv7qdEenibuIl1kveIybqVwen2oGkPnBdZD2kA3jf0uOToa0vli~yCv~adAZ84rjUeRyS9fUWeVgntrcf2W3j1umky-9FJPtjA5-SODWqx~kkKE81R8qvydrJOyu3r31ehUdvlkWKkQb3EdfoMeIV1BmlAtm7sTXDI9pJIXIA__",
            gameProvider: "playTech"
        },
        {
            id: 4,
            title: "Book of Egypt",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/1134/d3a9/a7cded82bd00720e16cfd3aa34af2cd9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G04x9YhomGoh4JN-84zj-aQwGhRfgfuaUro6-XIQ5qSCiHttxFr3DWPQnN1UImuIt6Lg6hIeGxUIGWe7MDqTXgzLUZKyTCSSvclWWZ6ot3usf7QpCvgOb7EoMLQNsWIiGajmuEJd~XBTN4oaCwucb-ZwObnh6yktoN3flVudf9kT4FsGzUe4yCXCykMh6Q4ToJHIWkrgpejzcXg7PUxLanL3v2ovd1UbgaZrQf7upy7saf7R-MZ9nk0nK-S540VFDAwcCo6qnh66HRt3avruZpZp6QJ44ZdDOu~VQd9sh7m5EDJefF7SZbpHsUnnswW-oZX-PCPauRpAhnJlPWAWOA__",
            gameProvider: "Expanse"
        },
        {
            id: 5,
            title: "Pirates Power",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/4e09/5048/244b12031799c25318a09a6bc12208a0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPwD6AlX6MR~Hj0ICweXs~SAO0rowvNL0KzaPpTwzSmAHZxSbvG4V2DmIQzzA-XzFAKW-StuTKprvMSN9HX8v5C0bAJNTTS37~p8pjfJ6BSyBiOWbhFdx7~0wbap4qGFQjcAqERdDBmzwK8R7htoOUjcuy~Lhl0iX6EVaZ3Y7q2CR8xIJenxo90PWbhPrMJ25PuZ9o1RuBpC-Secj0WvWRRdS2OQ~WDCraEUV6uro5QXQsSuZxE90Pe2kYU1wjQ9VM516j3T9LM7z2MbDvYBCJzqCQkVKBWlXQPWa-xrwW~XZnmenTgOfxn8FUOxiGdqrt16impdpy8XXJFA6Y~ERg__",
            gameProvider: "Expanse"
        },
        {
            id: 6,
            title: "Crocodile Blitz",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/e52c/b553/8577a76420a441f020f285da17038e22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmPMxPwZcC~Q4yyOsfWlwP9qj8CWRIQw1wNWGtzt2eiRsGkgkXuf8pLoeqX5hm0lTpG3eFmlj5pWootg6hrr7Eg5IOJFrHEMb7lIDwwIV37WijvOkk98ISusZWWIP5454eJDpyccs~T-~8IeJQlPHrRkIOQdNnnYe-pOcSYFMiNxnr2iYHrs3BRI8Sb~cHgeK4AsGlvsvHnNVmU2ZCLpw3i~PRfAiqFYP6UFGlV3~d9quvWS9DZCHmab7fKO0pYvoEkfiamFUtLC9nx4W8DkwFJ4yZPPth~UieRv5WEwpqOKMXhTE9iQdLndvFU8Y89ebtXZ4LYYd5quc33y-2~b~w__",
            gameProvider: "Pragmatic Play"
        }
    ],
    LIVE: [
        // {
        //     id: 7,
        //     title: "Deal or No Deal",
        //     favorite: false,
        //     url: "https://s3-alpha-sig.figma.com/img/a209/6f8c/1ee7c11ff27b92b0c20b5cd74b66c90e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtH59l4bCbFxg65w8kQ3PTHQ-1uvt~lJl9WZDjDbOtM8KhHymu6AWlcc1p1WVmEdpcub9tIY1x5sXgeyt9sYABK6UgvaPN2zM4-zXi6hAZHoSCaA7eJckLRlGJAPUCA1xH7a8-4mFgrG5Gx21hRJQsMH~GFxYOhT5RG-1Xk49Uwn8LG5~7bmj78URzVIZAG7Fr7BIB1SnPCD-g2hHyKzK7HTUw7zHPkNgVYOz9t7MZ14tUKJvGlML~hd1LrPTxF7hLlKTvlZpGf3iVRzzC6nTZhHf5XFn9h4GNMdd~sSHNcAe4l7a4bh-L92OVKgYNUXHoBipCUDT-5vgjzt1F8xENsFv0Gf-e0HkSRV0EuHL2tN-PY1egF-OQ__",
        //     gameProvider: "Live Games"
        // }
    ],
    JACKPOTS: [],
    SPORTS: [],
    FAVORITES: [
        {
            id: 2,
            title: "Shrolin Crew",
            favorite: true,
            url: "https://s3-alpha-sig.figma.com/img/b81a/6736/e6e59d2dc70c4bcc83e4572cd6796551?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OrrjCT1z7O~hXXcMR1IPtZ-TyNpy~UV14RtlDiQhjxXUQUxBl4uH414hKoAianJcaNqxRLGfmvM~RoCLnHg5BytYvXGYhCpY~5PbMv9ziTFKuYpwiULSnG4EELvO-gWNWjv0lk7qdtzgijtmFgoQeVjH5qSp6VIn8ch6-jv2652preBMdNmwgRLWbd9sKwdZzEu2v6OLji7MB0PyUEhbCUBQ1~HzaVDdSY0CCPZ847~3-vb2PziXmjp8W0GfZwqtrBBXCXalh2CSp32QSsOhjWUUPsLTSEn47bAyFUIUuqyC~ADPWtvoYb72jQ9g3KG2zoistquUd2pdPDbFJNtt5w__",
            gameProvider: "Expanse"
        }
    ],
    INVITE: [],
    CASINO_LIVE: [],
    CASHIER: [],
};
