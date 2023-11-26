import path from 'path';
import { Configuration } from 'webpack';
import { buildWebPackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildOptions } from './config/build/types/config';

export default (env: BuildEnv) => {
    const modeDev: BuildMode = env.mode ?? 'development';
    const apiUrl: string = env.mode ?? 'http://localhost:8000';

    const options = (modeDev: BuildMode): BuildOptions => ({
        mode: modeDev,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            aliasSrc: path.resolve(__dirname, 'src/'),
            locales: path.resolve(__dirname, 'public', 'locales'),
            buildLocales: path.resolve(__dirname, 'build', 'locales'),
        },
        isDev: modeDev === 'development',
        port: env.port ?? 3000,
        project: 'frontend',
        apiUrl,
    });

    const config: Configuration = buildWebPackConfig(options(modeDev));

    return config;
};
