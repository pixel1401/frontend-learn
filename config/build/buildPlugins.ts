import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import Html from 'html-webpack-plugin';
import MiniCss from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev } : BuildOptions) : WebpackPluginInstance[] {
    const plugins = [
        new Html({
            template: paths.html,
        }),
        new MiniCss({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),

    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
