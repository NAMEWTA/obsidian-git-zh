import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { getLocale, setLocale, t } from "../src/i18n";
import { zh } from "../src/i18n/zh";

function walk(dir: string, acc: string[] = []): string[] {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name === "node_modules" || entry.name === "i18n") continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, acc);
        else if (/\.(ts|svelte)$/.test(entry.name)) acc.push(full);
    }
    return acc;
}

/** String literals passed to t(), ignoring templates with ${}. */
function extractKeys(source: string): string[] {
    const keys: string[] = [];
    const re = /\bt\(\s*(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
    for (const match of source.matchAll(re)) {
        const quote = match[1];
        let inner = match[2] ?? "";
        if (quote !== "`") {
            inner = inner
                .replace(/\\n/g, "\n")
                .replace(/\\"/g, '"')
                .replace(/\\'/g, "'")
                .replace(/\\\\/g, "\\");
        }
        if (inner.includes("${")) continue;
        keys.push(inner);
    }
    return keys;
}

describe("i18n", () => {
    it("defaults to English and leaves the source string unchanged", () => {
        setLocale("en");
        expect(getLocale()).toBe("en");
        expect(t("Commit")).toBe("Commit");
        expect(t("Committed {count} files", { count: 2 })).toBe(
            "Committed 2 files"
        );
        expect(t("vault backup: {{date}}")).toBe("vault backup: {{date}}");
    });

    it("switches to Chinese and fills placeholders without touching {{tokens}}", () => {
        setLocale("zh");
        expect(t("Commit")).toBe("提交");
        expect(t("No changes to commit")).toBe("没有可提交的更改");
        expect(t("Switched to {branch}", { branch: "main" })).toBe(
            "已切换到 main"
        );
        expect(
            t(
                "Available placeholders: {{date}} (see below), {{hostname}} (see below), {{numFiles}} (number of changed files in the commit) and {{files}} (changed files in commit message)."
            )
        ).toContain("{{date}}");
        expect(
            t(
                "Available placeholders: {{date}} (see below), {{hostname}} (see below), {{numFiles}} (number of changed files in the commit) and {{files}} (changed files in commit message)."
            )
        ).toContain("{{files}}");
        setLocale("en");
    });

    it("has a Chinese translation for every t() literal", () => {
        const missing = new Set<string>();
        for (const file of walk(path.resolve("src"))) {
            const source = fs.readFileSync(file, "utf8");
            for (const key of extractKeys(source)) {
                if (!(key in zh)) missing.add(key);
            }
        }
        expect([...missing]).toEqual([]);
    });
});
