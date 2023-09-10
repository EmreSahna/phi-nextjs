import RSS from 'rss';
import {getFirstPostsByNumb} from "@/lib/api";

const MAX_POSTS = 50;

export async function GET() {
    const posts = await getFirstPostsByNumb(MAX_POSTS)
    const feed = new RSS({
        title: 'PhiHaber',
        description: 'Doğru haberlerin yeri',
        site_url: 'http://localhost:3000',
        feed_url: `http://localhost:3000/feed.xml`,
        copyright: `${new Date().getFullYear()} PhiHaber`,
        language: 'tr-TR',
        pubDate: new Date(),
    });

    posts.map(post => {
        feed.item({
            title: post.title,
            url: `http://localhost:3000/${post.categories.nodes[0].slug}/${post.slug}`,
            date: post.date,
            categories: [post.categories.nodes[0].slug],
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'text/xml; charset=utf-8',
        },
    });
}