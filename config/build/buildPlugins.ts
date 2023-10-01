import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import Html from 'html-webpack-plugin';
import MiniCss from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, project } : BuildOptions) : WebpackPluginInstance[] {
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
            __PROJECT__: JSON.stringify(project),
        }),

    ];

    if (isDev) {
        // plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}
