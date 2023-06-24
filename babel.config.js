module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src/'],
          alias: [
            { api: './src/api' },
            { assets: './src/assets' },
            { context: './src/context' },
            { components: './src/components' },
            { features: './src/features' },
            { helpers: './src/helpers' },
            { hooks: './src/hooks' },
            { navigation: './src/navigation' },
            { screens: './src/screens' },
            { services: './src/services' },
            { store: './src/store' },
            { theme: './src/theme' },
            { translations: './src/translations' },
            { types: './src/types' },
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react-native-paper/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
