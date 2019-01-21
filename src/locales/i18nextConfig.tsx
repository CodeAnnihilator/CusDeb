import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import {reactI18nextModule} from 'react-i18next';

import translationEN from 'locales/en.json';
import translationRU from 'locales/ru.json';

const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
};

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(reactI18nextModule)
	.init({
		lng: 'en',
		resources,
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		react: {
			wait: true,
		},
	});

export default i18n;
