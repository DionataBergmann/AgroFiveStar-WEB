const moduleExports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", 'url-loader'],
    });

    return config;
  },
  images: {
    disableStaticImages: true
  }
};

module.exports = moduleExports
