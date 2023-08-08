import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";


export function buildResolvers (options : BuildOptions) : ResolveOptions {
    return {
        alias: {},
        modules :   [options.paths.aliasSrc , 'node_modules'],
        preferAbsolute : true,
        mainFiles : ['index'],
        extensions : ['.tsx' , '.ts' , '.js'],
    }
}