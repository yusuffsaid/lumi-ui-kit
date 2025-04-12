import { css } from "lit";

export const buttonBase = css`
  button {
    all: unset;
    padding: var(--button-spacing);
    border-radius: var(--border-radius);
    font-size: var(--font-size);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const buttonVariants = css`
  button.default {
    background-color: var(--button-default-bg);
    color: #333;
  }

  button.primary {
    background-color: var(--button-primary-bg);
    color: white;
  }

  button.dashed {
    background-color: var(--button-dashed-bg);
    color: white;
  }

  button.text {
    background: none;
    color: var(--button-text-bg);
  }

  button.link {
    background: none;
    color: var(--button-link-bg);
  }

  button.block {
    width: 100%;
  }

  button.size-default {
    height: var(--button-default-height);
    font-size: var(--font-size);
  }

  button.size-small {
    height: var(--button-small-height);
    font-size: var(--font-size);
  }

  button.size-large {
    height: var(--button-large-height);
    font-size: var(--font-size);
  }
`;
