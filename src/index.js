module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path) {
                path.remove();
            },
            ExportDefaultDeclaration(path) {
                path.remove();
            },
            ExportNamedDeclaration(path) {
                if (path.node.declaration) {
                    path.replaceWith(path.node.declaration);
                }
            }
        }
    };
};