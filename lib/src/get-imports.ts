import * as fs from "fs";

export function getImports(filePath: string): string {
  try {
    const code = fs.readFileSync(filePath, "utf8");
    const importRegex = /^import\s+.*?(?=;|\n|$)/gm;
    const imports = code.match(importRegex) || [];
    return imports.join("\n");
  } catch {
    console.error(`Error reading file`);
    return "";
  }
}
