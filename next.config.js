const path = require('path')

module.exports = {
    // distDir: 'build',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
}