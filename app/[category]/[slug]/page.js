export default async function Page({ params }) {
    const { slug } = params

    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                         title
                         slug
                         content
                         featuredImage {
                            node {
                                sourceUrl
                            }
                         } 
                    }
                }
            `,
            variables: {
                id: slug,
                idType: 'SLUG'
            }
        })
    }).then((res) => res.json())

    const post = res.data.post

    return(
        <div className="max-w-[1180px] mx-auto article">
            <h1>{post.title}</h1>
            <div className="mb-6">
                <article dangerouslySetInnerHTML={{__html: post.content}}></article>
            </div>
            <div className="text-center">
                <span className="font-semibold text-[16px] text-yblue">İlginizi Çekebilir</span>
                <hr/>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `})
    }).then((res) => res.json())

    const posts = res.data.posts.nodes;

    return posts.map((post) => ({
        slug: post.slug
    }))
}