import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonBase, buttonVariants } from "./button.styles";
import type { ButtonType } from "./button.types";

@customElement("lumi-button")
export class LumiButton extends LitElement {
  @property({ type: String }) type: ButtonType = "default";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) size: "small" | "default" | "large" = "default";

  static styles = [buttonBase, buttonVariants];

  render() {
    const classes = [this.type, `size-${this.size}`].join(" ");

    return html`
      <button class=${classes} ?disabled=${this.disabled}>
        ${this.loading ? html`<span class="spinner">⏳</span>` : ""}
        <slot></slot>
      </button>
    `;
  }
}
