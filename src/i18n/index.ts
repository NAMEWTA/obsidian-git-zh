import { zh } from "./zh";

/** Plugin UI language. English is the default. */
export type PluginLanguage = "en" | "zh";

export const PLUGIN_LANGUAGES: readonly PluginLanguage[] = ["en", "zh"];

const listeners = new Set<() => void>();

let current: PluginLanguage = "en";

export function getLocale(): PluginLanguage {
    return current;
}

export function isPluginLanguage(value: unknown): value is PluginLanguage {
    return value === "en" || value === "zh";
}

export function setLocale(language: PluginLanguage): void {
    if (current === language) return;
    current = language;
    for (const listener of listeners) listener();
}

export function onLocaleChange(listener: () => void): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export type I18nVars = Record<
    string,
    string | number | boolean | null | undefined
>;

/**
 * Translate a user-facing English string.
 *
 * English is the source language and the lookup key. With the default locale
 * this returns `message` unchanged (placeholders filled in). Chinese is used
 * only when the user switches the plugin language.
 *
 * Placeholders use `{name}`. Double braces such as `{{date}}` are left intact
 * so commit-message tokens are not treated as i18n placeholders.
 */
export function t(message: string, vars?: I18nVars): string {
    const table = current === "zh" ? zh : undefined;
    const localized = table?.[message] ?? message;
    if (!vars) return localized;
    return localized.replace(
        /(?<!\{)\{(\w+)\}(?!\})/g,
        (match, key: string) => {
            if (!Object.prototype.hasOwnProperty.call(vars, key)) return match;
            const value = vars[key];
            return value == null ? "" : String(value);
        }
    );
}
