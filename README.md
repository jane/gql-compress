# gql-compress

Shrink your GraphQL

[![CircleCI](https://circleci.com/gh/jane/gql-compress.svg?style=svg)](https://circleci.com/gh/jane/gql-compress) [![Coverage Status](https://coveralls.io/repos/github/jane/gql-compress/badge.svg?branch=master)](https://coveralls.io/github/jane/gql-compress?branch=master)

----

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
