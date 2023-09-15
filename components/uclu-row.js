export default function UcluRow({ news }) {
    return (
        <div className="h-[250px] flex font-semibold">
            {
                news.map((post, index) => {
                    post = post.attributes
                    return (
                        <div className="w-1/3 h-full px-2" key={index}>
                            <a href={"/haber/"+post.Slug} className="relative">
                                <div className="absolute top-0 ml-1 mt-1 bg-yblue">
                                    <span className="text-[#fff] m-1">{post.categories.data[0].attributes.Name}</span>
                                </div>
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