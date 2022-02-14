
export const parameters = {
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: true,
      disable: true
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}