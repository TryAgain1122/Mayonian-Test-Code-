
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


export type GameProviderLogo = {
    title: GameProvider;
    logoUrl: string
}

export type GameType = {
    id: number;
    title: string;
    url: string;
    favorite: boolean;
    gameProvider: GameProvider;
    category:string
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

export const CategoriesLabels: CategoriesTypes[] = [
    {
        category: "START", 
        logo: '/Images/fire.png'

    },
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
export type dataTypes = GameType[];
export const mockData: dataTypes = [
    {
        id: 1,
        title: "Sugar Rush",
        favorite: false,
        url: "https://s3-alpha-sig.figma.com/img/f76c/26f0/f87d86737579f23495c713ff46b6646b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ofq6XGSYfEllbgOUDuRQQhVb87pmfKGHjP2DTe0AeLYwq84nzqbEKoIAX5fSbPy40ZhKV3UJhtO3Uqp71T4TIm0palO6AwzJkwWdRSZ3eXouTRwHSjCBS1fOdrYri7emtA9i21GD-Y6-p-jczUofwdBZ1vq7hfsL37JK8i4crZUdHhAX6rsKY65Vyunf1TtfJ4OIQy1pJGZ1uaHvLQyDxp~lrsX-dfPr3GJOVrQguuXt8vn~z7qPyOvFBaa5veK6cEw8FptwDc4xWIIRU-Z~zc9IdYTAT0TdAy1w1r5LCrK1RmsXQxXce4oJN~nRGblCjMPxLz6XOnGJYs7Jc--Tag__",
        gameProvider: "Pragmatic Play",
        category: "Slot"  // Added category
    },
    {
        id: 2,
        title: "Shrolin Crew",
        favorite: true,
        url: "https://s3-alpha-sig.figma.com/img/b81a/6736/e6e59d2dc70c4bcc83e4572cd6796551?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OrrjCT1z7O~hXXcMR1IPtZ-TyNpy~UV14RtlDiQhjxXUQUxBl4uH414hKoAianJcaNqxRLGfmvM~RoCLnHg5BytYvXGYhCpY~5PbMv9ziTFKuYpwiULSnG4EELvO-gWNWjv0lk7qdtzgijtmFgoQeVjH5qSp6VIn8ch6-jv2652preBMdNmwgRLWbd9sKwdZzEu2v6OLji7MB0PyUEhbCUBQ1~HzaVDdSY0CCPZ847~3-vb2PziXmjp8W0GfZwqtrBBXCXalh2CSp32QSsOhjWUUPsLTSEn47bAyFUIUuqyC~ADPWtvoYb72jQ9g3KG2zoistquUd2pdPDbFJNtt5w__",
        gameProvider: "Expanse",
        category: "Adventure"  // Added category
    },
    {
        id: 3,
        title: "Big Bad Wolf",
        favorite: false,
        url: "https://s3-alpha-sig.figma.com/img/f527/9f8e/b0aa093c55b0e6ad7c104dcf1c909678?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmApCROR32H3mBgIXd9PJeV0BdkOlP-FqcSuRvH~OU2tMGDdEwMLSmQa0wcaAipZ5VDb6af2XBfQ4AyLavnjZVs~BriztNnVVTk0bYjJ7nOexPbAoxXjSoKNVJmUcjBPHGH9oEWHCh3xyQr2QeoMd30MFuBr43bjU0E~0jF1Bja8Hdv7qdEenibuIl1kveIybqVwen2oGkPnBdZD2kA3jf0uOToa0vli~yCv~adAZ84rjUeRyS9fUWeVgntrcf2W3j1umky-9FJPtjA5-SODWqx~kkKE81R8qvydrJOyu3r31ehUdvlkWKkQb3EdfoMeIV1BmlAtm7sTXDI9pJIXIA__",
        gameProvider: "playTech",
        category: "Slot"  // Added category
    },
    {
        id: 4,
        title: "Book of Egypt",
        favorite: false,
        url: "https://s3-alpha-sig.figma.com/img/1134/d3a9/a7cded82bd00720e16cfd3aa34af2cd9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G04x9YhomGoh4JN-84zj-aQwGhRfgfuaUro6-XIQ5qSCiHttxFr3DWPQnN1UImuIt6Lg6hIeGxUIGWe7MDqTXgzLUZKyTCSSvclWWZ6ot3usf7QpCvgOb7EoMLQNsWIiGajmuEJd~XBTN4oaCwucb-ZwObnh6yktoN3flVudf9kT4FsGzUe4yCXCykMh6Q4ToJHIWkrgpejzcXg7PUxLanL3v2ovd1UbgaZrQf7upy7saf7R-MZ9nk0nK-S540VFDAwcCo6qnh66HRt3avruZpZp6QJ44ZdDOu~VQd9sh7m5EDJefF7SZbpHsUnnswW-oZX-PCPauRpAhnJlPWAWOA__",
        gameProvider: "Expanse",
        category: "Adventure"  // Added category
    },
    {
        id: 5,
        title: "Pirates Power",
        favorite: false,
        url: "https://s3-alpha-sig.figma.com/img/4e09/5048/244b12031799c25318a09a6bc12208a0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPwD6AlX6MR~Hj0ICweXs~SAO0rowvNL0KzaPpTwzSmAHZxSbvG4V2DmIQzzA-XzFAKW-StuTKprvMSN9HX8v5C0bAJNTTS37~p8pjfJ6BSyBiOWbhFdx7~0wbap4qGFQjcAqERdDBmzwK8R7htoOUjcuy~Lhl0iX6EVaZ3Y7q2CR8xIJenxo90PWbhPrMJ25PuZ9o1RuBpC-Secj0WvWRRdS2OQ~WDCraEUV6uro5QXQsSuZxE90Pe2kYU1wjQ9VM516j3T9LM7z2MbDvYBCJzqCQkVKBWlXQPWa-xrwW~XZnmenTgOfxn8FUOxiGdqrt16impdpy8XXJFA6Y~ERg__",
        gameProvider: "Expanse",
        category: "Adventure"  // Added category
    },
    {
        id: 6,
        title: "Crocodile Blitz",
        favorite: false,
        url: "https://s3-alpha-sig.figma.com/img/e52c/b553/8577a76420a441f020f285da17038e22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmPMxPwZcC~Q4yyOsfWlwP9qj8CWRIQw1wNWGtzt2eiRsGkgkXuf8pLoeqX5hm0lTpG3eFmlj5pWootg6hrr7Eg5IOJFrHEMb7lIDwwIV37WijvOkk98ISusZWWIP5454eJDpyccs~T-~8IeJQlPHrRkIOQdNnnCUx9W48grfb5~HGRqqMSsHxkr-uZxEbZ-8p7hoHUSCwL25aZ-LH4mOHGvDbPqZ5v7nlTwp~yHWcivKbQAb4UeRDgWBLuYfG3zt9Z~hU7Xld~Yj~ryhLFlRPdUSUUDMeA54I18L8in9tbAjDEbSV59gU4vwEXCwtnKlB1p9gqen7EN9ofga9kl90uv7Gf4U6doT-P7mt0mDGcfJf0T0wzqJ2CvZ6IrZ4CVQW7C1ANneX7v9Tb-FZwi9quueFFzyv4r3o6~uJwJ5bfhl3B-8p9~bGQjB9kDg__",
        gameProvider: "Pragmatic Play",
        category: "Slot"  // Added category
    },
];