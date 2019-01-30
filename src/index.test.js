// @flow

/* eslint-env jest */

import compress from './'

describe('compress', (): void => {
  it('works', (): void => {
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
    const expected =
      // eslint-disable-next-line no-useless-escape
      'query{repository(owner:"octocat",name:"Hello-World"){issues(last:20,states:CLOSED){edges{node{title url labels(first:5){edges{node{name}}}}}}}}'
    expect(compress(query)).toBe(expected)
  })

  it('handles no input', (): void => {
    expect(compress()).toBe('')
  })
})
