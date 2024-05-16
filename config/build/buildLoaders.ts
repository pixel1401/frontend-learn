import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options : BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

    const cssLoader = buildCssLoader(isDev);

    // Если не используем тайпскрипт - нужен babel-loader
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const fontLoader = {
        test: /\.(ttf|woff2|woff)$/i,
        type: 'asset/resource',
        dependency: { not: ['url'] },
    };

    return [
        fontLoader,
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
