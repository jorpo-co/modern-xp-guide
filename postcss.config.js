import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isDev = process.env.HUGO_ENVIRONMENT === 'development';

export default {
  plugins: [
    postcssImport({
      path: [path.resolve(__dirname, 'assets/css')],
    }),
    ...(isDev ? [] : [autoprefixer]),
  ],
  map: isDev ? { inline: true } : false,
};