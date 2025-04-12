export const themeSettings = {
  "primary-color": "#007bff",
  "success-color": "#52c41a",
  "warning-color": "#faad14",
  "error-color": "#dc3545",
  "border-radius": "6px",
  "font-size": "1rem",
  spacing: "8px",
};

export const defaultTheme = {
  ...themeSettings,
  "button-default-bg": "transparent",
  "button-primary-bg": "#007bff",
  "button-dashed-bg": "transparent",
  "button-text-bg": "transparent",
  "button-link-bg": "transparent",
  "button-error-bg": themeSettings["error-color"],
  "button-spacing": "0 1rem ",
  "button-small-height": "1.50rem", // 24px
  "button-default-height": "2rem", // 32px
  "button-large-height": "2.5rem", // 40px
  "font-family": "Roboto",
};
