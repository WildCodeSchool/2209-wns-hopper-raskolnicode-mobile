export type Blog = {
    created_at: string
    description: string
    id: number
    name: string
    posts: Post[]
    picture:Picture
    updated_at: string
    user: User
};

export type Post = {
    blog: Blog
    comments: Comment[]
    content: string
    created_at: string
    id: number
    image: string
    picture:Picture
    isArchived: boolean
    summary: string
    title: string
    updated_at: string
}

export type User = {
    blogs: Blog[]
    comments: Comment[]
    email: string
    id: number
    password: string
    pseudo: string
    role: string
}

export type Comment = {
    created_at: string
    id: number
    post: Post
    text: string
    user: User
}
export type Picture = {
    id: number
    name: string
    link: string
  }