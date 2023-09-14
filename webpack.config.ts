import path from 'path';
import { Configuration } from 'webpack';
import { buildWebPackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildOptions } from './config/build/types/config';

export default (env: BuildEnv) => {
    const modeDev: BuildMode = env.mode ?? 'development';

    const options = (modeDev: BuildMode): BuildOptions => ({
        mode: modeDev,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            aliasSrc: path.resolve(__dirname, 'src/'),
        },
        isDev: modeDev === 'development',
        port: env.port ?? 3000,
        project: 'frontend',
    });

    const config: Configuration = buildWebPackConfig(options(modeDev));

    return config;
};
