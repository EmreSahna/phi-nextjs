import Divider from "@/components/divider";
import {getCategoriesOnlySlug, getPostsByCategoryName} from "@/lib/api";
import { stringShortener } from "@/utils/string_helpers";
import toImageUrl from "@/utils/to_image_url";
export default async function Category({params}) {
    const { slug } = params
    const res = await getPostsByCategoryName(slug)
    const title = res.categories.data[0].attributes.Name
    return (
        <div className="mx-auto max-w-[1180px] my-6 flex flex-wrap justify-center">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <Divider className="mt-3 mb-6"/>
            {
                res.posts.data.map((post,index) => {
                    post = post.attributes
                    return (
                        <div className="sm:mb-4 mb-8 flex flex-col sm:flex-row min-w-full" key={index}>
                            <div className="sm:w-1/4 w-full">
                                <a href={"/haber/"+post.Slug} className="relative flex justify-center">
                                    <img src={toImageUrl(post.Banner.data.attributes.url)} alt={post.Banner.data.attributes.alternativeText} className="
                                    sm:w-60
                                    w-[90%]
                                    md:h-32
                                    sm:h-40
                                    h-44
                                    ml-0
                                    sm:ml-4
                                    object-cover
                                    "
                                    />
                                </a>
                            </div>
                            <div className="sm:w-2/3 w-full lg:pl-0 md:pl-4 sm:pl-8 ">
                                <a href={"/haber/"+post.Slug} className="relative  flex flex-col justify-center items-center">
                                    <h1 className="font-bold sm:text-[20px] text-[20px] sm:w-full w-[90%] sm:pt-0 pt-2">{post.Title}</h1>
                                    <p className="sm:flex hidden">{stringShortener(post.Description + post.Description, 264)}</p>
                                </a>
                            </div>
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