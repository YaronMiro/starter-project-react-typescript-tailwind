const path = require(`path`)

const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias')

// Get Typescript path alias.
const aliasMap = configPaths(path.join(__dirname, './tsconfig.paths.json'))

// Add TailWind.
const postCssPlugins = [require('tailwindcss'), require('autoprefixer')]

module.exports = {
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: { alias: aliasMap },
        },
    ],
    style: {
        postcss: {
            plugins: postCssPlugins,
        },
    },
}
