export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/strapi/',
        },
        sitemap: 'https://phihaber.com/sitemap.xml',
    }
}