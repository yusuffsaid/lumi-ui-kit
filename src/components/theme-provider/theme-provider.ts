import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lumi-theme-provider")
export class LumiThemeProvider extends LitElement {
  @property({ type: Object }) theme = {};

  connectedCallback() {
    super.connectedCallback();
    this.applyTheme(this.theme);
  }

  applyTheme(theme: Record<string, string>) {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }

  render() {
    return html`<slot></slot>`;
  }
}
