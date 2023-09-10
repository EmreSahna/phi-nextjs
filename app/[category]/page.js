export default async function Category({params}) {
    const { category } = params

    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            query: `
                query Categories($categoryName: String = "") {
                    posts (where: {categoryName: $categoryName}){
                        nodes {
                            slug
                            title
                            featuredImage {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }
            `,
            variables: {
                categoryName: category
            }
        })
    }).then((res) => res.json())

    return (
        <>
            {
                res.data.posts.nodes.map((post,index) => {
                    return (
                        <p key={index}>{post.title}</p>
                    )
                })
            }
        </>
    )
}

export async function generateStaticParams() {
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query Categories {
              categories {
                nodes {
                  slug
                }
              }
            }
        `})
    }).then((res) => res.json())

    const posts = res.data.categories.nodes;

    return posts.map((post) => ({
        category: post.slug
    }))
}