module.exports = function(api) {
    const presets = ['@babel/react', '@babel/typescript'],
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

    if (api.env('test')) {
        presets.push(['@babel/env']);
    } else {
        presets.push([
            '@babel/env',
            {
                modules: false,
                targets: { browsers: 'last 2 versions' }
            }
        ]);
    }

    return { presets, plugins };
};
