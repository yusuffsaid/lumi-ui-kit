import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "./button";
import type { ButtonProps } from "./button.types";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: "lumi-button",
  argTypes: {
    type: {
      control: "select",
      options: ["default", "primary", "danger", "text"],
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    type: "default",
    size: "default",
    disabled: false,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Kapsayıcı bir buton bileşeni. `type`, `size`, `block`, `loading` gibi özelliklerle kontrol edilebilir.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  render: (args) => html`<lumi-button ...=${args}>Default</lumi-button>`,
};

export const Primary: Story = {
  args: {
    type: "primary",
    size: "large",
  },
  render: (args) => {
    console.log("args", args);
    return html`<lumi-button ...=${args}> Primary </lumi-button>`;
  },
};

export const Dashed: Story = {
  args: {
    type: "dashed",
  },
  render: ({ type }) => html`<lumi-button type=${type}>Dashed</lumi-button>`,
};

export const Text: Story = {
  args: {
    type: "text",
  },
  render: ({ type }) => html`<lumi-button type=${type}>Text</lumi-button>`,
};

export const Link: Story = {
  args: {
    type: "link",
  },
  render: ({ type }) => html`<lumi-button type=${type}>Link</lumi-button>`,
};
