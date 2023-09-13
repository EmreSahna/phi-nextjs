import {getCategoriesOnlySlug, getPostsByCategoryName} from "@/lib/api";

export default async function Category({params}) {
    const { slug } = params
    const res = await getPostsByCategoryName(slug)

    return (
        <>
            {
                res.map((post,index) => {
                    post = post.attributes
                    return (
                        <p key={index}>{post.Title}</p>
                    )
                })
            }
        </>
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