module.exports = {
  webpack: (config) => {
    config.externals = {
      fs: 'fs',
    };

    return config;
  },
};
