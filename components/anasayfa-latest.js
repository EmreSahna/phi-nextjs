export default function AnasayfaLatest({ news }) {
    return (
        <div className="h-[400px] flex">
            <div className="h-full mr-1 w-1/2 relative">
                <a href={"/"+news[0].categories.nodes[0].slug+"/"+ news[0].slug}>
                    <div className="absolute top-0 bg-yblue ml-1 mt-1">
                        <span className="text-[#fff] m-1">{news[0].categories.nodes[0].name}</span>
                    </div>
                    <img src={news[0].featuredImage.node.mediaItemUrl} className="h-full w-full object-cover" />
                    <div className="absolute bottom-0 bg-yblue w-full p-1">
                        <span className="text-[#fff] text-xl">{news[0].title}</span>
                    </div>
                </a>
            </div>
            <div className="h-full w-1/2 flex flex-wrap">
                <div className="h-[230px] mb-1 w-full relative">
                    <a href={"/posts/"+ news[1].slug}>
                        <div className="absolute top-0 bg-yblue ml-1 mt-1">
                            <span className="text-[#fff] m-1">{news[1].categories.nodes[0].name}</span>
                        </div>
                        <img src={news[1].featuredImage.node.mediaItemUrl} className="h-full w-full object-cover" />
                        <div className="absolute bottom-0 bg-yblue w-full p-1">
                            <span className="text-[#fff] text-lg">{news[1].title}</span>
                        </div>
                    </a>
                </div>
                <div className="h-[166px] flex w-full">
                    <div className="mr-1 w-1/2 relative">
                        <a href={"/posts/"+ news[2].slug}>
                            <div className="absolute top-0 bg-yblue ml-1 mt-1">
                                <span className="text-[#fff] m-1">{news[2].categories.nodes[0].name}</span>
                            </div>
                            <img src={news[2].featuredImage.node.mediaItemUrl} className="h-full w-full object-cover" />
                            <div className="absolute bottom-0 bg-yblue w-full p-1">
                                <span className="text-[#fff] text-sm">{news[2].title}</span>
                            </div>
                        </a>
                    </div>
                    <div className="w-1/2 relative">
                        <a href={"/posts/"+ news[3].slug}>
                            <div className="absolute top-0 bg-yblue ml-1 mt-1">
                                <span className="text-[#fff] m-1">{news[3].categories.nodes[0].name}</span>
                            </div>
                            <img src={news[3].featuredImage.node.mediaItemUrl} className="h-full w-full object-cover" />
                            <div className="absolute bottom-0 bg-yblue w-full p-1">
                                <span className="text-[#fff] text-sm">{news[3].title}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}