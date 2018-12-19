// @flow

export default (s: string = ''): string =>
  s.replace(/(\b|\B)\s{1,}(\b|\B)/gm, ' ')
