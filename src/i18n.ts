
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import BackEnd from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"



i18n
.use(BackEnd)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: "fa",
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: "/assets/locals/{{lng}}/{{ns}}.json"
    },
    detection: {
        order: ['path', 'cookie', 'sessionStorage', 'localStorage'],
    }
})

export default i18n
