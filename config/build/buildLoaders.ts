import webpack, { WebpackError } from "webpack"
import MiniCss from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";


export function buildLoaders({isDev} : BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ?  "style-loader" : MiniCss.loader ,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                   modules: {
                    auto: (path : string) => Boolean(path.includes('.module')) ? true : false ,
                    localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]",
                  },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
            
        ],
    }


    return [
        typescriptLoader,
        scssLoader
    ]
}