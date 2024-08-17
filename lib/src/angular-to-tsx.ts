import MagicString from 'magic-string';

const angularAttributeRegex = /\[(\w+)\]="([^"]+)"/g;

export const angularToTsx = (code: string) => {
  try {
    const original = new MagicString(code);

    // Replace Angular property bindings with JSX-style attributes
    let match: RegExpExecArray | null;
    while ((match = angularAttributeRegex.exec(code)) != null) {
      const [fullMatch, attrName, attrValue] = match;
      let newAttr = `${attrName}={${attrValue}}`;

      original.overwrite(match.index, match.index + fullMatch.length, newAttr);
    }

    // Wrap the entire content in fragment tags
    const transformedContent = original.toString().trim();
    const transformed = `const render = (\n${transformedContent}\n)`;

    return transformed;
  } catch (err) {
    return '';
  }
};
