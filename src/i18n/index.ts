import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { aboutPage } from './i18n-about-page'
import { homePage } from './i18n-home-page'
import { infoWindow } from './i18n-info-window'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: { ...aboutPage.en },
      home: { ...homePage.en },
      infoWindow: { ...infoWindow.en },
    },
    rus: {
      about: { ...aboutPage.rus },
      home: { ...homePage.rus },
      infoWindow: { ...infoWindow.rus },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
