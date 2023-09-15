import {getCategoriesOnlySlug, getPostsByCategoryName} from "@/lib/api";

export default async function Category({params}) {
    const { slug } = params
    const res = await getPostsByCategoryName(slug)

    return (
        <div className="mx-auto max-w-[1180px] my-6 flex">
            {
                res.map((post,index) => {
                    post = post.attributes
                    return (
                        <div className="bg-yblue h-[250px] w-1/2 mx-4" key={index}>
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