import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

const baseSources = [
  'tokens/Color Primitives/Value.json',
  'tokens/Typography Primitives/Default.json',
  'tokens/Size/Default.json',
];

const sharedConfig = {
  preprocessors: ['tokens-studio'],
  log: {
    warnings: 'warn',
    verbosity: 'default',
    errors: { brokenReferences: 'console' },
  },
};

function createThemeDictionary(themeFile, destination) {
  return new StyleDictionary({
    ...sharedConfig,
    source: [...baseSources, themeFile],
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        prefix: 'meddle',
        buildPath: 'public/css/',
        files: [
          {
            destination,
            format: 'css/variables',
          },
        ],
      },
    },
  });
}

const sdLight = createThemeDictionary('tokens/Color/MeDS Light.json', 'light.css');
const sdDark = createThemeDictionary('tokens/Color/MeDS Dark.json', 'dark.css');

await Promise.all([sdLight.buildAllPlatforms(), sdDark.buildAllPlatforms()]);
