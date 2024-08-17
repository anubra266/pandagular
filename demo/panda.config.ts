import { defineConfig } from '@pandacss/dev';
import { plugin } from 'pandagular';

export default defineConfig({
  plugins: [plugin],
  strictTokens: true,
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,html}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
