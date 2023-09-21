import {getCategoriesOnlySlug, getPostsByCategoryName} from "@/lib/api";

export default async function Category({params}) {
    const { slug } = params
    const res = await getPostsByCategoryName(slug)

    const chunkSize = 3;
    const groupedPosts = [];

    for (let i = 0; i < res.length; i += chunkSize) {
        groupedPosts.push(res.slice(i, i + chunkSize));
    }

    const renderedComponents = groupedPosts.map((chunk, index) => (
        <div className="h-[250px] flex mt-4 font-semibold w-full" key={index}>
            {
                chunk.map((post, index) => {
                    post = post.attributes
                    return (
                        <div className="w-1/3 h-full px-2" key={index}>
                            <a href={"/haber/"+post.Slug} className="relative">
                                <img src={process.env.IMG_URL + post.Banner.data.attributes.url} alt={post.Banner.data.attributes.alternativeText} className="object-cover w-full h-full" />
                                <div className="absolute bottom-0 bg-yblue w-full p-2">
                                    <span className="text-[#fff] text-lg">{post.Title}</span>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    ));

    return (
        <div className="mx-auto max-w-[1180px] my-6 flex flex-wrap">
            {
                renderedComponents
            }
        </div>
    )
}

export async function generateStaticParams() {
    const posts = await getCategoriesOnlySlug()
    return posts.map((slug) => (
        {
            category: slug.attributes.Slug
        }
    ))
}