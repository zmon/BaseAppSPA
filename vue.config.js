module.exports = {
    devServer: {
        https: true
    },
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
        config.module.rules.delete('eslint');
    },

}
