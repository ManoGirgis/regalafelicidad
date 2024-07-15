import { gql } from '@apollo/client';

export const Get_Posts = gql`
 query GetPosts {
    posts {
      nodes {
        id
        title
        content
        date
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

export const Get_a_Post = gql`
query GetPost($id: ID!) {
  post(id: $id) {
    id
    title
    content
    date
    author {
      node {
        id
      }
    }
    comments {
      edges {
        node {
          id
        }
      }
    }
  }
}
`;