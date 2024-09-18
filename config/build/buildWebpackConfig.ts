import webpack from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLouders } from './buildLouders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
          filename: '[name].js',
          path: paths.build,
          clean: true
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLouders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
      };    
}