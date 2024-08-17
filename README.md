# pandagular

Angular plugin for pandacss

## Usage

Follow the [pandacss installation guide](https://panda-css.com/docs/installation/cli) for CLI, but keep the following in mind:

- **Panda Config**

```js
import { defineConfig } from "@pandacss/dev";
import { plugin } from "pandagular";

export default defineConfig({
  plugins: [plugin],
  strictTokens: true,
  // Add html if you'll use in templates
  include: ["./src/**/*.{ts,html}"],
  //...
});
```

- **Styles.css**

```css
@import url(../styled-system/styles.css);
```

- **\*.component.ts**

```ts
import { css } from "../../styled-system/css";

//...
export class AngularComponent {
  css = css;
}
```

- **\*.component.html**

```html
<div [className]="css({ p: '4', bg: 'red.500' color: 'white' })">
  <h1 [className]="css({ textStyle: '2xl', fontWeight: 'bold' })">Hello World</h1>
</div>
```

## License

MIT
