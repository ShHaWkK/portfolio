import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.FRENCH,
      Locales.SPANISH,
      Locales.GERMAN,
      Locales.RUSSIAN,
      // Vous pouvez ajouter d'autres langues selon vos besoins
    ],
    defaultLocale: Locales.FRENCH,
  },
};

export default config;