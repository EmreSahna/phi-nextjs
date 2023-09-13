import {getCategoriesOnlySlug, getSinglePost} from "@/lib/api";

export default async function Page({ params }) {
    const { slug } = params

    const res = await getSinglePost(slug)
    const post = res[0].attributes

    return(
        <div className="max-w-[1180px] mx-auto article">
            <h1>{post.Title}</h1>
            <div className="mb-6">
                <article dangerouslySetInnerHTML={{__html: post.Content}}></article>
            </div>
            <div className="text-center">
                <span className="font-semibold text-[16px] text-yblue">İlginizi Çekebilir</span>
                <hr/>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const res = await getCategoriesOnlySlug()

    return res.map((post) => ({
        slug: post.attributes.Slug
    }))
}