import { LocaleInterface } from "../types";

// Get default language locale
const getDefaultLanguage = (localeObject: LocaleInterface) => {
  return getAllLanguages(localeObject)[0];
};

// Get all language lists from locale. returns object
const getAllLanguages = (localeObject: LocaleInterface) => {
  return Object.keys(localeObject);
};

// Format language name se-SE => SE
const formatLanguageName = (language: string): string => {
  return language.split("-")[0].toUpperCase();
};

export { getDefaultLanguage, getAllLanguages, formatLanguageName };
