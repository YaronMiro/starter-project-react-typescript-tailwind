const cracoAlias = require('craco-alias')

// Add TailWind.
const postCssPlugins = [require('tailwindcss'), require('autoprefixer')]

module.exports = {
    plugins: [
        {
            plugin: cracoAlias,
            options: {
                source: 'tsconfig',
                // baseUrl SHOULD be <specified></specified>
                // plugin does not take it from tsconfig
                baseUrl: './src',
                /* tsConfigPath should point to the file where "baseUrl" and "paths" 
            are specified*/
                tsConfigPath: './tsconfig.paths.json',
            },
        },
    ],
    style: {
        postcss: {
            plugins: postCssPlugins,
        },
    },
}
