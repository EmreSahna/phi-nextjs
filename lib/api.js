export async function getPosts() {
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            query: `
        query AllPostsQuery {
  posts {
    nodes {
      slug
      title
      content
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
      date
      tags {
        nodes {
          name
        }
      }
    }
  }
}
      `,
        })
    }).then((res) => res.json())

    return res.data.posts.nodes;
}

export async function getLatestSonDakika() {
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            query: `
            query LatestFourSondakika {
              posts(where: {categoryId: 3}, first: 4) {
                nodes {
                  date
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
        })
    }).then((res) => res.json())

    return res.data.posts.nodes;
}

export async function getLatestEkonomi() {
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            query: `
            query LatestFourSondakika {
              posts(where: {categoryId: 4}, first: 4) {
                nodes {
                  date
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
        })
    }).then((res) => res.json())

    return res.data.posts.nodes;
}

export async function getFirstPostsByNumb(limit){
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query:`
            query FirstByLimit($limit: Int!) {
              posts(first: $limit) {
                nodes {
                  title
                  slug
                  categories {
                    nodes {
                      slug
                    }
                  }
                  date
                }
              }
            }`,
            variables: {
                limit
            }
        })
    }).then((res) => res.json())

    return res.data.posts.nodes;
}

export async function getAnasayfaLatest() {
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            query: `
            query AnasayfaLatest {
              posts(first: 7) {
                nodes {
                  date
                  slug
                  title
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                      slug
                    }
                  }
                }
              }
            }
            `,
        })
    }).then((res) => res.json())

    return res.data.posts.nodes;
}

export async function getCategories() {
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            query: `
                query AllPostsQuery {
                    categories {
                        nodes {
                            name
                            slug
                        }
                    }
                }
            `,
        })
    }).then((res) => res.json())

    return res.data.categories.nodes;
}

export async function getAnasayfaUstKisim() {
    const res = await fetch('http://127.0.0.1/wordpress/index.php?graphql', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            query: `
        query AllPostsQuery {
          posts(first: 11) {
            nodes {
              slug
              title
              categories {
                nodes {
                  name
                  slug
                }
              }
              date
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      `,
        })
    }).then((res) => res.json())

    return res.data.posts.nodes;
}