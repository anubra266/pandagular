import type { PandaPlugin } from "@pandacss/types";
import { angularToTsx } from "./angular-to-tsx";
import { getImports } from "./get-imports";

export const plugin: PandaPlugin = {
  name: "angular-plugin",
  hooks: {
    "parser:before": (args) => {
      const fileName = args.filePath.split("/").at(-1);
      if (!fileName) return;

      const isHtml = fileName.endsWith(".html");
      if (!isHtml) return;

      const tsFile = args.filePath.replace(".html", ".ts");
      const imports = getImports(tsFile);
      const content = angularToTsx(args.content);

      const result = imports + content;

      return result;
    },
  },
};
