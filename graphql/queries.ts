import { gql } from "@apollo/client";


export const GET_BLOGS = gql`
  query GetBlogs {
    getBlogs {
      id
      description
      name
      created_at
      user {
        id
        email
        pseudo
      }
      updated_at
      posts {
        id
        summary
        title
        content
        picture {
          link
          name
        }
        updated_at
      }
      picture {
        link
        name
      }
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($getBlogId: ID!) {
    getBlog(id: $getBlogId) {
      id
      name
      description
      updated_at
      user {
        id
        email
        pseudo
      }
      posts {
        id
        title
        summary
        content
        picture {
          name
          link
        }
        updated_at
      }
    }
  }
`;




export const GET_POST = gql`
query GetPost($postId: ID!) {
  getPost(postId: $postId) {
    comments {
      created_at
      id
      text
      user {
        pseudo
      }
    }
    content
    created_at
    id
    isArchived
    picture {
      link
      name
    }
    summary
    title
    updated_at
  }
}
`;

export const GET_LOGGED_USER = gql`
  query LoggedUser {
    loggedUser {
      id
      email
      password
      pseudo
      role
      blogs {
        id
        name
        description
        updated_at
      }
    }
  }
`;