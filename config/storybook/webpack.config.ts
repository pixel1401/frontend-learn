import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        aliasSrc: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, '..', '..', 'src'),
    };
    config!.resolve!.modules = [
        paths.aliasSrc,
        'node_modules',
    ];
    config!.resolve!.alias = {};
    config!.resolve!.extensions!.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules.push({
        test: /\.(ttf|woff2|woff)$/i,
        type: 'asset/resource',
        dependency: { not: ['url'] },
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules.push(buildCssLoader(true));

    config.plugins?.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __PROJECT__: JSON.stringify('storybook'),
        __API__: JSON.stringify('http://localhost:8000'),
    }));

    return config;
};
