import { atom } from "jotai";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import ja from "../locales/ja.json";
import zh from "../locales/zh.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";
import { atomWithStorage } from "jotai/utils";

// Define the shape of the translations
type Translations = typeof en;
type Locales = "en" | "ru" | "ja" | "zh" | "es" | "fr";

const translations: Record<Locales, Translations> = {
  en,
  ru,
  ja,
  zh,
  es,
  fr,
};

// Create a type for nested key paths
type NestedKeyOf<Object> = Object extends object
  ? {
      [Key in keyof Object]: Key extends string | number
        ? Key | `${Key}.${NestedKeyOf<Object[Key]>}`
        : never;
    }[keyof Object]
  : never;

// Utility function to access nested translation keys
const getNestedTranslation = (
  obj: Translations,
  key: NestedKeyOf<Translations>,
): string => {
  // Split the key into an array of nested parts
  const keyParts = key.split(".");

  // Traverse the object using the key parts
  const result = keyParts.reduce((currentObj, part) => {
    // If currentObj is falsy or doesn't have the property, return undefined
    return currentObj && currentObj[part];
  }, obj);

  // Return the found translation or the original key if not found
  return result || key;
};

// Atom to store the current locale
export const localeAtom = atomWithStorage<Locales>("language", "en");

// Atom to get the translation function based on the current locale
export const translationAtom = atom((get) => {
  const locale = get(localeAtom);

  return (
    key: NestedKeyOf<Translations>,
    params: Record<string, string> = {},
  ): string => {
    const template = getNestedTranslation(translations[locale], key);

    // Replace placeholders with parameters, e.g., {name} => John
    return Object.keys(params).reduce(
      (str, paramKey) => str.replace(`{${paramKey}}`, params[paramKey]),
      template,
    );
  };
});
