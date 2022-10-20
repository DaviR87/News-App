import { News } from "../models/news";

export const NEWS: News[] = [
    {
        description: "Il corso di Angular per CAGS procede alla grande",
        important: false,
        publishDate: new Date(2022, 0, 1),
        title: "corso angular"
    }, {
        description: "Ganna stabilisce il nuovo record dell'ora",
        important: false,
        publishDate: new Date(2022, 10, 15),
        title: "new world record"
    }, {
        description: "Crisi Ferragnez",
        important: false,
        publishDate: new Date(2022, 9, 23),
        title: "gossip"
    }, {
        description: "Esito delle votazioni ha favorito il partito della birra austriaco",
        important: true,
        publishDate: new Date(2022, 10, 18),
        title: "elezioni parlamento"
    }
];