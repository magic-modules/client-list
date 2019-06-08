export const View = (props = {}) =>
  CHECK_PROPS(props, propTypes, 'LibraryList') &&
  GitList({
    org: 'magic-libraries',
    header: [Link({ to: 'https://magic-libraries.github.io' }, '@magic-libraries')],
    desc: ['below is a collection of the available @magic client libraries.'],
    items: [
      {
        name: 'json',
        description: [
          'the @magic-libraries/json module parses and stringifies json.',
          ' it also returns errors instead of throwing them.',
        ],
      },
      {
        name: 'is',
        description: 'the @magic-libraries/is module unifies the javascript type testing apis.',
      },
      {
        name: 'uri',
        description: [
          'the @magic-libraries/uri module',
          ' encodes objects to uri strings and decodes uri strings to objects.',
        ],
      },
      {
        name: 'gql',
        description: [
          'the @magic-libraries/gql module',
          ' encodes template strings to graphql queries ready to be sent to a server.',
        ],
      },
    ],
    ...props,
  })

export const propTypes = {
  LibraryList: [
    { key: 'id', type: 'string' },
    { key: 'org', type: 'string' },
    { key: 'header', type: 'string' },
    { key: 'desc', type: ['string', 'array'] },
    { key: 'items', type: 'array' },
  ],
}
