import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from "../public/locale/uzbek/Uzbek.json";
import engTranslation from "../public/locale/english/English.json";
i18n
  
  .use(Backend)
 
  .use(LanguageDetector)
  
  .use(initReactI18next)

  .init({
    fallbackLng: 'en',
    lng: i18n.language,
    debug: true,
    resources:{
        uz:{translation: uzTranslation},
        eng:{translation: engTranslation}

    },

    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;