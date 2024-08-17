import { describe, expect, test } from "vitest";
import { angularToTsx } from "../src/angular-to-tsx";

describe("extract angular templates", () => {
  test("angular template", () => {
    const code = `<main>
  <div
    [className]="
      css({
        color: 'green.400',
        textStyle: '6xl',
        fontWeight: 'bold'
      })
    "
  >
    Hello World
  </div>
</main>

<router-outlet />
`;

    const transformed = angularToTsx(code);
    expect(transformed).toMatchInlineSnapshot(`
      "const render = (
      <main>
        <div
          className={
            css({
              color: 'green.400',
              textStyle: '6xl',
              fontWeight: 'bold'
            })
          }
        >
          Hello World
        </div>
      </main>

      <router-outlet />
      )"
    `);
  });
});
