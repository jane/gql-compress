export default (s: string = ''): string =>
  s
    // replace multiple whitespace with a single
    .replace(/(\b|\B)\s{1,}(\b|\B)/gm, ' ')
    // remove all whitespace between everything except for word and word boundaries
    .replace(/(\B)\s{1,}(\B)|(\b)\s{1,}(\B)|(\B)\s{1,}(\b)/gm, '')
    .trim()
