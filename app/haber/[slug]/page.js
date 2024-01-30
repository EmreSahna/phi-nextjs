import {getPostsSlugs, getSinglePost} from "@/lib/api";
import { dateToTR } from "@/utils/date_helpers";

export async function generateMetadata({ params }) {
    const URL = "https://phihaber.com"
    const id = params.slug
    const product = await getSinglePost(id)

    return {
        title: product.Title + " | PhiHaber",
        openGraph: {
            title: product.Title,
            siteName: 'PhiHaber',
            locale: 'tr_TR',
            url: `${URL}/haber/${id}`,
            images:[`${URL}/strapi${product.Banner.data.attributes.url}`],
            type: 'website',
            description: product.Description,
        }
    }
}

export default async function Page({ params }) {
    const { slug } = params

    const res = await getSinglePost(slug)
    console.log(res.Content)
    console.log(dateToTR(res.createdAt));
    return(
        <div className="max-w-[1180px] mx-auto ">
            <h2 className="font-bold text-4xl xl:mx-0 mx-4 my-2">{res.Title}</h2>
            <div className="article xl:mx-0 mx-4">
                <article
                    dangerouslySetInnerHTML={{
                        __html: `
                        <style>
                            @media (max-width: 1200px) {
                                img {
                                    padding-left: 12px;
                                    padding-right: 12px;
                                }
                            }
                            h1 {
                                font-size: 44px!important;
                                font-weight: 700!important;
                                padding-top: 40px;
                            }
                            h4 {
                                font-size: 20px!important;
                                font-weight: 500!important;
                                padding-top: 20px;
                            }
                            article {
                                max-width: 850px!important;
                            }
                            p {
                                font-size: 20px!important;
                                margin-top: 35px!important;
                            }
                        </style>
                        ${res.Content}
                        `,
                    }}
                />
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const res = await getPostsSlugs()

    return res.map((post) => ({
        slug: post.attributes.Slug
    }))
}