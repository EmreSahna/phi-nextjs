export default function robots() {
    return {
        rules:
        [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/strapi/',
            },
            {
                userAgent: 'Twitterbot',
                allow: '/',
                disallow: '',
            }
        ],
        sitemap: 'https://phihaber.com/sitemap.xml',
    }
}