import { createI18n } from "vue-i18n";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

// <p>{{ $t('main.welcome', {company: 'Lokalise'}) }}</p>
//   <p>{{ $tc('main.new_message', 10) }}</p>
//   <p>{{ $d(new Date(), 'short') }}</p>
//   <p>{{ $n(100, 'currency') }}</p>
//   <SwitchLocal/>

const datetimeFormats = {
  en: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  },
  fr: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  },
};

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
    },
  },
  fr: {
    currency: {
      style: "currency",
      currency: "EUR",
    },
  },
};

const i18n = createI18n({
  locale: "fr",
  fallbackLocale: "fr",
  messages: { fr, en },
  datetimeFormats,
  numberFormats,
  globalInjection: true,
  warnHtmlInMessage: "off",
});

const changeLocale = (locale: string): void => {
  i18n.global.locale = locale;
};

export default i18n;
export { i18n, changeLocale };
