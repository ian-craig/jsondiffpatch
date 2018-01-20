import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  { // browser-friendly UMD build
    input: 'src/main.js',
    external: [
      // external node modules
      'chalk'
      // 'diff-match-patch'
    ],
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      replace({ 'process.browser': true }),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve(), // so Rollup can find node modules
      commonjs() // so Rollup can convert node modules to ES modules
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/main.js',
    external: [
      // external node modules
      'diff-match-patch',
      'chalk',
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      }, {
        file: pkg.module,
        format: 'es'
      }
    ]
  },

  { // build that runs tests
    input: 'test/index.js',
    external: [
      // external node modules
      'chalk',
      'diff-match-patch',
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
    ],
    output: {
      name: pkg.name + '-test',
      file: pkg.main.replace('.js', '.test.js'),
      format: 'cjs'
    },
  },
  { // browser-friendly UMD build that runs tests
    input: 'test/index.js',
    external: [
      // external node modules
      'chalk'
      // 'diff-match-patch'
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      replace({ 'process.browser': true }),
      resolve(), // so Rollup can find node modules
      commonjs() // so Rollup can convert node modules to ES modules
    ],
    output: {
      name: pkg.name + '-test',
      file: pkg.browser.replace('.js', '.test.js'),
      format: 'umd'
    },
  },

];
