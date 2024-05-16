import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebPackConfig(options : BuildOptions) : Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: 'inline-source-map',
        devServer: options.isDev ? buildDevServer(options) : undefined,
        watchOptions: {
            ignored: /node_modules/,
        },
    };
}
