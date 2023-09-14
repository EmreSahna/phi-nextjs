import {getCategoriesForSitemap, getPostsForSitemap} from "@/lib/api";

export default async function sitemap() {
    const url = "https://phihaber.com"
    const category = await getCategoriesForSitemap();
    const post = await getPostsForSitemap();

    const categories = category.map(category => {
        return {
            url: `${url}/${category.attributes.Slug}`,
            lastModified: category.attributes.updatedAt,
        };
    });

    const posts = post.map(post => {
        return {
            url: `${url}/${post.attributes.Slug}`,
            lastModified: post.attributes.updatedAt,
        };
    });

    return [
        {
            url: `${url}`,
            lastModified: new Date(),
        },
        ...posts,
        ...categories,
    ];
}