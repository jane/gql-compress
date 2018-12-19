# gql-compress

Shrink your GraphQL

# Installation

`npm i gql-compress`

# Usage

```javascript
import compress from 'gql-compress'

const query = compress(`
  query {
    repository(owner:"octocat", name:"Hello-World") {
      issues(last:20, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`)
```

Example from [GitHub](https://developer.github.com/v4/guides/forming-calls/).

[MIT](./LICENSE.md)
