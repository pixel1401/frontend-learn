import { PluginItem } from '@babel/core';

// A plugin is just a function
export default function () : PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const props = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;
                        if (props.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
