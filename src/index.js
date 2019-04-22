module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path, state) {
                const { removeImport = true } = state.opts;
                if (removeImport) {
                    path.remove();
                }
            },
            ExportDefaultDeclaration(path, state) {
                const { removeExport = true, removeExportDefault = true } = state.opts;
                if (removeExportDefault && removeExport) {
                    path.remove();
                }
            },
            ExportNamedDeclaration(path, state) {
                const { removeExport = true, preseveNamedDeclaration = true } = state.opts;
                if (removeExport) {
                    if (preseveNamedDeclaration && path.node.declaration) {
                        path.replaceWith(path.node.declaration);
                    } else {
                        path.remove();
                    }
                }
            }
        }
    };
};