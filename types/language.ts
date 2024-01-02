export type Language = "en" | "se";

export const languages: Language[] = ["en", "se"];

export const languageNames: Translated<string> = {
    en: "English",
    se: "Davvisámegiella",
};

export const defaultLanguage: Language = "se";

export type Translated<T> = {
    [LANGUAGE in Language]: T;
};

function hasKey<O extends Object>(obj: O, key: PropertyKey): key is keyof O {
    return key in obj;
}

export function isTranslated(object: Object): object is Translated<unknown> {
    languages.forEach((language) => {
        if (!hasKey(object, language)) {
            return false;
        }
    });
    return true;
}

export type Translatable<T> = T & {
    language: Language;
};

export function toTranslated<T extends object>(
    translatables: Translatable<T>[]
) {
    return Object.fromEntries(
        translatables.map((translatable) => {
            const { language, ...other } = translatable;
            return [language, other];
        })
    ) as Translated<T>;
}
