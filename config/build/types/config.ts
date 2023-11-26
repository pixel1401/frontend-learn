export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry : string;
    build : string;
    html : string;
    aliasSrc : string;
    locales: string;
    buildLocales: string;
}

export interface BuildEnv {
    mode : BuildMode,
    port : number,
    apiUrl: string
}

export interface BuildOptions {
    mode : BuildMode,
    paths: BuildPaths,
    isDev : boolean,
    port : number,
    apiUrl: string,
    project: 'storybook' | 'jest' | 'frontend'
}
