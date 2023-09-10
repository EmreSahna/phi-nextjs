export default function RowHaber({ news }) {
    return (
        <div className="h-[250px] flex">
        {
            news.map(post => {
                var link = "http://localhost:3000/posts/"+post.slug
                return(
                <div className="w-1/4 p-4">
                    <a href={link}>
                        <div className="h-[125px] overflow-hidden mb-2">
                            <img className="object-cover h-full w-full" src={post.featuredImage.node.mediaItemUrl} alt="an example"/>
                        </div>
                        <span className="font-medium">{post.title}</span>
                    </a>
                </div>
                )
            })
        }
        </div>
    )
}