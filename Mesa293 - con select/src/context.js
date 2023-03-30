import { createContext } from 'react';
import EN from "./languages/english.json"
import ES from "./languages/spanish.json"
import PTBR from "./languages/portuguese.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    spanish: {
        id: "ES",
        text: ES
    },
    portuguese: {
        id: "PTBR",
        text: PTBR
    }
    /* SUGERENCIA: agregue los demás idiomas */
};

/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
const LanguageContext = createContext(languages.english)

export default LanguageContext;