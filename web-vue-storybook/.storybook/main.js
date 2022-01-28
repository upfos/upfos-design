const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    // "../../../"
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  webpackFinal: (config) => {
    config.resolve.alias['@web-vue'] = path.resolve(
      process.cwd(),
      '../web-vue'
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });
    
    return config;
  }
}