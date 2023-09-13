import RSS from 'rss';
import {getFirstPostsByNumb} from "@/lib/api";

const MAX_POSTS = 50;

export async function GET() {
    const posts = await getFirstPostsByNumb(MAX_POSTS)
    const feed = new RSS({
        title: 'PhiHaber',
        description: 'Doğru haberlerin yeri',
        site_url: 'http://3.75.201.225',
        feed_url: `http://3.75.201.225/feed.xml`,
        copyright: `${new Date().getFullYear()} PhiHaber`,
        language: 'tr-TR',
        pubDate: new Date(),
    });

    posts.map(post => {
        post = post.attributes
        feed.item({
            title: post.Title,
            url: `http://3.75.201.225/${post.categories.data[0].attributes.Slug}/${post.Slug}`,
            date: post.createdAt,
            categories: [post.categories.data[0].attributes.Slug],
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'text/xml; charset=utf-8',
        },
    });
}