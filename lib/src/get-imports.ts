import * as ts from "typescript";
import * as fs from "fs";

export function getImports(filePath: string): string {
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Create a SourceFile object
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  );

  let imports = "";

  function visit(node: ts.Node) {
    if (ts.isImportDeclaration(node) || ts.isImportEqualsDeclaration(node)) {
      imports += fileContent.substring(node.pos, node.end) + "\n";
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return imports.trim();
}
