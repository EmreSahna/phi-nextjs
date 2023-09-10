export default function UcluRow({ news }) {
    return (
        <div className="h-[250px] flex font-semibold">
            {
                news.map((post,index) => {
                    return (
                        <div className="w-1/3 h-full px-2" key={index}>
                            <a href={post.categories.nodes[0].slug+"/"+post.slug} className="relative">
                                <div className="absolute top-0 ml-1 mt-1 bg-yblue">
                                    <span className="text-[#fff] m-1">{post.categories.nodes[0].name}</span>
                                </div>
                                <img src={post.featuredImage.node.mediaItemUrl} className="object-cover w-full h-full" />
                                <div className="absolute bottom-0 bg-yblue w-full p-2">
                                    <span className="text-[#fff] text-lg">{post.title}</span>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}