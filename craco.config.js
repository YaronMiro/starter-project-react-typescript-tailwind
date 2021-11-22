// Add TailWind.
const postCssPlugins = [require('tailwindcss'), require('autoprefixer')]

module.exports = {
    style: {
        postcss: {
            plugins: postCssPlugins,
        },
    },
}
