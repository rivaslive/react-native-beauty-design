const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-proposal-numeric-separator'],
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            'react-native-beauty-design/dist': path.resolve(
              __dirname,
              '..',
              'packages/native/src'
            ),
          },
        },
      ],
    ],
  };
};
