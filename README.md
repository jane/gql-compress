# gql-compress

Shrink your GraphQL

![npm version](https://img.shields.io/npm/v/gql-compress.svg)](https://npm.im/gql-compress) [![CircleCI](https://circleci.com/gh/jane/gql-compress.svg?style=svg)](https://circleci.com/gh/jane/gql-compress) [![Coverage Status](https://coveralls.io/repos/github/jane/gql-compress/badge.svg?branch=master)](https://coveralls.io/github/jane/gql-compress?branch=master)

----

# Installation

`npm i gql-compress`

# Usage

```javascript
import compress from 'gql-compress'

const uncompressed = `
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
` // 357 bytes

const compressed = compress(uncompressed) // 147 bytes
// outputs: "query{repository(owner:\"octocat\",name:\"Hello-World\"){issues(last:20,states:CLOSED){edges{node{title url labels(first:5){edges{node{name}}}}}}}}"
```

Example from [GitHub](https://developer.github.com/v4/guides/forming-calls/).

[MIT](./LICENSE.md)
