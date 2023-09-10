export default function RowGenis({news}) {
    return (
        <div className="flex my-4">
            {
                news.map((post, index) => {
                    var link = "http://localhost:3000/"+post.categories.nodes[0].slug+"/"+post.slug
                    if (index == 0) {
                        return (
                            <a href={link} className="w-1/3">
                                <div className="h-full pr-2">
                                    <div className="h-[215px] overflow-hidden mb-2">
                                        <img className="object-cover h-full w-full" src={post.featuredImage.node.mediaItemUrl} alt="an example"/>
                                    </div>
                                    <span className="text-sm bg-yblue text-[#fff] p-1">{post.categories.nodes[0].name}</span>
                                    <p className="font-medium text-lg">{post.title}</p>
                                </div>
                            </a>
                        )
                    } else if(index == 2) {
                        return (
                            <a href={link} className="w-1/3">
                                <div className="h-full pl-2">
                                    <div className="h-[215px] overflow-hidden mb-2">
                                        <img className="object-cover h-full w-full" src={post.featuredImage.node.mediaItemUrl} alt="an example"/>
                                    </div>
                                    <span className="text-sm bg-yblue text-[#fff] p-1">{post.categories.nodes[0].name}</span>
                                    <p className="font-medium text-lg">{post.title}</p>
                                </div>
                            </a>
                        )
                    } else {
                        return (
                            <a href={link} className="w-1/3">
                                <div className="h-full px-2">
                                    <div className="h-[215px] overflow-hidden mb-2">
                                        <img className="object-cover h-full w-full" src={post.featuredImage.node.mediaItemUrl} alt="an example"/>
                                    </div>
                                    <span className="text-sm bg-yblue text-[#fff] p-1">{post.categories.nodes[0].name}</span>
                                    <p className="font-medium text-lg">{post.title}</p>
                                </div>
                            </a>
                        )
                    }
                })
            }
        </div>
    )
}