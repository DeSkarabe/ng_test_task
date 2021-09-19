export type Category = {
    id: number,
    name: string
}
  
export type Post = {
    id: number,
    name: string,
    message: string,
    createdAt: any,
    category: any
}

export type Cached = {
    posts: Post[],
    categories: Category[]
}