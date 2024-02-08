import { getPostsSlugs, getSinglePost } from "@/lib/api";
import { dateToTR } from "@/utils/date_helpers";
export async function generateMetadata({ params }) {
    const URL = "https://phihaber.com"
    const id = params.slug
    const product = await getSinglePost(id)

    return {
        title: product.Title + " | PhiHaber",
        description: product.Description,
        openGraph: {
            title: product.Title,
            siteName: 'PhiHaber',
            locale: 'tr_TR',
            url: `${URL}/haber/${id}`,
            images: [`${URL}/strapi${product.Banner.data.attributes.url}`],
            type: 'website',
            description: product.Description,
        }
    }
}

export default async function Page({ params }) {
    const { slug } = params
    const res = await getSinglePost(slug)
    const category = {
        Name: res.categories.data[0].attributes.Name,
        Slug: res.categories.data[0].attributes.Slug
    }

    return (
        <div className="max-w-[1180px] mx-auto my-4">
            <div className="flex sm:text-xl text-lg xl:mx-0 ml-4">
                <h5 className="pr-1">Kategori -</h5>
                <a href={`/kategori/${category.Slug}`} className="font-medium text-yblue">{category.Name}</a>
            </div>
            <h2 className="font-bold text-4xl xl:mx-0 mx-4 my-2">{res.Title}</h2>
            <DateAndSocialShareRow createdAt={res.createdAt} />
            <div className="xl:mx-0 mx-4">
                <article
                    dangerouslySetInnerHTML={{
                        __html: `
                        <style>
                            article {
                                display: flex;
                                flex-direction: column;
                                text-align: left;
                                max-width: 850px!important;
                            }
                            article br {
                                display: none;
                            }
                            article img {
                                width: 600px!important;
                                height: 350px!important;
                                object-fit: cover;
                                margin: auto;
                                margin-bottom: 12px;
                            }
                            @media (max-width: 1200px) {
                                article img {
                                    padding-left: 12px;
                                    padding-right: 12px;
                                }
                            }
                            article h1 {
                                font-size: 44px!important;
                                font-weight: 700!important;
                                padding-top: 40px;
                            }
                            article h4 {
                                font-size: 20px!important;
                                font-weight: 500!important;
                                padding-top: 20px;
                            }
                            article p {
                                font-size: 20px;
                                margin-top: 25px;
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

function DateAndSocialShareRow({ createdAt }) {
    return (
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-start align-text-top sm:mr-20">
            <p className="flex font-light text-sm xl:ml-0 ml-4">
                {dateToTR(createdAt)}
            </p>
            <div className="flex items-center xl:mx-0 mx-3 sm:ml-0 ml-4">
                <a href="#" className="mr-2">
                    <span className="before:content-['\e818'] font-newspaper text-white bg-[#4064AC] text-3xl align-midle px-3 py-1" />
                </a>
                <a href="#" className="mx-2">
                    <span className="before:content-['\E831'] font-newspaper text-[#2FA3F1] text-3xl align-midle " />
                </a>
                <a href="#" className="mx-2">
                    <span className="before:content-['\f232'] font-newspaper text-4xl text-[#519B44]" />
                </a>
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