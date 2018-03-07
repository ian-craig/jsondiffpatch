import fs from 'fs';
import path from 'path';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import istanbul from 'rollup-plugin-istanbul';
import pkg from './package.json';
import Visualizer from 'rollup-plugin-visualizer';

/**
 * browser-friendly UMD build
 * @param {string} dirName Output destination directory
 */
export function createBrowserUmdBuildConfig(dirName = "dist") {
  return {
    input: 'src/main.js',
    external: [
      // external node modules
      // 'diff-match-patch'
    ],
    output: {
      name: pkg.name,
      file: pkg.browser.replace(/^dist\//, `${dirName}/`),
      format: 'umd',
    },
    plugins: [
      replace({ 'process.browser': true }),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers'],
      }),
      resolve(), // so Rollup can find node modules
      commonjs(), // so Rollup can convert node modules to ES modules
    ],
  }
};

/**
 * browser-friendly UMD build, slim (no diff-match-patch, no formatters)
 * @param {string} dirName Output destination directory
 */
export function createSlimBrowserUmdBuildConfig(dirName = "dist") {
  return {
    input: 'src/main.js',
    external: [
      // external node modules
      'diff-match-patch',
    ],
    output: {
      name: pkg.name,
      file: pkg.browser.replace('.js', '.slim.js').replace(/^dist\//, `${dirName}/`),
      format: 'umd',
    },
    plugins: [
      new Visualizer({
        filename: pkg.browser.replace('.js', '.slim.stats.html').replace(/^dist\//, `${dirName}/`),
      }),
      replace({ 'process.browser': true }),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers'],
      }),
      resolve(), // so Rollup can find node modules
      commonjs(), // so Rollup can convert node modules to ES modules
    ],
  };
};

/**
 * CommonJS (for Node) and ES module (for bundlers) build.
 * @param {string} dirName Output destination directory
 * @param {boolean} includeCoverage Whether to compute test coverage and include it in outputted .js files
 */
export function createModuleBuild(dirName = "dist", includeCoverage = false) {
  var plugins = [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ];
  if (includeCoverage) {
    plugins.push(
      istanbul({
        include: ['src/**/*.js', 'src/formatters/*.js'],
        exclude: ['test/**/*.js', 'node_modules/**'],
      })
    );
  }
  if (dirName === "dist") {
    plugins.push(copySrcFileToDist('index.d.ts'));
  }

  return {
    input: 'src/main.js',
    external: [
      // external node modules
      'diff-match-patch',
    ],
    plugins,
    output: [
      {
        file: pkg.main.replace(/^dist\//, `${dirName}/`),
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module.replace(/^dist\//, `${dirName}/`),
        format: 'es',
        sourcemap: true,
      },
    ],
  };
  return config;
};

/**
 * Build that runs tests
 * @param {string} dirName Output destination directory
 * @param {boolean} includeCoverage Whether to compute test coverage and include it in outputted .js files
 */
export function createTestBuild(dirName = "dist", includeCoverage = false) {
  var plugins = [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ];
  if (includeCoverage) {
    plugins.push(
      istanbul({
        include: ['src/**/*.js', 'src/formatters/*.js'],
        exclude: ['test/**/*.js', 'node_modules/**'],
      })
    );
  }

  return {
    input: 'test/index.js',
    external: [
      // external node modules
      'diff-match-patch',
    ],
    plugins,
    output: {
      name: pkg.name + '-test',
      file: pkg.main.replace('.js', '.test.js').replace(/^dist\//, `${dirName}/`),
      format: 'cjs',
      sourcemap: true,
    },
  };
};

/**
 * Browser-friendly UMD build that runs tests
 * @param {string} dirName Output destination directory
 * @param {boolean} includeCoverage Whether to compute test coverage and include it in outputted .js files
 */
export var createBrowserTestBuild = (dirName = "dist", includeCoverage = false) => {
  var plugins = [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    replace({ 'process.browser': true }),
    resolve(), // so Rollup can find node modules
    commonjs(), // so Rollup can convert node modules to ES modules
  ];
  if (includeCoverage) {
    plugins.push(
      istanbul({
        include: ['src/**/*.js', 'src/formatters/*.js'],
        exclude: ['test/**/*.js', 'node_modules/**'],
      })
    );
  }

  return {
    input: 'test/index.js',
    external: [
      // external node modules
      // 'diff-match-patch'
    ],
    plugins,
    output: {
      name: pkg.name + '-test',
      file: pkg.browser.replace('.js', '.test.js').replace(/^dist\//, `${dirName}/`),
      sourcemap: true,
      format: 'umd',
    }
  };
};

function copySrcFileToDist(filename) {
  let executed = false;
  return {
    ongenerate: () => {
      if (executed) {
        return;
      }
      fs.writeFileSync(
        path.join(__dirname, 'dist', filename),
        fs.readFileSync(path.join(__dirname, 'src', filename)),
      );
      console.log(`src/${filename} → dist/${filename} (copied)`);
      executed = true;
    },
  };
}
