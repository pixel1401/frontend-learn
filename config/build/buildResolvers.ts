import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";


export function buildResolvers (options : BuildOptions) : ResolveOptions {
    return {
        alias: {
            '@': options.paths.aliasSrc,
        },
        preferAbsolute : true,
        extensions : ['.tsx' , '.ts' , '.js'],
    }
}