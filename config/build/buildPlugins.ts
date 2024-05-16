import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import Html from 'html-webpack-plugin';
import MiniCss from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths, isDev, project, apiUrl,
} : BuildOptions) : WebpackPluginInstance[] {
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
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.locales,
                    to: paths.buildLocales,
                },
            ],
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),

    ];
    // plugins.push(new ExtractTextPlugin());
    if (isDev) {
        // plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}
