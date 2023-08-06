
import webpack , { WebpackPluginInstance } from "webpack";
import Html from "html-webpack-plugin";
import MiniCss from "mini-css-extract-plugin";
import path from "path";
import { BuildOptions } from "./types/config";

export function buildPlugins ({paths} : BuildOptions) : WebpackPluginInstance[] {
    return [
        new Html({
            template : paths.html
        }),
        new MiniCss({
            filename : 'css/[name].[contenthash:8].css',
            chunkFilename : 'css/[name].[contenthash:8].css'
        }),
        new webpack.ProgressPlugin()
    ]
}