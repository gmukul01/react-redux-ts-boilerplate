module.exports = function(api) {
    api.cache(true);
    const presets = [
            [
                '@babel/preset-env',
                {
                    modules: false
                }
            ],
            '@babel/preset-typescript',
            '@babel/preset-react'
        ],
        plugins = [
            [
                'babel-plugin-styled-components',
                {
                    pure: true
                }
            ],
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread'
        ];

    if (process.env.NODE_ENV === 'development') {
        plugins.push('react-hot-loader/babel');
    }

    return { presets, plugins };
};
