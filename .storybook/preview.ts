import type { Preview } from "@storybook/web-components";
import { html } from "lit";
import { defaultTheme } from "../src/styles/token";
import "../src/components/theme-provider/theme-provider";
import "../src/styles/global.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (story) =>
    html`
      <lumi-theme-provider .theme=${defaultTheme}>
        ${story()}
      </lumi-theme-provider>
    `,
];

export default preview;
